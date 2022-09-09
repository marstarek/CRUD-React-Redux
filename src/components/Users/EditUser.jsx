import React from "react";
import Button from "../Buttons/Button";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { editUser } from "./userSlice";

const EditUser = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  const params = useParams();
  const users = useSelector((store) => store.users);
  const existUser = users.filter((user) => user.id === params.id);
  const { name, email } = existUser[0];
  let navigate = useNavigate();
  const [inputVal, setInputVal] = useState({
    name,
    email,
  });
  const editUserHandler = (e) => {
    e.preventDefault();
    if (inputVal.name && inputVal.email) {
      setInputVal({ name: "", email: "" });
      dispatch(
        editUser({ id: params.id, name: inputVal.name, email: inputVal.email }),
      );

      navigate("/");
    }else {
      setError(true)
      return false
    }
  };
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
            Edit User
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <input
                id="name"
                name="name"
                type="name"
                required
                placeholder="Enter Your Name "
                className={"input input-bordered input-info  relative my-4 block w-full   "+ (error==true ? 'border-red-900	' : '')}                value={inputVal.name}
                onChange={(e) =>
                  setInputVal({ ...inputVal, name: e.target.value })
                }
              />
            </div>
            <div>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter Your Email"
                className={"input input-bordered input-info  relative my-4 block w-full   "+ (error==true ? 'border-red-900	' : '')}
                value={inputVal.email}
                onChange={(e) =>
                  setInputVal({ ...inputVal, email: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              onClick={editUserHandler}
              className="group relative flex w-full  justify-center py-2 px-4 text-sm font-medium text-white"
            >
              Edit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditUser;
