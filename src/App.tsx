import { JSX } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from '@src/pages/home/HomePage.tsx'
import { AnimatePresence } from 'framer-motion'
function App(): JSX.Element {
  const location = useLocation()

  return (
    <AnimatePresence mode={'wait'} initial={true}>
      <Routes location={location} key={location.pathname}>
        <Route path={'/'} element={<HomePage />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
