import React, {useRef, useState} from 'react'
import './style.css'
import emailjs from '@emailjs/browser';
import './subscribe.css'
import axios from 'axios';
import Swal from 'sweetalert2'


const HeroSection = () => {
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

    axios.post("https://sheet.best/api/sheets/b3270c5f-63e7-4815-af24-2983640fe55f",data).then((response)=>{
      // setDepartment('');
      // console.log("data clear");
      // console.log("data added to sheet");
      console.log(response);
    })

    // To prevent page refresh
    event.preventDefault();

    //clear input values after submit 
    setDepartment('');
};

const Alert = () =>{

  Swal.fire(
    'Great!',
    'You are now Subscribed to Us!',
    'success'
  )
}


  return <div className='hero-section-wrapper'>
    <div className='flex absolute-center flex-col hero-section max-width'>
      {/* -------------------------- Heading ------------------------- */}
      <div className='hero-heading'>
      PolarsDev Coming Soon!
      </div>

      {/* ----------------------- Sub-Heading ------------------------ */}
      <div className='hero-subheading'>
        Your Polaris for Development
      </div>

<form ref={form} onSubmit={sendEmail}>
      <div className='wrapper'> 
      <input type="checkbox" id="click"/>
      <label className="btn-1" htmlFor="click">Subscribe</label>
      <div className='field'>
        <input type="email" id="user_email" name='user_email' value={user_email}  placeholder="Enter Your Email" onChange={event => setDepartment(event.target.value)}/>
        <input type="submit" htmlFor="click" className="btn-2" value="Subscribe" onClick={Alert}/>
      </div>
      </div>
      </form>
    </div> 
    </div>
}

export default HeroSection;

