import { useState } from "react";
import Logo from "../assets/logo.png"
import validation from "../Validators/validation"
const SigninForm = () => {
  const [values,setValues]=useState({
    email:'',
    password:''
  })
 
  const [error, setError]= useState('')
  const handleInput = (e)=>{
      setValues(prev => ({...prev, [e.target.name]:e.target.value}))
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setError(validation(values))

  }

  return (
    <div className="selection:bg-blue-500 selection:text-white">
      <div className="flex justify-center items-center">
        <div className="p-8 flex-1">
          <div className="mx-auto overflow-hidden">
            <div className="p-8">
            <div className="flex justify-center items-center">
                <img src={Logo} className="w-16 h-16 "/>
              <div>
                <h1 className="text-3xl font-bold text-blue-700">
                SRM </h1>
              <span className="text-xl opacity-60 font-bold">Placement Portal</span>
              </div>
              </div>

              <form className="mt-12" action="" method="POST" onSubmit={handleSubmit}>
                <div className="relative">
                  <input
                    id="signin-email"
                    name="email"
                    type="email"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600"
                    placeholder="ab123@srmist.edu.in"
                    value={values.email}
                    onChange={handleInput}
                  />
                  
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    SRM Mail
                  </label>
                  { error.email && <span className='opacity-70 top-4 right-4 text-sm p-1
                   text-red-700 rounded-md font-thin'> {error.email}</span> } 
                </div>
                
                <div className="mt-10 relative">
                  <input
                    id="signin-password"
                    type="password"
                    name="password"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleInput}
                  />
                  
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                  { error.password && <span className='opacity-70 top-4 right-4 text-sm p-1
                   text-red-700 rounded-md font-thin'> {error.password}</span> } 
                </div>

                <input
                  type="submit"
                  value="Sign in"
                  className="mt-20 px-8 py-4 uppercase rounded-full bg-blue-700 hover:bg-blue-500 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-80 cursor-pointer"
                />
              </form>
             {/*  <a
                href="#"
                className="mt-4 block text-sm text-center font-medium text-indigo-600 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {" "}
                Forgot your password?{" "}
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;