export function playlistReducer(state, action){
    switch(action.type){
        case "SET_PLAYLIST":
            return state = action.payload;
        case "SET_SINGLE_PLAYLIST":
            return state.map(item=>item._id===action.payload._id?action.payload:item);  
        default:
            return state;    
    }
}