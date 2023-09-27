import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {

  const navigate = useNavigate();
  const [userData, setUserData] = useState({ name: "", email: "", phone: "", message: "" });
  const userContact = async () => {
    try {
      const res = await fetch('/getData', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const data = await res.json();

      console.log(data);
      setUserData({ ...userData, name: data.name, email: data.email, phone: data.phone });
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }

    }
    catch (err) {
      console.log(err);
      navigate("/login");
    }
  }

  useEffect(() => {
    userContact();

  }, []);



  // Storing data in states

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });   //adding message in userstate
  }

  // send the data to the backend
  const contactForm = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = userData;
    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, message
      })
    });
    const data = await res.json();
    if (!data)
      console.log("message not send");
    else
      alert("Message send");
    setUserData({...userData,message:""});
  }




  return (
    <>
      <div className='contact_info'>
        <div className='container-fluid ' >
          <div className='row'>
            <div className='col-lg-10 offset-lg-1 d-flex justify=content-between'>
              <div className='contact_info_item d-flex justify-content-start align-items-center'>
                <img src="https://img.icons8.com/office/24/000000/iphone.png" alt="phone" />
                <div className='contact_info_content'>
                  <div className='contact_info_title'>
                    Phone
                  </div>
                  <div className='contact_info_text'>
                    +918957532331
                  </div>

                </div>
              </div>

              <div className='contact_info_item d-flex justify-content-start align-items-center'>
                <img src="https://img.icons8.com/office/24/000000/email.png" alt="phone" />
                <div className='contact_info_content'>
                  <div className='contact_info_title'>
                    Email
                  </div>
                  <div className='contact_info_text'>
                    bisenprateeksingh@gmail.com
                  </div>

                </div>
              </div>

              <div className='contact_info_item d-flex justify-content-start align-items-center'>
                <img src="https://img.icons8.com/office/24/000000/address.png" alt="phone" />
                <div className='contact_info_content'>
                  <div className='contact_info_title'>
                    Address
                  </div>
                  <div className='contact_info_text'>
                    Farrukhabad Up
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>

      </div>



      {/* contact form */}
      <div className='contact-form'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-10 offset-lg-1'>
              <div className='contact_form_container py-5'>
                <div className='contact_form_title'>
                  Get in Touch
                  <form method="POST" id='contact_form'>
                    <div className='contact_form_name '>

                      <input type="text" id="contact_form_name" className="contact_form_name input_field"
                        placeholder='Your name' required="true"
                        name='name'
                        value={userData.name}
                        onChange={handleInputs}
                      /> <br />

                      <input type="email" id="contact_form_email" className="contact_form_email input_field"
                        placeholder='Your email' required="true"
                        name='email'
                        value={userData.email}
                        onChange={handleInputs}
                      />

                      <input type="number" id="contact_form_number" className="contact_form_number input_field"
                        placeholder='Your number' required="true"
                        name='phone'
                        value={userData.phone}
                        onChange={handleInputs}
                      />
                    </div>

                    <div className='contact_form_text mt-5'>
                      <textarea className="text_field contact_form_message"
                        name='message'
                        value={userContact.message}
                        onChange={handleInputs}
                        placeholder="Message" cols="30" rows="10"></textarea>

                    </div>
                    <div className='contact_form_button'>
                      <button type="submit" onClick={contactForm} className='button contact_submit_button'>Send Message</button>

                    </div>

                  </form>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </>
  )
}
