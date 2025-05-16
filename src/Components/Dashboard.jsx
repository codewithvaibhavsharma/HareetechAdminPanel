import React,{ useEffect } from "react";
import { useNavigate, Link} from "react-router-dom";
import { Navigation } from "lucide-react";
import '../styles/Dashboard.css';
import AdminCard from "./AdminCard";
import Sidebar from "./Sidebar";



const Dashboard = () => {
  const isAuthenticated = localStorage.getItem('auth');
  const navigate = useNavigate();
  useEffect(() => {
      if (isAuthenticated) {
        console.log("User is authenticated");
        navigate('/Dashboard'); 
      }
      else
      {
        console.log("User is not authenticated");
        navigate('/LoginPage')
      }
    },[isAuthenticated, navigate]);
  return (
      <main className="main-content">
        <Sidebar />
      <h1 className="main-heading">Welcome to Hareetech Development Pvt. Ltd. Lucknow</h1>
      <p>Guiding the Team: A Leader's welcome to Employees</p>
      
      <div className="admin-card-container">
      <AdminCard number="10" title="Attendence" subtitle="work hard" />
      <AdminCard number="10" title="Leaves" subtitle="work hard" />
      <AdminCard number="10" title="Holidays" subtitle="work hard" />
      <AdminCard number="10" title="Events" subtitle="work hard" />
      </div>
    </main>
  );
};

export default Dashboard;

    // { isAuthenticated && <Sidebar/> }