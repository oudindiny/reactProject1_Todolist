import React, { useReducer, createContext, useContext, useRef } from 'react';


const initialTodos = [
    {
        id: 1,
        text: '',
        done: true
    },
    {
        id: 2,
        text: '',
        done: true
    },
    {
        id: 3,
        text: '',
        done: false
    },
    {
        id: 4,
        text: '',
        done: false
    }
];

function todoReducer(state, action) {
    switch(action.type) {
        case 'CREATE':
            return state.concat(action.todo);

        case 'TOGGLE':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, done: !todo.done } : todo
                );
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);

    return (
        <TodoStateContext.Provider value={state}>
           <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider> 
        </TodoStateContext.Provider>
    );
}

export function useTodoState() {
    const context = useContext(TodoStateContext);
    if(!context){
        throw new Error('Cannot find TodoProvider');
    }
    return context;
    
}

export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext);
    if(!context){
        throw new Error ('Cannot find TodoProvider');
    }
    return context;
}

export function useTodoNextId() {
    const context = useContext(TodoNextIdContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

// 내가 만든 Hook을 사용하려면 해당컴포넌트가 TodoProvider컴포넌트 내부에 렌더링되어 있어야한다. 
//ex. App컴포넌트의 모든 내용을 TodoProvider로 감싸기 