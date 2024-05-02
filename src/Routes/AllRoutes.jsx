import { Routes, Route } from 'react-router-dom';
import Login from '../Components/Auth/Login';
import Register from '../Components/Auth/Register';
import Tasks from '../Components/Tasks';

function AllRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/tasks" element={<Tasks/>} />
    </Routes>
  );
}

export default AllRoutes;
