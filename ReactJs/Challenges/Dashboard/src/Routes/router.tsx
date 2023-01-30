// React Router Dom
import { Route, Routes, BrowserRouter } from 'react-router-dom'

// Cpmponents
import { DefaultLayout } from '../Layouts/DefaultLayout'
import { Calendar } from '../Pages/Calendar'
import { Home } from '../Pages/Home'

export function Router() {
    return (
       <BrowserRouter>
         <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/calendar' element={<Calendar />} />
            </Route>
        </Routes>
       </BrowserRouter>
    )
}