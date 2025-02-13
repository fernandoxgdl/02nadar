import './App.css';
import logo from './logo04.svg';
import Todo1 from './componentes/Todo1';
import Todo2 from './componentes/Todo2';



function App() {
  return (

    <div className="App">
      <h1> <img src= {logo} className='logotipo1' alt='nadador'/></h1>

      <Todo2></Todo2>

      <Todo1></Todo1>




    </div>
    
  );
}
export default App;
