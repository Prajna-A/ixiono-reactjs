const initialState={
    count:0
}
const Reducer=(state=initialState,action)=>{
    if (action.type === 'ADD') {
        return { count: action.value }
      }
        return state;
}
export default Reducer;