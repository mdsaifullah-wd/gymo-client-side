import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './components/AddItem/AddItem';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import LoginSignUp from './components/LoginSignUp/LoginSignUp';
import ManageItems from './components/ManageItems/ManageItems';
import MyItems from './components/MyItems/MyItems';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/manageitems' element={<ManageItems />} />
        <Route path='/additem' element={<AddItem />} />
        <Route path='/myitems' element={<MyItems />} />
        <Route path='/account' element={<LoginSignUp />} />
      </Routes>
    </>
  );
}

export default App;
