import React from 'react';
import './Map.css'; // Import the external CSS file

const Map = () => {
  return (
    <div className="map-container">
      {/* Google Map iframe */}
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234700.34595446291!2d77.24107430223238!3d23.199639470061165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1706805034410!5m2!1sen!2sin"
        width="500"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe> */}


<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3666.5105881404174!2d77.436!3d23.2245!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4244b5eb2c3f%3A0x4e3e7daae7474a0d!2sMansarover%20Complex%2C%20Habibganj%20Rd%2C%20Near%20Habibganj%20Station%2C%20No%206%20Locality%2C%20Shivaji%20Nagar%2C%20Bhopal%2C%20Madhya%20Pradesh%20462016!5e0!3m2!1sen!2sin!4v1709097955702!5m2!1sen!2sin" width="500"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"></iframe>
      <button className="map-button">Maps</button>
    </div>
  );
};

export default Map;
