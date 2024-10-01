
import Navbar from "./components/Navbar";
import Dashboard from "./views/Dashboard";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UpdateGrades from "./views/UpdateGrades";
import UpdateResources from "./views/UpdateResources";
import PostAnnouncements from "./views/PostAnnouncements";
import TakeAttendance from "./views/TakeAttendance";


export default function App(){
  
  return(
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/grades" element={<UpdateGrades />} />
        <Route path="/resources" element={<UpdateResources />} />
        <Route path="/announcements" element={<PostAnnouncements />} />
        <Route path="/attendance" element={<TakeAttendance />} />
      </Routes>
      
      
    </>
  );
}