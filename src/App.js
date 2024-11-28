// import './App.css';
// import RegisterScreen from './components/RegisterScreen';
import LoginScreen from './components/Screens/LoginScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import HomeScreen from './components/HomeScreen';
// import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          {/* <Route path="RegisterScreen" element={<RegisterScreen />} /> */}
          {/* <Route path="HomeScreen" element={<HomeScreen />} /> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
