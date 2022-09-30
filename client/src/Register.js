import React, { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

export const Register = () => {
    //const navigate=useNavigate()
  const [user, setUser] = useState({
    name:"",email:"",password:"",cpassword:"",phone:""
  })
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  
  const handleInputs = e => {
    const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
     
  }
 
 
  const postData = async (e) => {
    e.preventDefault();
    const { name, email,phone, password, cpassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-type":"application/json"
      },
      body: JSON.stringify({
        name,
        email,
       
        phone,
        password,
        cpassword 
      })
      
    })
    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Invalid Registretion")
      console.log("Invalid Registretion")
    }else if(res.status===422){
       window.alert("Please Fill All Fields")
    }else if(res.status===423){
       window.alert("Email is Already Registered")
    } else if(res.status===424){
       window.alert("Password Is Not Match")
    }  else {
       window.alert("Successfully Registretion")
       console.log ("Successfully Registretion")
      //navigate("/")//its just use for navbar and router,brouser router
    }
  }
  //validate
   
 
  
  return (
 
      <div>
        
          <form method="POST">
        <h2>Register Now</h2>
      
        
        Name:<input type="text" name="name" value={user.name} onChange={handleInputs} autoComplete="off" /><br /><br />
      
        Email:<input type="email" name="email"  value={user.email} onChange={handleInputs}  autoComplete="off"/><br/><br/>
 
        Phone:<input type="number" name="phone"  value={user.phone} onChange={handleInputs} autoComplete="off"/><br/><br/>

       

        Password:<input type="password" name="password"  value={user.password} onChange={handleInputs} autoComplete="off"/><br/><br/>
  
        Cpassword:<input type="password" name="cpassword"  value={user.cpassword} onChange={handleInputs} autoComplete="off"/><br /><br />
     
        <input type="submit" name="signup" value="register"
          onClick={postData} />
     </form>
    </div>
  )
}
