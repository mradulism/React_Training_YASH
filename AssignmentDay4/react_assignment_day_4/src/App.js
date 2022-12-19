import './App.css';
import Book from './Task1/Book';
import { Route, Routes } from 'react-router-dom';
import TaskIndex from './TaskIndex';
import ShowOnClick from './Task2/ShowOnClick';
import Product from './Task3/Product';


function App() {
  return (
    <div >
      <div className="App">
        <TaskIndex/>
            <Routes>
              <Route path='task1' element={<Book/>}/>
              <Route path='task2' element={<ShowOnClick/>}/>
              <Route path='task3' element={<Product/>}/>
            </Routes>

      </div>
    </div>
  );
}

export default App;
