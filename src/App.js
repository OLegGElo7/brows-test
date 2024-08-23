import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Error from "./pages/Error";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/price" element={<Service />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/error" element={<Error />}></Route>
        <Route path="/*" element={<Navigate to="/error" replace />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
