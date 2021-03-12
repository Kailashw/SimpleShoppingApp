// import './App.css';
import ProductList from './ProductList';

const todos = [];

const addToDO = (event) => {
  todos.push({
    id : todos.length + 1,
    value : event.target.value,
    done : false
  });
}


function App() {
  return (
    <div className="App">
      <h1> Hi Kailash, Following are your list of products </h1>
      {/* <ProductList /> */}
      <input type="text"/>
      <button onClick={addToDO}> save todo </button>
    </div>
  );
}

export default App;
