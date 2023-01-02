import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './LibraryPortal/Footer';
import Header from './LibraryPortal/Header';
import AddBook from './LibraryPortal/AddBook';
import ContactUs from './LibraryPortal/ContactUs';
import ViewAllBooks from './LibraryPortal/ViewAllBooks';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="addBook" element={<AddBook/>}/>
        <Route path="viewAllBooks" element={<ViewAllBooks/>}/>
        <Route path="contactUs" element={<ContactUs/>}/>
      </Routes  >

      <Footer/>
        
    </div>
  );
}

export default App;
