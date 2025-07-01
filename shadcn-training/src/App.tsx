import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from '@/components';
import { Badge } from './components/badge';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <Badge name="shadcn" />
          </ThemeProvider>
        }
      />
    </Routes>
  );
}

export default App;
