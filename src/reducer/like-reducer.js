export function likeReducer(state, action){
    switch(action.type){
        case "SET_LIKED_VIDEOS":
            return state = action.payload;    
        default:
            return state;    
    }
}