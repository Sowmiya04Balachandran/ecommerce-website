import { useState, useRef,useContext } from "react";
import classes from "./Login.module.css";
import AuthContext from "../AuthContext/AuthContext";
import { useHistory } from "react-router-dom";


const Login = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx=useContext(AuthContext);

  const  history=useHistory();

  const [isLoading,setisLoading]=useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    let url;

    setisLoading(true);

    if(isLogin){
  url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAewrRSvuTkoFmEg6jPyX27gOkmIIAGL38'     
    }else{
      url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAewrRSvuTkoFmEg6jPyX27gOkmIIAGL38'
    }
    fetch(url,{
      method:'POST',
      body:JSON.stringify({
        email:enteredEmail,
        password:enteredPassword,
        returnSecureToken:true,
      }),
      headers:{
        'Content-Type':'application/json',
      }

    }
    ).then((res)=>{
      setisLoading(false);
      if(res.ok){
       return res.json();
      }else{
        return res.json().then(data=>
        {
         let errorMessage='Authentication Error';
         if(data && data.error && data.error.message){
          errorMessage=data.error.message;
         }
         throw new Error(errorMessage);
        })
      }
    }).then((data)=>{
      console.log(data);

      authCtx.login(data.idToken);
      history.push('/store')
    }).catch((error)=>{
      alert(error.message);
    });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" ref={emailInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Enter Password</label>
          <input
            type="password"
            id="password"
            ref={passwordInputRef}
            required
          />
        </div>
        <div className={classes.action}>
          {!isLoading && <button type="submit">{isLogin ? "Login" : "Create Account"}</button>}
          {isLoading && <p>Sending Your Request...</p>}

         
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthHandler}
          >
            {isLogin ? "Login with existing account" : "switch to login"}
          </button>
        </div>
      </form>
    </section>
  );
};
export default Login;
