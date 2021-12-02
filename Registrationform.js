import React from 'react';
//import { connect } from 'react-redux';
import { useFormik,Form,Field,Formik } from 'formik';
const Register =(props)=>{
        const[regform,setRegform]=React.useState([])
    return(
        <div className='better'>
             <h1 style={{ textAlign:'center',color:'tomato'}}>Register Form</h1>
        <div >
           
                    <Formik 
                         initialValues={{
                        firstname:'',gender:'',technologies:[],place:''
                         }}
                        onSubmit={(e)=>{
                            setRegform([...regform,e])
                        }}
                    > 
                        <Form className='box'>
                           <p> FullName:       <Field type="text" name="firstname"/> <br/> </p>
                           <p>Gender: &nbsp;&nbsp;&nbsp;&nbsp;
                                            <Field type="radio" name="gender" value="male"/>Male
                                   &nbsp;&nbsp;&nbsp;
                                            <Field type="radio" name="gender" value="female"/>female<br/></p>
                         <p> Technologies:<br/>
                                            <Field type="checkbox" name="technologies" value="Reactjs"/>ReactJs&nbsp;&nbsp;&nbsp;
                                            <Field type="checkbox" name="technologies" value="nodejs"/>NodeJs&nbsp;&nbsp;&nbsp;
                                            <Field type="checkbox" name="technologies" value="js"/>Js<br/></p>
                         <p> Select Place:   <Field name="place" as="select" className="my-place"> 
                                                    <option selected disabled value=""></option>
                                                    <option value="Hyd">Hyderbad</option>
                                                    <option value="Wgl">Warangal</option>
                                                    <option value="Kmm">Khammam</option>
                                            </Field>
                                            <br/>
                                            <br/></p>
                                            <p>
                                            <button type="submit" style={{justifyContent:'center'}}>Submit</button></p>
                        </Form>
                    </Formik>
                   </div>
                   <br/>
                   <br/>
                            <div>
                            <h1 style={{color:'red', textAlign:'center'}}><b>↓↓↓↓</b></h1>
                            <h1 style={{color:'red'}}>Register details</h1>
                                 {
                                       
                                        regform.map((s,i)=>{
                                            return(
                                           <ul>
                                                <h2>{s.firstname}</h2>
                                                <h3>{s.gender}</h3>
                                                <h4>{s.technologies.map((t,i)=>{
                                                    return(<li>{t}</li>)
                                                })}</h4>
                                                <h5>{s.place}</h5>
                                            </ul>
                                            )
                                         
                                          })
                                       
                                       
                               }
                            </div>
        </div>
    )
}
export default Register;