import { useState, useRef } from "react";
import classes from "./Login.module.css";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [isLogin, setLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const history = useHistory();

  const switchAuthHandler = () => {
    setLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    setIsLoading(true);

    if (isLogin) {
      console.log(enteredEmail, enteredPassword);
      history.push("/store");
    } else {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBe59Ffpjr8AlNv8oSvdCXFsjXtfB8EPpQ",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        setIsLoading(false);

        console.log(res);
        if (res.ok) {
          history.push("/store");
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication fail";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            alert(errorMessage);
          });
        }
      });
    }
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
          {!isLoading && (
            <button type="submit">
              {isLogin ? "Login" : "Create Account"}
            </button>
          )}
          {isLoading && <p>Sending Request....</p>}
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
