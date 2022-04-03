export function videoReducer(state, action){
    switch(action.type){
        case "SET_VIDEOS":
            return {...state, videos: action.payload};
        case "SET_CATEGORIES":
            return {...state, categories: action.payload};
        case "FILTER_BY_CATEGORIES":
            return {...state, categoryFilter: action.payload};
        case "SET_LIKED_VIDEOS":
            return {...state, likedVideos: action.payload};
        case "SET_WATCH_LATER_VIDEOS":
            return {...state, watchLaterVideos: action.payload};
        case "SET_HISTORY":
            return {...state, history: action.payload};
        case "SET_PLAYLIST":
            return {...state, playlists: action.payload};
        case "SET_SINGLE_PLAYLIST":
            return {...state, playlists: [...state.playlists].map(item=>item._id===action.payload._id?action.payload:item)};    
    }
}