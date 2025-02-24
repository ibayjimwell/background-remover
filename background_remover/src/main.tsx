import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Layout from './Layout.tsx'
import MainPage from './components/MainPage/Index.tsx'
import NotFound from './components/404NotFound/Index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout></Layout>}>
                <Route index element={<App></App>}></Route>
                <Route path='/main' element={<MainPage></MainPage>}></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
              </Route>
            </Routes>
    </BrowserRouter>
  </StrictMode>,
)
