import { useState, useEffect } from "react";
import type { Product } from "../models/product";
import './style.css';
import  { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Catalog from "../../features/catalog/Catalog";
import NavBar from "./NavBar";




function App() {
  const [darkMode, setDarkMode] = useState(false);
  const palletteType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode: palletteType,
      background: {
        default: palletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  });
  const [products, setProducts]= useState<Product[]>([]);

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Box sx={{ minHeight: '100vh', 
              background: darkMode  
              ?  'radial-gradient(circle, #1e3aBa, #111B27)' 
              : 'radial-gradient(circle, #baecf9, #f0f9ff)',
            py: 6 }}
      >
        <Container maxWidth='xl' sx={{ mt:8 }}>
          <Catalog products={products} />
      </Container>    
      </Box>
    </ThemeProvider>
     
  )
}

export default App
