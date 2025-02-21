import React,{useState,useEffect} from 'react'
import '../styles/Contact.css'
import cntcoder from '../assets/cntcoder.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import axios from 'axios'
const Contact = () => {
    let [name,setName]=useState("");
    let [contact,setContact]=useState("");
    let [email,setEmail]=useState("");
    let [comments,setComments]=useState("");
    let data = {name,contact,email,comments};//always keep in mind to use payload in object format otherwise the key name will be stored as numbers
    function submit(){
        // e.preventDefault()
        axios.post("https://portfolio-backend-lzoq.onrender.com/visitors",data)
        .then((res)=>{
            // alert("data submitted")
            console.log(res.data);
            
        })
        .catch((err)=>{console.log("error occured");
        }) 
    }
    console.log(data);
    
  return (
    <div className='contact' id='contactnav'>
        <div className="cs1">
            <img src={cntcoder} alt="" />
        </div>
        <div className='cs2'>
            <form onSubmit={submit}> 
                <fieldset> 
                    <h3>Looks like you want to hire me !!!</h3> 
                    <h1>Reach Out !</h1> 
                    <label htmlFor="">Name:</label> 
                    <input required type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/><br /> 
                    <label htmlFor="">Contact:</label> 
                    <input required type="tel" pattern='[0-9]{10}' value={contact} onChange={(e)=>{setContact(e.target.value)}}/><br /> 
                    <label htmlFor="">Email:</label> 
                    <input required type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br /> 
                    <label htmlFor="">Comments:</label> 
                    <textarea name="" id="" rows={5} value={comments} onChange={(e)=>{setComments(e.target.value)}}></textarea><br /> 
                    <button>Submit</button> 
                </fieldset> 
            </form> 
            <div className='sociallogo'> 
                <a href="https://www.facebook.com/adithya.mh"><FacebookIcon fontSize='large' style={{ color: 'white' }} /></a> 
                <a href="https://www.instagram.com/adithya_bond/profilecard/?igsh=eWF5OW5uaGFmenM1"><InstagramIcon fontSize='large' style={{ color: 'white' }}/></a> 
                <a href="https://www.linkedin.com/in/adithya-kc-675a15172/" target='_blank'><LinkedInIcon fontSize='large' style={{ color: 'white' }}/></a> 
                <a href="tel:+917337633150"><PhoneIcon fontSize='large' style={{ color: 'white' }}/></a> 
                <a href="mailto:adithyamh@gmail.com" target='_blank'><EmailIcon fontSize='large' style={{ color: 'white' }}/></a> 
            </div> 
        </div> 
    </div> 
  ) 
} 

export default Contact 
