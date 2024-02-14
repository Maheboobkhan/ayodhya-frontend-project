import { useState } from "react";
import "./ConnectWithOurAgent.css";
import axios from "axios";

const ConnectWithOurAgent = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        agreement: false,
      });
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: type === "checkbox" ? checked : value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Send form data to the backend
        // axios.post("http://localhost:3001/submit-form", formData)
        axios.post("https://ayodhya-backend-project.onrender.com/submit-form", formData)
          .then((response) => {
            console.log("response "+response.data);
            // Handle any additional client-side logic if needed

            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              message: "",
              agreement: false,
            });

            setTimeout(() => {
              alert("Form data submitted successfully");
            }, 500);

          })
          .catch((error) => {
            console.error(error);
          });
      };

    return (
        <div className="agent-container">
            <div className="agent-img"><img src="agent.png" alt="agent"></img></div>
            <div className="agent-form">
                <h1>Connect With Our Agent</h1>
                <p>Our team always active to support you. Any kind of questions about to our product they can answer to you.</p>
                <form onSubmit={handleSubmit}>
                    <div className="first-last-name">
                        <input type="text" placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required />
                        <input type="text" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    </div>
                    <div className="email-phone">
                        <input type="email" placeholder="Email Address" name="email" value={formData.email} onChange={handleChange} required />
                        <input type="tel" placeholder="Phone Number" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <textarea type="text" placeholder="Message" className="message" name="message" value={formData.message} onChange={handleChange} required />
                    <div className="checkbox">
                        <input type="checkbox" name="agreement" checked={formData.agreement} onChange={handleChange} required />
                        <p>I agree that braintree may contact me at the email address or phone number above.</p>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default ConnectWithOurAgent;