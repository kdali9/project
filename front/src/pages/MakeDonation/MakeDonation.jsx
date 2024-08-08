// src/components/MakeDonation.jsx
import React, { useState } from 'react';
import './MakeDonation.css'; // Import the CSS file
import axios from 'axios';

const MakeDonation = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/mpesa/stkpush', {
                phoneNumber: phoneNumber,
                amount: amount,
                accountReference: accountNumber,
            });

            console.log('Payment response:', response.data);
            alert('Payment initiated successfully!');
        } catch (error) {
            console.error('Payment error:', error);
            alert('Payment failed, please try again.');
        }
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Mpesa Payment Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="text"
                        id="phone"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="account">Account Number</label>
                    <input
                        type="text"
                        id="account"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <button type="submit" className="submit-btn">
                    Pay Now
                </button>
            </form>
        </div>
    );
};

export default MakeDonation;