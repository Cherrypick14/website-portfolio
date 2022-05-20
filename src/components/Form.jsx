import React,{useState} from 'react'
import "../styles/form.css"

const Form = () => {

    const[enterName, setEnterName]= useState('')
    const[enterEmail, setEnterEmail]= useState('')
    const[enterMessage, setEnterMessage]= useState('')

    const handleSubmitForm = (e)=>{
         e.prevent.Default()
         console.log('submitted');
         
    }

  return <form className='forms' onSubmit={handleSubmitForm}>
       <span><h2>Get a quote!!!</h2></span>
     <div className="form_input">
         <label htmlFor='Name' className='mb-2'>Name:</label> <br/>
         <input type="text" placeholder='Your name...'value={enterName} onChange={e=>setEnterName(e.target.value)}/>
     </div>
     <div className="form_input">
        <label htmlFor='Email' className='mb-2'>Email:</label> <br/>
         <input type="email" placeholder='Your email...'value={enterEmail} onChange={e=>setEnterEmail(e.target.value)}/>
     </div>
     <div className="form_input">
     <label htmlFor='Name'className='mb-2'>Say Something:</label> <br/>
         <textarea rows="10" className='w-75' placeholder="Type something,,,.."value={enterMessage} onChange={e=>setEnterMessage(e.target.value)} ></textarea>
     </div>
     <button className="form_btn"type="submit">
            Submit
     </button>
  </form>
}

export default Form