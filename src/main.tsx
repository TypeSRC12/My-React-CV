import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ChakraBaseProvider, extendTheme } from '@chakra-ui/react'

const colors = {}

const theme = extendTheme({ colors })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ChakraBaseProvider theme={theme}>
      <App />
    </ChakraBaseProvider>
  </BrowserRouter>,
)
