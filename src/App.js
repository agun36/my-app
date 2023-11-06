import './custom.scss';
import MainPage from './components/Pages/MainPage';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogsPages from './components/Pages/BlogsPages';

function App() {
  return (
    <ThemeProvider
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    minBreakpoint="xxs"
    >
      <BrowserRouter future={{ v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/blog" element={<BlogsPages />} />
        <Route path="/create-blog" element={<BlogsPages />} />
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
