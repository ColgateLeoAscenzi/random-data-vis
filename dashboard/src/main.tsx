import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import StreamDash from './components/stream/StreamDash.tsx'
import DataTables from './DataTables.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<StreamDash />} />
      <Route path="/all-data" element={<DataTables />} />
    </Routes>
  </BrowserRouter>,
)
