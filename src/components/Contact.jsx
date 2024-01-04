import React from 'react'
import { useState,useRef , useEffect} from 'react'
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'

import { styles } from '../styles';
// import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

 
// import dotenv from 'dotenv';
// dotenv.config();
const id = import.meta.env.REACT_APP_ID
const service_id = import.meta.env.REACT_APP_SERVICE_ID
const template_id = import.meta.env.REACT_APP_TEMPLATE_ID










const Contact = () => {

  const formRef = useRef();
  const [loading,setloading] = useState(false);
  const [form,setForm] = useState({
    name:'',
    email:'',
    msg:'',
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);


    emailjs.send(
    service_id,
    template_id,
    {
      from_name:form.name,
      to_name:'Arnav',
      from_email:form.email,
      to_email:'morearnav024@gmail.com',
      message:form.msg
    },
    id
    )
    .then(()=>{
      setloading(false);
      alert('Thank you for reaching me out!,i will answer you soon')
      
      setForm({
        name:"",
        email:"",
        msg:"",
      })
    
    }
    ,(error) => {
      setloading(false);
      console.log(error);
      alert('Uh oh Something went Wrong, please try later');
    }
    
    )
  }

  const handleChange = (e) => {
    const { name,value } = e.target;
    setForm({...form,[name]:value})
  }

  


  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
        <motion.div
        variants={slideIn('left',"tween",0.2,1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        
        >

          <p className={`${styles.sectionSubText}`}>Get in Touch</p>
          <h2 className={`${styles.sectionHeadText}`}>Contact.</h2>
        <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input type='text' name="name" value={form.name} onChange={handleChange} placeholder="What's your name?" className='bg-tertiary py-4 px-6 text-white rounded-lg outlined-none placeholder:text-secondary'></input>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type='text' name="email" value={form.email} onChange={handleChange} placeholder="What's your email?" className='bg-tertiary py-4 px-6 text-white rounded-lg outlined-none placeholder:text-secondary'></input>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            
            <textarea name="msg" value={form.msg} onChange={handleChange} placeholder="What do you wanna say?" className='bg-tertiary py-4 px-6 text-white rounded-lg outlined-none placeholder:text-secondary h-[150px]'>

            </textarea>
            
          </label>

          <button type='submit' className='bg-tertiary text-white py-3 px-8 rounded-xl shadow-primary font-bold shandow-md'>
            {loading? 'Sending...':'Send'}
          </button>
        </form>
        
        
        
        
        </motion.div>

        {/* <motion.div
        variants={slideIn('right',"tween",0.2,1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
        <EarthCanvas /> 
        </motion.div> */}
    </div>
  )
}

export default SectionWrapper(Contact,"contact");