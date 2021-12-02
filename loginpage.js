import React from 'react';
import {connect} from 'react-redux';
import {useFormik} from 'formik';
const Main=(props)=>{
    const LoginForm = useFormik({
        initialValues:{
        username:'',
        password:''
        },
        onSubmit:(e)=>{
            alert("login sucessfully")
        }
    })
    return(
        <div style={{border:'2px solid'}}>
            <h1 style={{color:'lightgreen'}}>Redux with login page</h1>
            <form name="form" onSubmit={LoginForm.handleSubmit}>
            <b>UserName:<br/><input type="text" id="un" name="username" onChange={LoginForm.handleChange}/><br/></b><br/>
            <b>Password:<br/>< input type="password" id="ps"  name="password" onChange={LoginForm.handleChange}/><br/></b><br/>
            <button>Login</button>
            </form>
            
        </div>
    )
}
export default connect(store=>{return store})(Main);