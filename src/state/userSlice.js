import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
    name: 'user',
    initialState: {name: '유비', age: 20},
    reducers: {
        changeName(state){
            state.name = '관우'
        },

        changeName2(state){
            return {name: '장비', age: 102}
        },

        increase(state, action){
            state.age += action.payload
        }        
    }    
})

export const { changeName, changeName2, increase } = user.actions

export default user.reducer