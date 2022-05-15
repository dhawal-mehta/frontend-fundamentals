const counterReducer = {
    increment(state, action){
        state.counter++
    },
    decrement(state, action){
        state.counter--
    },
    addBy(state, action){
        state.counter += action.payload
    }
}
export default counterReducer