import {
    CREATE_TODO_ITEM,
    CHANGE_TODO_ITEM_COMPLETED,
    DELETE_TODO_ITEM,
    UPDATE_TODO_ITEM
} from "redux/action";

const initialState = {
    todos: []
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_TODO_ITEM:
            return {
                ...state,
                todos: [...state.todos, action.item]
            };
        case DELETE_TODO_ITEM:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.item.id)
            };
        case CHANGE_TODO_ITEM_COMPLETED:
            const { id, text, isCompleted } = action.item;

            return {
                todos: state.todos.map(todo => {
                    if (todo.item.id === id) {
                        return {
                            item: {
                                id: id,
                                text: text,
                                isCompleted: !isCompleted
                            }
                        };
                    }
                    return todo;
                })
            };
        case UPDATE_TODO_ITEM:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.item.id) {
                        return action.item;
                    }
                    return todo;
                })
            };
        default:
            return state;
    }
}

export default reducer;
