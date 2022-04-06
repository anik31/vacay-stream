export function videoReducer(state, action){
    switch(action.type){
        case "SET_VIDEOS":
            return {...state, videos: action.payload};
        case "SET_CATEGORIES":
            return {...state, categories: action.payload};
        case "FILTER_BY_CATEGORIES":
            return {...state, categoryFilter: action.payload};    
        default:
            return state;
    }
}