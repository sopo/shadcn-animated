import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.tsx'
import SidenavLayout from './pages/components/sidenav-layout.tsx';
import ButtonDocs from './pages/button-docs.tsx';
import TabsDocs from './pages/tabs-docs.tsx';
import AppLayout from './pages/components/app-layout.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <BrowserRouter>
     <Routes>
    <Route element={<AppLayout />}>
      <Route index element={<App />} />

      <Route element={<SidenavLayout />}>
        <Route path="button" element={<ButtonDocs />} />
        <Route path="tabs" element={<TabsDocs />} />
      </Route>
    </Route>
  </Routes>
  </BrowserRouter>,
  </StrictMode>,
)
