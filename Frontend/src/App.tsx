import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppConfigProvider } from './contexts/AppConfigContext';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import './index.css';

export default function App() {
  return (
    <AppConfigProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </BrowserRouter>
    </AppConfigProvider>
  );
}
