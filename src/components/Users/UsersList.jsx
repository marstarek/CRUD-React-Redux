import React from "react";
import Button from "../Buttons/Button";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteUser } from "./userSlice";

const UsersList = () => {

  const dispatch = useDispatch();
  let num = 1;

  const users = useSelector(store => store.users);
  const deleteUserHandler = (id) => {
    dispatch(deleteUser({id}))
  }
  const renderCard = () =>
    users.map((user) => (
    

        <tr className="active " key={user.id} >
        <th>{ num++}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td><div className="">
          {/* edit user btn */}
          <NavLink to={`/edit-user/${user.id}`}>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>


          </NavLink>
          {/* delete user btn */}
          <button onClick={()=>deleteUserHandler(user.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
            </button>
        </div></td>
      </tr>













      
    ));
  return (
    <div>
      <header className="py-3">
        <h1 className="mb-2 text-center text-5xl font-bold">CRUD</h1>
      </header>
      <NavLink to="/add-user">
        <Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
            />
          </svg>
        </Button>
      </NavLink>

      <div className="grid gap-5 md:grid-cols-1 	">
      <div className="overflow-x-auto">
  <table className="table w-full table-auto text-center  ">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>options</th>
      </tr>
    </thead>
    <tbody className="">
    {users.length ? (
          renderCard()
        ) : (
          <p className=" text-red-700 col-span-2 text-center font-semibold text-1xl py-5  ">NO USERS</p>
        )}
  
    </tbody>
  </table>
</div>









        
      </div>
    </div>
  );
};

export default UsersList;
