export const SET_DISPLAY_FILTER = "SET_DISPLAY_FILTER";
export const todoDisplayFilter = {
    DISPLAY_ALL_TODO: "DISPLAY_ALL_TODO",
    DISPLAY_COMPLETD_TODO: "DISPLAY_COMPLETED_TODO",
    DISPLAY_UNCOMPLETD_TODO: "DISPLAY_UNCOMPLETED_TODO",
};

export function setDisplayFilter(filter) {
    return {
        type: SET_DISPLAY_FILTER,
        filter,
    };
}
