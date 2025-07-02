import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from '@/components';
import { Subscribe } from './components/subscribe';
import { Tabs } from './components/common/tabs';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <Tabs />
          </ThemeProvider>
        }
      />
    </Routes>
  );
}

export default App;
