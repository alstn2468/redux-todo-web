import {
    CREATE_TODO_ITEM,
    CHANGE_TODO_ITEM_COMPLETED,
    DELETE_TODO_ITEM,
    UPDATE_TODO_ITEM
} from "redux/action";

const initialState = {
    todos: [
        { id: "Test-Data-Id-1", text: "Test-Data-Text-1", isCompleted: false },
        { id: "Test-Data-Id-2", text: "Test-Data-Text-2", isCompleted: true }
    ],
    completed: 0,
    uncompleted: 0
};

function reducer(state = initialState, action) {
    let newTodos;

    switch (action.type) {
        case CREATE_TODO_ITEM:
            return {
                ...state,
                todos: [...state.todos, action.item],
                uncompleted: state.uncompleted + 1
            };

        case DELETE_TODO_ITEM:
            newTodos = state.todos.filter(todo => todo.id !== action.item.id);

            if (action.item.isCompleted) {
                return {
                    ...state,
                    todos: newTodos,
                    completed: state.completed - 1
                };
            }

            return {
                ...state,
                todos: newTodos,
                uncompleted: state.uncompleted - 1
            };

        case CHANGE_TODO_ITEM_COMPLETED:
            newTodos = state.todos.map(todo => {
                if (todo.id === action.item.id) {
                    return {
                        ...todo,
                        isCompleted: !todo.isCompleted
                    };
                }
                return todo;
            });

            if (action.item.isCompleted) {
                return {
                    todos: newTodos,
                    completed: state.completed - 1,
                    uncompleted: state.uncompleted + 1
                };
            }

            return {
                todos: newTodos,
                completed: state.completed + 1,
                uncompleted: state.uncompleted - 1
            };

        case UPDATE_TODO_ITEM:
            newTodos = state.todos.map(todo => {
                if (todo.id === action.item.id) {
                    if (todo.isCompleted) {
                        return {
                            ...todo.item,
                            isCompleted: !todo.isCompleted,
                            text: action.item.text
                        };
                    }

                    return {
                        ...todo,
                        text: action.item.text
                    };
                }
                return todo;
            });

            if (action.item.isCompleted) {
                return {
                    todos: newTodos,
                    completed: state.completed - 1,
                    uncompleted: state.uncompleted + 1
                };
            }

            return {
                ...state,
                todos: newTodos
            };

        default:
            return state;
    }
}

export default reducer;
