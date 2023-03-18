import React, {useRef, useState} from 'react'
import './style.css'
import emailjs from '@emailjs/browser';
import './subscribe.css'
import axios from 'axios';


const HeroSection = () => {
  // console.log(process.env.REACT_APP_SHEET_LINK);
  // // dotenv.config()
  const [user_email, setDepartment] = useState('');

  const form = useRef();

  const sendEmail = event => {

    //To send Mail
    emailjs.sendForm('service_bg8fu3o', 'template_jsraigk', form.current, 'mUhk-KJOg2W4_MMPc')
    .then((result) => {
        console.log(result.text);
        console.log("message sent");
    }, (error) => {
        console.log(error.text);
    });

    const data={
      Email: user_email
    }

    axios.post("https://sheet.best/api/sheets/de377a36-3666-43e6-bc1e-f9636e0ad02f",data).then((response)=>{
      setDepartment('');
      console.log("data clear");
    })

    // To prevent page refresh
    event.preventDefault();

    //clear input values after submit 
    // setDepartment('');
};


  return <div className='hero-section-wrapper'>
    <div className='flex absolute-center flex-col hero-section max-width'>
      {/* -------------------------- Heading ------------------------- */}
      <div className='hero-heading'>
      PolarsDev Coming Soon!
      </div>

      {/* ----------------------- Sub-Heading ------------------------ */}
      <div className='hero-subheading'>
        Polaris for your Developement.
      </div>

<form ref={form} onSubmit={sendEmail}>
      <div className='wrapper'> 
      <input type="checkbox" id="click"/>
      <label className="btn-1" htmlFor="click">Subscribe</label>
      <div className='field'>
        <input type="email" id="user_email" name='user_email' value={user_email}  placeholder="Enter Your Email" onChange={event => setDepartment(event.target.value)}/>
        <input type="submit" htmlFor="click" className="btn-2" value="Subscribe" />
      </div>
      </div>
      </form>
    </div> 
    </div>
}

export default HeroSection;

