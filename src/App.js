import './App.css';
import Products from './components/Products/Products';
import Questions from './components/Questions/Questions';

function App() {
  return (
    <div className="App">
      <h1 className='py-3'>GetCars<span className='text-warning'>.com</span></h1>
      <h3>Choose 4 cars</h3>
      <Products></Products>
      <Questions></Questions>
    </div>
  );
}

export default App;
