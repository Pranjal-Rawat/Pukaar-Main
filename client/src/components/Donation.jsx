// DonationContext.js
import React, { createContext, useContext, useState } from 'react';
import Modal from 'react-modal';
import { TextField, Button } from '@mui/material';
import logo from '../Assests/pukaarsans.jpg';
import '../App.css';

Modal.setAppElement('#root');

const DonationContext = createContext();

export const useDonation = () => useContext(DonationContext);

export const DonationProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [donation, setDonation] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [address, setAddress] = useState('');

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handlePayment = () => {
    const options = {
      key: "rzp_live_ck71r73GBaQuiP", // Replace with your Razorpay key
      amount: donation * 100, // Amount in paisa
      currency: 'INR',
      name: 'Pukaar Sanshtha',
      description: `Donation`,
      image: logo, // Replace with your company logo URL
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        // You can also send this payment ID to your backend for verification and further processing
      },
      prefill: {
        name: name,
        email: email,
        contact: phoneno
      },
      notes: {
        address: address
      },
      theme: {
        color: '#6e1b2a'
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <DonationContext.Provider value={{ openModal, setDonation, setName, setEmail, setPhoneno, setAddress }}>
      {children}
      <Modal
        style={{zIndex:"1000"}}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Donation Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <form className="modal-content" onSubmit={(e) => { e.preventDefault(); handlePayment(); }}>
          <h2 className="modal-title">Donate to Pukaar Sanshtha</h2>
          <div className="modal-body">
            <TextField
              label='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label='Phone'
              value={phoneno}
              onChange={(e) => setPhoneno(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label='Address'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label='Donation Amount (₹)'
              type='number'
              value={donation}
              onChange={(e) => setDonation(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
          </div>
          <div className="modal-footer">
            <Button sx={{color:"6e1b2a"}} type="submit" variant="contained" color="primary">Donate Now</Button>
            <Button sx={{color:"6e1b2a"}} onClick={closeModal} variant="outlined" color="secondary">Close</Button>
          </div>
        </form>
      </Modal>
    </DonationContext.Provider>
  );
};
