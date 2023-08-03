import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import FormPage from "./components/FormPage/FormPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/form" element={<FormPage />}/>
        </Routes>
      </ BrowserRouter>
  );
}

export default App;
