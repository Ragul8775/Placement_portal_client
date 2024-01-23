import { useState } from "react";
import validation from "../Validators/signupValidation";
import axios from 'axios'
const SignupForm = ({ toggleAnimation }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError]= useState('')

  const [values,setValues]=useState({
    name:'',
    email:'',
    password:''
  })
  console.log([values])
 console.log(values.name)
  const handleInput = (e)=>{
      setValues(prev => ({...prev, [e.target.name]:e.target.value}))
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setError(validation(values))
    
      axios.post('http://localhost:8000/register',values)
      .then(res=>{
        if(res.data.Status === "Success"){
          alert("User Created SuccessFully")
          toggleAnimation(false);
        }
      })
      .then(err=>{
        if(err){
        alert("Unable to Create User")
        }
      })
      
    }
    
  

  return (
    <div className="selection:bg-indigo-500 selection:text-white">
      <div className="flex justify-center items-center">
        <div className="p-8 flex-1">
          <div className="mx-auto overflow-hidden">
            <div className="p-8">
              <h1 className="text-3xl font-bold text-blue-500">
                Create account
              </h1>

              <form className="mt-12" action="" method="POST" onSubmit={handleSubmit}>
                <div className="relative">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500"
                    placeholder="Name"
                    value={values.name}
                    onChange={handleInput}
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Name
                  </label>
                  { error.name && <span className='opacity-70 top-4 right-4 text-sm p-1
                   text-red-700 rounded-md font-thin'> {error.name}</span> } 
                </div>
                <div className="mt-10 relative">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500"
                    placeholder="john@doe.com"
                    value={values.email}
                    onChange={handleInput}
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email address
                  </label>
                  { error.email && <span className='opacity-70 top-4 right-4 text-sm p-1
                   text-red-700 rounded-md font-thin'> {error.email}</span> } 
                </div>
                <div className="mt-10 relative">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500"
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
                  value="Sign up"
                  className="mt-20 px-8 py-4 uppercase rounded-full bg-blue-600 hover:bg-blue-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-80 cursor-pointer"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;