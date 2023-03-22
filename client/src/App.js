import { Box } from '@mui/material';
import Navbar from './Navbar';
import {Routes, Route} from 'react-router-dom';
import Text from './Text';

function App() {
  return (
    <Box sx={
      {
        width: '100%',
        height: '100vh',
      }
    }>
      <Navbar/>
      <Routes>
        <Route path="/" element={<h1>Home</h1>}/>
        <Route path="/chat" element={<h1>Chat</h1>}/>
        <Route path="/text" element={<Text/>}/>
      </Routes>
    </Box>
  );
}

export default App;
