const initialState = {
   age: 21,
   history: []
};

const reducer = (state = initialState, action) => {
   const newState = {...state};

   if (action.type === 'AGE_UP') {
      return {
         ...state,
         age: state.age + action.value,
         history: state.history.concat({id: Math.random(), age: state.age + action.value})
      }
   }

   if (action.type === 'AGE_DOWN') {
      return {
         ...state,
         age: state.age - action.value,
         history: state.history.concat({id: Math.random(), age: state.age - action.value})
      }
   }

   if (action.type === 'DEL_ITEM') {
      return {
         ...state,
         history: state.history.filter(el => el.id !== action.key)
      }
   }

   if (action.type === 'CLEAR_HISTORY') {
      return {
         ...state,
         history: []
      }
   }

   return newState;
}

export default reducer;