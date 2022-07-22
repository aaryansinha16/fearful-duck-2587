import {Routes, Route} from 'react-router-dom'
import HomePage from './HomePage/Homepage'
import Login from './LoginPage/Login'
import Signup from './SignupPage/Signup'

export default function AllRoutes(){
    return(
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
        </Routes>
    )
}