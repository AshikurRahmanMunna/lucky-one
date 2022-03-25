import logo from './logo.svg';
import './App.css';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App container">
      <h1 className='py-3'>GetCars<span className='text-warning'>.com</span></h1>
      <h3>Choose 4 cars</h3>
      <Products></Products>
    </div>
  );
}

export default App;
