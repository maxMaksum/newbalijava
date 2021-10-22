import { createSlice } from '@reduxjs/toolkit'



const initialState= {
  items:[],
  menu:false
}

export const changeMenu =({
  name:'menu',
  initialState,

  reducers:{
    changeMenu: (state, action) => {
      state.menu=[...state.menu, action.payload]
    
    },
  }
})

export const basketSlice = createSlice({
  name: 'basket',
  initialState,

  reducers: {
    addBasket: (state, action) => {
      state.items =[...state.items, action.payload]
    
    },
    removeBasket: (state, action) => {
      const Index = state.items.findIndex(basketItem=>basketItem.id===action.payload.id)
      
      let newBasket = [...state.items]

      if(Index>=0){
        newBasket.splice(Index, 1)

      }else{
        console.warn(
          `Cant Remove the product (id:${action.payload.id}) in the basket`
        )
      }

      state.items=newBasket
    },
 
  },
})

// Action creators are generated for each case reducer function
export const { addBasket, removeBasket } = basketSlice.actions

export const selectItems =(state)=>state.basket.items;
export const selectTotal =(state)=>state.basket.items.reduce((total, item) => total + item.price, 0)
export default basketSlice.reducer