import {
    TOGGLE_PLUS_MINUS,
    SAVE_EXPRESSION,
    CALCULATE_RESULT,
    CLEAR_RESULT
  } from "./constants";

  const initialState = {
    expression: "0",
    result: 0,
    defaultVal: "0"
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case CLEAR_RESULT:
        return initialState;
      case CALCULATE_RESULT: {
        let result;
        try {
          const temp = eval(state.expression);
          result = temp === parseInt(temp) ? temp : temp.toFixed(2);
        } catch (e) {
        } finally {
          if (!result || typeof +result !== "number") result = 0;
          return {
            ...state,
            result
          };
        }
      }
      case SAVE_EXPRESSION:
        const operator = ["+", "-", "*", "/", "%"];
        if (state.expression === "0" && operator.indexOf(action.payload) != -1)
          return state;
        return {
          ...state,
          expression:
            state.expression === "0"   
              ? action.payload  
              : state.expression + action.payload,
          defaultVal: 
            state.defaultVal === "0"
              ? ( action.payload === "+" || action.payload === "-" || action.payload === "*" || action.payload === "/" || action.payload === "%"  ? state.defaultVal : action.payload )
              : (action.payload === "+" || action.payload === "-" || action.payload === "*" || action.payload === "/" || action.payload === "%" ) ? 
              state.defaultVal : action.payload
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;