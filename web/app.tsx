import Login from './components/Login'
import SignUp from './components/SignUp'
import Search from './components/Search'
import './styles.css'
import { Routes, Route } from 'react-router-dom'
export function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/search' element={<Search />} />
        <Route path='*' element={<Login />} />
      </Routes>
    </div>
  )
}
