import React, { useEffect, useRef, useState } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat, toLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import axios from '../helper/axios';
import Swal from "sweetalert2";
import { Link, useNavigate } from 'react-router-dom';
import { useLogin } from '../auth/LoginContext'; // Import useLogin hook
// import { LoginContext } from '../auth/LoginContext'; // Import LoginContext


const LoginWithMap = ({ closeModal }) => {
    const mapRef = useRef();
    const mapInstance = useRef(null);
    const [location, setLocation] = useState({ latitude: null, longitude: null });

    // const { dispatch } = useContext(LoginContext); // Access dispatch from context
    
    const { dispatch } = useLogin(); // Use useLogin hook to access dispatch
    const navigate = useNavigate();
    

    useEffect(() => {
        const marker = new Feature({
            geometry: new Point(fromLonLat([72.8532, 19.2316]))
        });

        const vectorSource = new VectorSource({
            features: [marker]
        });

        const markerVectorLayer = new VectorLayer({
            source: vectorSource,
        });

        mapInstance.current = new Map({
            target: mapRef.current,
            layers: [
                new TileLayer({
                    source: new OSM()
                }),
                markerVectorLayer
            ],
            view: new View({
                center: fromLonLat([72.8532, 19.2316]),
                zoom: 15
            })
        });

        return () => mapInstance.current.setTarget(undefined);
    }, []);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
            },
            (error) => {
                console.error('Error fetching location', error);
                setLocation({ latitude: null, longitude: null });
            }
        );
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const token = localStorage.getItem('token');
    
        const center = toLonLat(mapInstance.current.getView().getCenter());
        const mapLocation = {
            latitude: center[1],
            longitude: center[0]
        };
        console.log('map', mapLocation)
    
        const credential = {
            email: e.target.email.value,
            user_password: e.target.password.value
        };
    
        const payload = {
            ...credential,
            location: mapLocation
        };
    
        try {
            const response = await axios.post('/maitri_user_login/', payload, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });
            Swal.fire({
                title: "Login successful!",
                icon: "success",
              })
    
            // Rest of your code remains the same
            if (response && response.data) {
                console.log('Response data:', response.data);  // Add this line
            
                const user = response.data.user || response.data;
                const newToken = response.data.token || response.data.access_token || token;
            
                if (user) {
                    localStorage.setItem('user', JSON.stringify(user));
                    if (newToken) {
                        localStorage.setItem('token', newToken);
                    }
            
                    console.log('Login successful:', { user, token: newToken });
                    
                    dispatch({ type: 'LOGIN', payload: { user, token: newToken } });
                    closeModal();
                    navigate('/dashboard');
                } else {
                    throw new Error('Login response did not include user data.');
                }
            } else {
                throw new Error('Login response is undefined or malformed.');
            }
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
            Swal.fire({
                title: "Login failed!",
                icon: "success",
              })
        }
    };
    return (
        <div className=" flex items-center justify-center bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600">
            <div className="bg-white p-8 rounded-lg shadow-md w-[35rem]">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login with Location</h2>
                <div ref={mapRef} className="w-full h-96 mb-6"></div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                            Email
                        </label>
                        <div className="flex items-center border-b border-gray-300">
                            <input
                                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                type="email"
                                id="email"
                                placeholder="Type your email"
                                aria-label="Email"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                            Password
                        </label>
                        <div className="flex items-center border-b border-gray-300">
                            <input
                                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                type="password"
                                id="password"
                                placeholder="Type your password"
                                aria-label="Password"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex justify-end mb-6">
                        <Link to="/AuthForms" className="text-sm text-gray-500 hover:text-gray-700" onClick={closeModal}>
                        
                            Forgot password?
                        </Link>
                    </div>
                    <button
                       className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-full hover:bg-orange-600 hover:opacity-90 transition duration-200"

                        type="submit" 
                    >
                        LOGIN
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600 mb-4">Or Sign Up Using</p>
                    <div className="flex justify-center space-x-4">
                        {/* Social buttons */}
                    </div>
                </div>
                <p className="text-sm text-center mt-6 text-gray-600">
                    Have not account yet?{' '}
                    <Link to="/signUpForm" className="text-blue-500 hover:underline font-semibold" onClick={closeModal}>
                        SIGN UP
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginWithMap;
