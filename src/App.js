import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import { Routes, Route } from 'react-router-dom';
import Userlist from './components/Userlist';
import { useState } from 'react'
import Adduser from './components/Adduser';
import Footer from './components/Footer';
import Deleteuser from './components/Deleteuser';
import Edituser from './components/Edituser';



import './App.css';

function App() {

  let data = {
    monthly: "Rs. 40,000",
    annual: "Rs. 4,80,000",
    task: 50,
    pending: 18
  }



  let [user, addUser] = useState([
    { name: "Mani", email: "xxx@gmail.com", age: 23, mobile: "123456789", batch: "B38WDT" },
    { name: "Ramu", email: "yyy@gmail.com", age: 26, mobile: "123456789", batch: "B38WDT" },
    { name: "Prabhu", email: "zzz@gmail.com", age: 30, mobile: "123456789", batch: "B38WDT" },
    { name: "Dinesh", email: "aaa@gmail.com", age: 37, mobile: "123456789", batch: "B38WDT" },
  ]);
  return <div className='d-flex'>

    <div>
      <Sidebar />
    </div>
    <div className="container-fluid p-0">
      <Navbar />
      <Routes>
        <Route>

          <Route path='/dashboard' element={<Dashboard data={data} />} />
          <Route path='/user-list' element={<Userlist user={{ user, addUser }} />} />
          <Route path='*' element={<Userlist user={{ user, addUser }} />} />
          <Route path='/add-user' element={<Adduser user={{ user, addUser }} />} />
          <Route path='/add-user' element={<Adduser user={{ user, addUser }} />} />
          <Route path='/delete-user' element={<Deleteuser user={{ user, addUser }} />} />
          <Route path='/edit-user/:id' element={< Edituser user={{ user, addUser }} />} />


        </Route>

      </Routes>
      <div className='position-absolute bottom-0 start-50 translate-middle-x'>
        <Footer />
      </div>
    </div>

  </div>
}

export default App;
