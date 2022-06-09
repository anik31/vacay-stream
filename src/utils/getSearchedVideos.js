export const getSearchedVideos = (videos, search) => {
    return search === ""
    ? videos
    : videos.filter(video => {
        return video.title.toLowerCase().includes(search.toLowerCase())
    });
};
