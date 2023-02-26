import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: 'admin@gmail.com',
    senha: '12345'
}

const AuthReducer = createSlice({
    name: 'Auth',
    initialState: initialState,
    reducers: {
        editEmail: (state, action) => {
          
            state.email = action.payload
           
        },
        editSenha: (state, action)=>{
            state.senha = action.payload
        }
    }
})

export const { editEmail, editSenha } = AuthReducer.actions
export default AuthReducer.reducer