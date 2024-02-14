import React from 'react';
import './Map.css'; // Import the external CSS file

const Map = () => {
  return (
    <div className="map-container">
      {/* Google Map iframe */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234700.34595446291!2d77.24107430223238!3d23.199639470061165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1706805034410!5m2!1sen!2sin"
        width="500"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
      <button className="map-button">Maps</button>
    </div>
  );
};

export default Map;
