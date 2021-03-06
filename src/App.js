import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './components/AddItem/AddItem';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import Authentication from './components/Authentication/Authentication';
import ManageInventory from './components/ManageInventory/ManageInventory';
import MyItems from './components/MyItems/MyItems';
import Header from './components/Shared/Header/Header';
import ProtectedRoute from './components/Shared/ProtectedRoute/ProtectedRoute';
import ItemDetails from './components/ItemDetails/ItemDetails';
import Footer from './components/Shared/Footer/Footer';
import Inventory from './components/Inventory/Inventory';
import Contact from './components/Contact/Contact';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/contact' element={<Contact />} />
        <Route
          path='/manage-inventory'
          element={
            <ProtectedRoute>
              <ManageInventory />
            </ProtectedRoute>
          }
        />
        <Route
          path='/add-item'
          element={
            <ProtectedRoute>
              <AddItem />
            </ProtectedRoute>
          }
        />
        <Route
          path='/my-items'
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
        <Route path='/*' element={<PageNotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
