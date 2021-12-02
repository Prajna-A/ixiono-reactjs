import React from 'react';
import {useFormik} from 'formik';
const Land=()=>{
    const LoginForm = useFormik({
        initialValues:{
        username:'',
        password:''
        },
        onSubmit:(e)=>{
            alert("Now have fun")
        }
    })
    return(
        <div>
                <div className='better'>
                    <h1 style={{textAlign:'center',color:'pearlblue', fontSize:'50px'}}>MY Trips</h1>
                
                
                <div className='view'>
                    <h1 style={{textAlign:'center',color:'green', fontSize:'100px'}}>Make Your Trip Easy</h1>
                    <h1 style={{color:'white', backgroundColor:'blue',textAlign:'center'}}>Apply Now</h1>
                <div className='box' style={{textAlign:'center'}}>
                    <h3>You want more fun and joy... just login</h3>
                    <form name="form" onSubmit={LoginForm.handleSubmit}>
                        <b>UserName:<br/>
                                <input type="text" id="un" name="username" onChange={LoginForm.handleChange}/><br/></b><br/>
                        <b>Password:<br/>
                                < input type="password" id="ps"  name="password" onChange={LoginForm.handleChange}/><br/></b><br/>
                        <button>Login</button>
                    </form>
            
                </div>
                </div>
                </div>
        </div>
    )
}
export default Land;