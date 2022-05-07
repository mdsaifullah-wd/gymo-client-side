import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './components/AddItem/AddItem';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import Authentication from './components/Authentication/Authentication';
import ManageItems from './components/ManageItems/ManageItems';
import MyItems from './components/MyItems/MyItems';
import Header from './components/Shared/Header/Header';
import ProtectedRoute from './components/Shared/ProtectedRoute/ProtectedRoute';
import ItemDetails from './components/ItemDetails/ItemDetails';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route
          path='/manageitems'
          element={
            <ProtectedRoute>
              <ManageItems />
            </ProtectedRoute>
          }
        />
        <Route
          path='/additem'
          element={
            <ProtectedRoute>
              <AddItem />
            </ProtectedRoute>
          }
        />
        <Route
          path='/myitems'
          element={
            <ProtectedRoute>
              <MyItems />
            </ProtectedRoute>
          }
        />
        <Route
          path='/inventory/:id'
          element={
            <ProtectedRoute>
              <ItemDetails />
            </ProtectedRoute>
          }
        />
        <Route path='/signin' element={<Authentication />} />
        <Route path='/signup' element={<Authentication />} />
      </Routes>

      <p className='text-center'>Footer</p>
    </>
  );
}

export default App;
