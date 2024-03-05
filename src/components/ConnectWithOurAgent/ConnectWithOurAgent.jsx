import { useState } from "react";
import "./ConnectWithOurAgent.css";
import axios from "axios";

const ConnectWithOurAgent = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [agreementChecked, setAgreementChecked] = useState(false);
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
          FirstName: firstName,
          LastName: lastName,
          Email: email,
          Phone: phone,
          Message: message,
          Agreement: true,
        }

        axios.post('https://sheet.best/api/sheets/1053ddfd-b8c7-4d3f-9ae5-47737b87b37a', data).then((response)=>{
          console.log(response);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setMessage("");
          setAgreementChecked(false);
          alert("Thank you for contacting us. We will get back to you soon.");
        })
      };

    return (
        <div className="agent-container">
            <div className="agent-img"><img src="agent.png" alt="agent"></img></div>
            <div className="agent-form">
                <h1>Connect With Our Agent</h1>
                <p>Our team always active to support you. Any kind of questions about to our product they can answer to you.</p>
                <form onSubmit={handleSubmit}>
                    <div className="first-last-name">
                        <input type="text" placeholder="First Name" name="firstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)} required />
                        <input type="text" placeholder="Last Name" name="lastName" value={lastName} onChange={(e)=>setLastName(e.target.value)} required />
                    </div>
                    <div className="email-phone">
                        <input type="email" placeholder="Email Address" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                        <input type="tel" placeholder="Phone Number" name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} required />
                    </div>
                    <textarea type="text" placeholder="Message" className="message" name="message" value={message} onChange={(e)=>setMessage(e.target.value)} required />
                    <div className="checkbox">
                        <input type="checkbox" name="agreement" checked={agreementChecked} onChange={() => setAgreementChecked(!agreementChecked)} required />
                        <p>I agree that braintree may contact me at the email address or phone number above.</p>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default ConnectWithOurAgent;