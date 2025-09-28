// pages/Location.jsx
import React from 'react';

const Location = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Location</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Hostel Address</h2>
          
          <div className="bg-gray-100 rounded-xl p-6 mb-8">
            <div className="flex items-start mb-6">
              <div className="text-blue-600 text-xl mr-4">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Student Hostel</h3>
                <p className="text-gray-600">123 Hostel Road, University Area</p>
                <p className="text-gray-600">City, State 12345</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="text-blue-600 text-xl mr-4">
                <i className="fas fa-directions"></i>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Directions</h3>
                <p className="text-gray-600 mb-2">From City Central Railway Station:</p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Take Bus No. 25 towards University Road</li>
                  <li>Get down at University Stop (15 minutes)</li>
                  <li>Walk 200m towards Hostel Road</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="font-semibold text-gray-800 mb-4">Landmarks</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600">
                <i className="fas fa-university text-blue-500 mr-3"></i>
                <span>Opposite University Main Gate</span>
              </li>
              <li className="flex items-center text-gray-600">
                <i className="fas fa-shopping-cart text-blue-500 mr-3"></i>
                <span>Next to City Mall</span>
              </li>
              <li className="flex items-center text-gray-600">
                <i className="fas fa-hospital text-blue-500 mr-3"></i>
                <span>10 minutes from City Hospital</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Map Location</h2>
          <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <i className="fas fa-map-marked-alt text-4xl text-gray-500 mb-4"></i>
              <p className="text-gray-600">Interactive map would be embedded here</p>
              <p className="text-sm text-gray-500 mt-2">(Google Maps or similar service)</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-100 rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">Transportation Options</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-green-500 text-4xl mb-4">
              <i className="fas fa-bus"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Bus</h3>
            <p className="text-gray-600">Bus stops within 5 minutes walking distance with connections to all city areas.</p>
          </div>
          
          <div className="text-center">
            <div className="text-blue-500 text-4xl mb-4">
              <i className="fas fa-subway"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Metro</h3>
            <p className="text-gray-600">Nearest metro station is 2km away with auto-rickshaw service available.</p>
          </div>
          
          <div className="text-center">
            <div className="text-yellow-500 text-4xl mb-4">
              <i className="fas fa-taxi"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Taxi/Auto</h3>
            <p className="text-gray-600">Easy availability of taxis and auto-rickshaws throughout the day.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;