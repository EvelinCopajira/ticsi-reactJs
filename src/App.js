import './App.css';
import NavBar from './components/NavBar/NavBar';


import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    //JSX
    <div className="App">
      <NavBar />
      <div className='general-container'>
        <ItemListContainer>
        </ItemListContainer>
      </div>
    </div>
  );
}

export default App;
