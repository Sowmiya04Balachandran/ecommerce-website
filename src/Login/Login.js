import {useState,useRef} from 'react';
import classes from './Login.module.css';
import { useHistory } from 'react-router-dom';



const Login=()=>{
    const [isLogin,setLogin]=useState(true);

    const emailInputRef=useRef();
    const passwordInputRef=useRef();

    const history=useHistory();

    const  submitHandler=(event)=>{
        event.preventDefault();

        const enteredEmail=emailInputRef.current.value;
        const enteredPassword=passwordInputRef.current.value;
setLogin(true);

if(isLogin){
    console.log(enteredEmail,enteredPassword)
    history.push('/store');
}else{
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBe59Ffpjr8AlNv8oSvdCXFsjXtfB8EPpQ',{
        method:'POST',
        body:JSON.stringify({
            email:enteredEmail,
            password:enteredPassword,
            returnSecureToken:true,
        }),
        headers:{
            'Content-Type':'application/json'
        }
    }).then((res)=>{
        console.log(res);
        if(res.ok){

        history.push('/store');
        }else{
            return res.json().then((data)=>{
                let errorMessage='Authentication fail';
                if(data&&data.error && data.error.message){
                    errorMessage=data.error.message;
                }
                alert(errorMessage);
            })
        }
    })
}


    }

    




    return(
        <section  className={classes.auth}>
            <h1>Login</h1>
        <form onSubmit={submitHandler}>
            <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type='email' id='email'  ref={emailInputRef} required/>
            </div>
            <div className={classes.control}>
                <label htmlFor="password">Enter Password</label>
                <input type='password' id='password' ref={passwordInputRef} required/>
                </div>
                <div className={classes.action}>
                    <button type="submit">Login</button>
                </div>
        </form>
        </section>
    )
}
export default Login