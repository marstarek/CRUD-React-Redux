import React from "react";
import Button from "../Buttons/Button";
import icon from "../../assets/Marsicon.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "./userSlice";
import { v4 as uuidv4 } from 'uuid';

const AddUser = () => {
  const dispatch = useDispatch();
     let navigate = useNavigate();

     const [inputVal, setInputVal] = useState({
          name: '',
          email:''
     });

     const addUserHandler = (e) => {
          e.preventDefault();
          setInputVal({ name: '', email: '' });
          dispatch(addUser({id:uuidv4(),name:inputVal.name,email:inputVal.email}))
          navigate('/')
     }
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img className="mx-auto h-32 w-auto" src={icon} alt="Your Company" />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
            Add New User
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <input
                id="name"
                name="name"
                required
                type="name"
                placeholder="Enter Your Name "
                                     className="input input-bordered input-info  relative my-4 block w-full"
                                     value={inputVal.name}
                                     onChange={(e)=>setInputVal({...inputVal,name:e.target.value})}
              />
            </div>
            <div>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter Your Email"
                                     className="input input-bordered input-info  relative my-4 block w-full"
                                     value={inputVal.email}
                                     onChange={(e)=>setInputVal({...inputVal,email:e.target.value})}
              />
            </div>
          </div>

          <div className="flex justify-center">
            <Button
            onClick={addUserHandler}
            className="group relative flex w-full  justify-center py-2 px-4 text-sm font-medium text-white"
            >
              Add New User
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
