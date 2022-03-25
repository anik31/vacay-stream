export function getFilteredVideos(data, categoryName){
    return categoryName==="All"
    ? data
    : data.filter(item=>item.categoryName===categoryName);
}