import React from "react";
import "./Sidebar.css";
import logo from "../Images/logo.jpg";
import Dashboard from "../Images/Dashboard.png";
import upload from "../Images/upload.jpg";
import Ticket from "../Images/Ticket.png"
import Calender from "../Images/Calendar.png";
import Document from "../Images/Document.png";
import Notification from "../Images/Notification.png";
import Setting from "../Images/Setting.png";
export default function Sidebar() {
  return (
    <div className="sidebarcontainer">
      <div className="logo">
        <img src={logo} alt="logo" className="logoimg" />
        <p className="sidebarbase">Base</p>
      </div>
      <div className="menuname">
        <div className="mainDashboard">
          <div className="dashboard">
            <img className="menuimg" src={Dashboard} alt="Dashboard" />
            <p className="text">Dashboard</p>
          </div>
          <div className="dashboard1">
            <div className="rectangle">
            <img className="uploadimg" src={upload} alt="Dashboard" />
            </div>
            <p className="uploadtext">Upload</p>
          </div>
        </div>

        <div className="secondMenu">
            <img className="menuimg" src={Ticket} alt="Dashboard" />
            <p className="text">Invoice</p>
          </div>

          <div className="secondMenu">
            <img className="menuimg" src={Document} alt="Dashboard" />
            <p className="text">Schedule</p>
          </div>

          <div className="secondMenu">
            <img className="menuimg" src={Calender} alt="Dashboard" />
            <p className="text">Calender</p>
          </div>
          <div className="secondMenu">
            <img className="menuimg" src={Notification} alt="Dashboard" />
            <p className="text">Notification</p>
          </div>

          <div className="secondMenu">
            <img className="menuimg" src={Setting} alt="Dashboard" />
            <p className="text">Settings</p>
          </div>
      </div>
    </div>
  );
}
