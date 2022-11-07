import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
    
`;


function todolist() {
    return (
        <TodoListBlock>
            <TodoItem text= "밥먹기" done={true}></TodoItem>
            <TodoItem text= "편의점 가기" done={true}></TodoItem>
            <TodoItem text= "sdknjc" done={true}></TodoItem>
            <TodoItem text= "cskjnv;" done={true}></TodoItem>
        </TodoListBlock>
    
        );
}

export default todolist;