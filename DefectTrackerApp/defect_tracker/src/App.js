import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './DefectTracker/LoginForm';
import Header from './DefectTracker/Header';
import Footer from './DefectTracker/Footer';
import ContactUs from './DefectTracker/ContactUs';
import HomeScreen from './DefectTracker/HomeScreen';
import AddDefect from './DefectTracker/AddDefect';
import DefectdashBoard from './DefectTracker/DefectdashBoard';

function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
      <Route path='home' element={<HomeScreen/>}/>
      <Route path='login' element={<LoginForm/>}/>
      <Route path='addDefect' element={<AddDefect/>}/>
      <Route path='viewAllDefect' element={<DefectdashBoard/>}/>
      <Route path='contact' element={<ContactUs/>}/>

     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
