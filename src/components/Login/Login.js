import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import app from "../../firebase.init";


const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {

     createUserWithEmailAndPassword(auth, email, password)
     .then(result=>{
          const user = result.user;
          console.log(user)
     })
     .catch(error=>{

          console.error(error)
     })

    console.log("event.target.value",email, password);
    event.preventDefault();
  };

  const handleEmailBlur = (event) => {
    // console.log(event.target.value)
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    // console.log(event.target.value)
    setPassword(event.target.value);
  };
  return (
    <div>
      <div class="container  px-6 mx-auto">
        <section class="mb-32 text-gray-800 text-center">
          <div class="px-6 py-12 md:px-12">
            <div class="  mx-auto xl:px-32 ">
              <div class="grid lg:grid-cols-1   items-center gap-12 ">
                <div class="md:mt-12 lg:mt-0 mb-12 lg:mb-0  first-letter:">
                  <div class="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14 bg-red-300">
                    <h2 class="text-3xl font-bold mb-1 text-[#182b4a]">
                      Login
                    </h2>

                    <form onSubmit={handleLogin} className="  ">
                      <div className="py-8">
                        <div class="form-group mb-3     ">
                          <input
                            type="email"
                            class="items-center mx-auto form-control block w-3/6  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleInput8"
                            placeholder="Email address"
                            onBlur={handleEmailBlur}
                          />
                        </div>
                        <div class="form-group mb-3">
                          <input
                            type="password"
                            class=" items-center mx-auto  form-control block w-3/6 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleInput8"
                            placeholder="Password"
                            onBlur={handlePasswordBlur}
                          />
                        </div>
                      </div>

                      <input
                        type="submit"
                        value="Login"
                        class="w-2/6 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      ></input>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
