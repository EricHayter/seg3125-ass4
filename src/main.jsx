import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
import ProductList from './ProductList.jsx'

function App() {
  const [searchText, setSearchText] = useState('');
  return (
    <>
      <Header onSearch={setSearchText} />
      <ProductList searchText={searchText} />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
