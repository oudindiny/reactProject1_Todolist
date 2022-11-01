import './App.css';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './component/TodoTemplate';
import TodoHead from './component/TodoHead';
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

    </TodoTemplate>
    
    </>
  );
}

export default App;
