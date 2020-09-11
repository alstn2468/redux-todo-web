export const SET_IS_FETCHING = "SET_IS_FETCHING";

export function setIsFetching(isFetching) {
    return {
        type: SET_IS_FETCHING,
        isFetching,
    };
}
