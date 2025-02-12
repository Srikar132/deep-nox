import React from 'react'
import ButtonGradient from './assets/svg/ButtonGradient'
import Header from './components/Header'
import Home from './components/Home'
import { Routes , Route } from 'react-router-dom'
import Detection from './components/Detection'
import Blog from './components/Blog'

function App() {
  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header/>

        <Routes>
          <Route path='*' element={<Home/>}/>
          <Route path='/detection/*' element={<Detection/>}/>
          <Route path='/blog/' element={<Blog/>}/>
        </Routes>
      </div>
      <ButtonGradient/>
    </>
  )
}

export default App 