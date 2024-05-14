import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import AuthProvider from "./AuthProvider";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Definicion from "./pages/Definicion";
import Contable from "./pages/Contable";
import TiposCont from "./pages/TiposCont";
import TiposGestor from "./pages/TiposGestor";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/Definicion" element={<Definicion />} />
          <Route path="/Contable" element={<Contable />} />
          <Route path="/TiposCont" element = {<TiposCont />} />
          <Route path="/TiposGestor" element = {<TiposGestor/>} />
        </Routes>
      </AuthProvider>
    </div>
  );

}
export default App;