import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import './index.css'
import App from './App.tsx'
import SidenavLayout from './domain/components/sidenav-layout.tsx';

import TabsDocs from './domain/components/tabs/tabs-docs.tsx';
import AppLayout from './domain/components/app-layout.tsx';
import Installation from './domain/pages/installation.tsx';
import Introduction from './domain/pages/introduction.tsx';
import ButtonDocs from './domain/components/button/button-docs.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <BrowserRouter>
     <Routes>
    <Route element={<AppLayout />}>
      <Route index element={<App />} />

      <Route element={<SidenavLayout />}>
      <Route path="Introduction" element={<Introduction />} />
      <Route path="installation" element={<Installation />} />
        <Route path="button" element={<ButtonDocs />} />
        <Route path="tabs" element={<TabsDocs />} />
      </Route>
    </Route>
     <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
  </BrowserRouter>
  </StrictMode>
)
