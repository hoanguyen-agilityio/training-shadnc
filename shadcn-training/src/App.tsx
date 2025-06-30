import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from '@/components';
import { Header } from './layouts';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <Header />
          </ThemeProvider>
        }
      />
    </Routes>
  );
}

export default App;
