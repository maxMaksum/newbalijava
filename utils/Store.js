
import { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
  menuItem:true,
};

const reducer =(state, action)=>{
  // console.log(initialState.menuItem);

  switch(action.type){
    case "CHANGE_MENU":
      return{
        menuItem:!state.menuItem
      }
      case "CLOSE_MENU":
        return{
          menuItem:true
        }

  }
}


export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}