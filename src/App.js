import Home from './Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import UserDetails from './UserDetails'

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />}>
        </Route>
        <Route path="/userdetails/:id" element={<UserDetails />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
