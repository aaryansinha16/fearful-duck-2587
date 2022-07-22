import {Routes, Route} from 'react-router-dom'
import HomePage from './HomePage/Homepage'
import Login from './LoginPage/Login'

export default function AllRoutes(){
    return(
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<HomePage/>}/>
        </Routes>
    )
}