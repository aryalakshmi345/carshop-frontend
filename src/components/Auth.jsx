import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { registerAPI } from '../../services/allAPI'

function Auth({regsiter}) {
    const isRegister = regsiter?true:false

    const [userDetails, setUserDetails] = useState({
        names:"",email:"",phno:"",username:"",password:""
})
    const [isNameValid,setIsNameValid] = useState(true)
    const [isPasswordValid,setIsPasswordValid] = useState(true)
    const [isEmailValid,setIsEmailValid] = useState(true)
    const [isPhnoValid,setIsPhnoValid] = useState(true)
    const [isusernameValid,setIsusernameValid] = useState(true)

   const validateInput = (e)=>{
    const {name,value} = e.target 
    if(name==='phno'){
        if(!!value.match(/^[0-9]*.?[0-9]+$/)){
            setUserDetails({...userDetails,phno:value})
            setIsPhnoValid(true)
        }else{
            setIsPhnoValid(false)
            setUserDetails({...userDetails,phno:value})
    }
   }else if(name==='name'){
    if(!!value.match(/^[a-z ,.'-]+$/i)){
        setUserDetails({...userDetails,names:value})
        setIsNameValid(true)
    }else{
        setIsNameValid(false)
        setUserDetails({...userDetails,names:value})
}
   }else if(name==='email'){
    if(!!value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
        setUserDetails({...userDetails,email:value})
        setIsEmailValid(true)
    }else{
        setIsEmailValid(false)
        setUserDetails({...userDetails,email:value})
}
   }else if(name==='username'){
    if(!!value.match(/^[a-z ,.'-]+$/i)){
        setUserDetails({...userDetails,username:value})
        setIsusernameValid(true)
    }else{
        setIsusernameValid(false)
        setUserDetails({...userDetails,username:value})
}
}else{
    if(!!value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/)){
        setUserDetails({...userDetails,password:value})
        setIsPasswordValid(true)
    }else{
        setIsPasswordValid(false)
        setUserDetails({...userDetails,password:value})
}
  
}
   }
   
   const handleRegister = async(e)=>{
     if(!username || !names || !phno || !email || !password){
        alert('please fill the form completly')
     }else{
        // api call
        const result= await registerAPI(userDetails)
        if(result.status===200){
            alert('regsitered successfully')
        }else{
            console.log(result.data);
        }
     }
   }

  return (
    <>
       <div className='d-flex align-items-center justify-content-center' style={{height:'100vh'}}>
         
         <div className='w-25'>
            {
                isRegister?
                <h3 className='mb-3'>Register</h3>
                :
                <h3 className='mb-3'>Login</h3>
            }
            {
                isRegister?
                <>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Enter Name" value={userDetails.names || ""} name='name' onChange={(e)=>validateInput(e)}/>
                    {
                        !isNameValid &&
                        <div className='text-danger'>
                        *Please enter a valid name 
                       </div>
                    }
                    </Form.Group>
                     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                     <Form.Control type="email" placeholder="Enter Email" value={userDetails.email || ""} name='email' onChange={(e)=>validateInput(e)} />
                     {
                        !isEmailValid &&
                        <div className='text-danger'>
                        *Please enter a valid email 
                       </div>
                     }
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Enter Phone Number" value={userDetails.phno || ""} name='phno' onChange={(e)=>validateInput(e)}/>
                    {
                       !isPhnoValid &&
                       <div className='text-danger'>
                        *Please enter a valid phone number 
                       </div>
                    }
                    </Form.Group>
                </>:null
            }
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
             <Form.Control type="text" placeholder="Enter Username" value={userDetails.username || ""} name='username' onChange={(e)=>validateInput(e)}/>
             {
                !isusernameValid &&
                <div className='text-danger'>
                        *Please enter a valid username 
                       </div>
             }
             </Form.Group>
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
             <Form.Control type="password" placeholder="Enter Password" value={userDetails.password || ""} name='password' onChange={(e)=>validateInput(e)}/>
             {
                !isPasswordValid &&
                <div className='text-danger'>
                        *Password must contain atleast 6 characters ,a digit and a special character
                       </div>
             }

             </Form.Group>
             {
                isRegister?
               <>
                    <button className='btn btn-dark w-100 mb-3' onClick={handleRegister}>Register</button>
                    <p>Already Have an Account? Please <Link to={'/login'}>Login..</Link></p>
               </>
                :
                <>
                    <button className='btn btn-dark w-100 mb-3'>Login</button>
                    <p>Don't Have an Account? Please <Link to={'/register'}>Register..</Link></p>
                </>


             }
           
         </div>
         
        </div> 
    </>
  )
}

export default Auth