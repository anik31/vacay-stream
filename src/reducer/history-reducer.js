export function historyReducer(state, action){
    switch(action.type){
        case "SET_HISTORY":
            return state = action.payload;    
        default:
            return state;    
    }
}