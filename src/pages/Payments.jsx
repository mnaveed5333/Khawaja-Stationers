// pages/Payments.jsx
import React, { useState } from 'react';

const Payments = () => {
  const [paymentData, setPaymentData] = useState({
    name: '',
    roomNumber: '',
    amount: '',
    paymentMethod: '',
    transactionId: ''
  });

  const paymentMethods = [
    { id: 'upi', name: 'UPI' },
    { id: 'card', name: 'Credit/Debit Card' },
    { id: 'netbanking', name: 'Net Banking' },
    { id: 'banktransfer', name: 'Bank Transfer' }
  ];

  const handleChange = (e) => {
    setPaymentData({
      ...paymentData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment submission here
    alert('Payment details submitted!');
    setPaymentData({
      name: '',
      roomNumber: '',
      amount: '',
      paymentMethod: '',
      transactionId: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Payment Methods</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Make a Payment</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={paymentData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="roomNumber" className="block text-gray-700 mb-2">Room Number</label>
              <input
                type="text"
                id="roomNumber"
                name="roomNumber"
                value={paymentData.roomNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="amount" className="block text-gray-700 mb-2">Amount (₹)</label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={paymentData.amount}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="paymentMethod" className="block text-gray-700 mb-2">Payment Method</label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={paymentData.paymentMethod}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Payment Method</option>
                {paymentMethods.map(method => (
                  <option key={method.id} value={method.id}>{method.name}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="transactionId" className="block text-gray-700 mb-2">Transaction ID</label>
              <input
                type="text"
                id="transactionId"
                name="transactionId"
                value={paymentData.transactionId}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
            >
              Submit Payment Details
            </button>
          </form>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Payment Options</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <i className="fas fa-mobile-alt text-blue-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">UPI Payment</h3>
              </div>
              <p className="text-gray-600">Scan the QR code or use our UPI ID: hostel@upi</p>
              <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center mt-4">
                <p className="text-gray-500">QR Code would appear here</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <i className="fas fa-university text-green-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Bank Transfer</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <p><span className="font-semibold">Bank Name:</span> Example Bank</p>
                <p><span className="font-semibold">Account Name:</span> Student Hostel</p>
                <p><span className="font-semibold">Account Number:</span> 1234567890</p>
                <p><span className="font-semibold">IFSC Code:</span> EXMP0123456</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-100 rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Payment Policy</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment Schedule</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <i className="fas fa-calendar-check text-blue-500 mr-3"></i>
                <span>Rent due by 5th of every month</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-exclamation-triangle text-yellow-500 mr-3"></i>
                <span>Late fee: ₹100/day after due date</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-receipt text-green-500 mr-3"></i>
                <span>Receipt provided for all payments</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Refund Policy</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <i className="fas fa-money-bill-wave text-red-500 mr-3"></i>
                <span>Security deposit refunded after vacating</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-clock text-purple-500 mr-3"></i>
                <span>Refund processed within 15 working days</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-file-invoice text-orange-500 mr-3"></i>
                <span>Deductions for damages or outstanding payments</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;