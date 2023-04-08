import logo from './logo.svg';
import './App.css';
import SignUp from './Pages/signup/signup';
import Signin from './Pages/signin/signin';
import Dashboard from './Pages/dashboard/dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./routes/protectedRoute";
import AuthRoute from "./routes/authRoute";


import Bookpage from "./bookpage/bookpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <AuthRoute>
                <Signin />
              </AuthRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <AuthRoute>
                <SignUp />
              </AuthRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/bookpage/:id" element={<Bookpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;






