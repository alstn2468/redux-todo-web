export const CREATE_TODO_ITEM = "CREATE_TODO_ITEM";
export const DELETE_TODO_ITEM = "DELETE_TODO_ITEM";
export const UPDATE_TODO_ITEM = "UPDATE_TODO_ITEM";
export const CHANGE_TODO_ITEM_COMPLETED = "CHANGE_TODO_ITEM_COMPLETED";

function createTodoItem(item) {
    return {
        type: CREATE_TODO_ITEM,
        item
    };
}

function deleteTodoItem(item) {
    return {
        type: DELETE_TODO_ITEM,
        item
    };
}

function updateTodoItem(item) {
    return {
        type: UPDATE_TODO_ITEM,
        item
    };
}

function changeTodoItemCompleted(item) {
    return {
        type: CHANGE_TODO_ITEM_COMPLETED,
        item
    };
}

const actionCreators = {
    createTodoItem,
    deleteTodoItem,
    updateTodoItem,
    changeTodoItemCompleted
};

export default actionCreators;
