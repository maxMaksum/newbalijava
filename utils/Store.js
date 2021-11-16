import { createContext, useReducer } from "react";
import Cookies from "js-cookie";
export const Store = createContext();

const initialState = {
  menuItem: true,
  headerData: {
    headerdata: Cookies.get("Items")
      ? JSON.parse(Cookies.get("headerItems"))
      : [],
  },
};

const reducer = (state, action) => {
  // console.log(initialState.menuItem);

  switch (action.type) {
    case "CHANGE_MENU":
      return {
        ...state,
        menuItem: !state.menuItem,
      };
    case "CLOSE_MENU":
      return {
        ...state,
        menuItem: !state.menuItem,
      };
    case "SET_HEADERS":
      return {
        ...state,
        headerData: Cookies.set("headerItems", JSON.stringify(action.payload)),
      };

    default:
      return state;
  }
};

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
