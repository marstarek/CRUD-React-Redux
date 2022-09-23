import { createSlice } from "@reduxjs/toolkit";

const initialState =  [

  ];

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload)
    },
    editUser: (state, action) => {
      const { id, name, email } = action.payload;
      const existUser = state.find(user => user.id === id);
      if(existUser) {
        existUser.name = name;
        existUser.email = email;
      }
    }, deleteUser: (state, action) => {
      const { id } = action.payload;
      const existUser = state.find(user => user.id === id);
      if(existUser) {
        return state.filter(user => user.id !== id);
      }
    }
  }
});

export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;