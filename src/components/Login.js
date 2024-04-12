import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login=()=>{
     const [isSignForm,SetisSignInForm]=useState(true);
     const [errorMessage,seterrorMessage]=useState(null);

     const email=useRef(null);
     const password=useRef(null);

    const toggleSignInForm=()=>{
          SetisSignInForm(!isSignForm);
    }
    
    const handleButtonClick=()=>{
        const messsage=checkValidData(email.current.value,password.current.value);
        seterrorMessage(messsage);
        // console.log(email.current.val);
        // console.log(password.current.val);
    }

    return (
        <div>
            <Header/>
            <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="Loading" />
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className=" absolute p-12 bg-black w-1/3 py-26 mx-auto my-10 right-0 left-0 text-white rounded-lg bg-opacity-75">
             
             <h1 className=" font-bold text-2xl mx-3">
              {isSignForm? "Sign In":"Sign Up"}
             </h1>

             {!isSignForm && <input type="text" placeholder="Full Name" className="p-2 m-2 w-full bg-gray-600"></input>}
            
            <input 
            ref={email}
            type="text" placeholder="Email Address" className="p-2 m-2 w-full bg-gray-600">
            </input>

            <input 
            ref={password}
            type="text" placeholder="Password" className="p-2 m-2 w-full bg-gray-600">
            </input>

              <p className="text-red-500 font-bold">
                {errorMessage}
              </p>

            <button className="p-2 m-2 bg-red-600 h-10 w-full" onClick={handleButtonClick}>
            {isSignForm ? "Sign In":"Sign Up"}
            </button>

            <p 
            className="text-sm cursor-pointer " onClick={toggleSignInForm}>{isSignForm ? "Already User! Please Sign In":"New To Netflix! Sign Up Now"}
            </p>
            
            </form>
             
        </div>
    )

}
export default Login;
