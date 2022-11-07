import './App.css';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './component/TodoTemplate';
import TodoHead from './component/TodoHead';
import TodoList from './component/TodoList';
import TodoCreate from './component/TodoCreate';
const GlokbalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`
function App() {
  return (
    <>
    <GlokbalStyle />
    <TodoTemplate>
    <TodoHead />
    <TodoList />
    <TodoCreate />
    </TodoTemplate>
    
    </>
  );
}

export default App;
