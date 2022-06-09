export function videoReducer(state, action){
    switch(action.type){
        case "SET_VIDEOS":
            return {...state, videos: action.payload};
        case "SET_CATEGORIES":
            return {...state, categories: action.payload};
        case "FILTER_BY_CATEGORIES":
            return {...state, categoryFilter: action.payload};
        case "SET_SEARCH":
            return {...state, searchTerm: action.payload};    
        default:
            return state;
    }
}