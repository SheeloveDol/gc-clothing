import { Routes, Route, Outlet } from 'react-router-dom';

import Home from './routes/home/home.component'


const App = () => {

  const Navigation = () => {
    return (
      <div>
        <div>
          <h1>I am a Nav Bar</h1>
        </div>
        <Outlet />
      </div>
    )
  }

  const Apple = () => {
    return (
      <h1>This is the Apple store page. Still under construction</h1>
    )
  }

  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
      <Route index element={<Home />} />
      <Route path='/apple' element={<Apple />} />
      </Route>
      
    </Routes>
  )
}

export default App;
