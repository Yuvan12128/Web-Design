import { BrowserRouter, Routes,Route,Link } from "react-router-dom"
import Home from "./assets/Home"
import About from "./assets/About"
import User from "./assets/User"
import OldBooks from "./assets/OldBooks"
import NewBooks from "./assets/NewBooks"
import Login from "./assets/Login"
import Dashboard from "./assets/Dashboard"

function App() {
 

  return (
    <>
     <div className="app">
      <BrowserRouter>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to='/user/1'>User1</Link></li>
                  <li><Link to='/user/2'>User2</Link></li>
                  <li><Link to='/books/oldbooks'>OldBooks</Link></li>
                  <li><Link to='/books/newbooks'>NewBooks</Link></li>
                  <li><Link to='/login'>Login</Link></li>
                </ul>
                <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path='/user/:id'element={<User/>}/>
                  <Route path="/books">
                  <Route path='oldbooks'element={<OldBooks/>}/>
                  <Route path='newbooks'element={<NewBooks/>}/>
                  </Route>
                  <Route path='login'element={<Login/>}/>
                  <Route path='dashboard'element={<Dashboard/>}/>
                </Routes>
      </BrowserRouter>
     </div>
    </>
  )
}

export default App
