import React from 'react';

export default function Donation({ show = true }) {
  
  const handlePayment = () => {
    const options = {
      key: "KQHRhj59AUQMxbmneKizaqM9", // Enter the Key ID generated from the Dashboard
      amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise or ₹500.
      currency: "INR",
      name: "PUKAAR ",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: "order_9A33XWu170gUtm", // This is a sample Order ID. Replace with actual Order ID when creating an order.
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Your Name",
        email: "your.email@example.com",
        contact: "9999999999"
      },
      notes: {
        address: "Razorpay Corporate Office"
      },
      theme: {
        color: "#000000"
      }
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div style={{ height: "100vh", zIndex: "999", width: "100vw" }} className={`fixed p-10 rounded-lg w-[100vw] h-[100vh] bg-transparent flex justify-center top-0`}>
      <div className="flex bg-white rounded-xl shadow-xl" style={{ height: "98%", width: "98%" }}>
        <button onClick={handlePayment} className="p-4 bg-blue-500 text-white rounded">Donate Now</button>
      </div>
    </div>
  );
}
