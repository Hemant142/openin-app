import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import "./UploadCSV.css";
import { FaRegBell } from "react-icons/fa";
import { HiOutlineUpload } from "react-icons/hi";
import excel from "../Images/excel.png";
import { ColorRing } from "react-loader-spinner";
import Tables from "./Tables";
export default function UploadCSV() {
  const [toggle, setToggle] = useState(false);
  const [tableloader, setTableLoader] = useState(true);
  const handleUpload = () => {
    setToggle(true);
  };
  return (
    <div className="mainContainer">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div>
        <div className="mainPart">
          <div className="navbar">
            <div>
              <p>Upload CSV</p>
            </div>
            <div className="right_part">
              <div>
                <FaRegBell size={32} />
              </div>
              <div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/203e/bb33/eccd71f34638f7751900105c639d563d?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k9saXYAamsOvnZ1xhzIr2V29Xg9PlJAWrA5JwbJGAigpiUSMK~I3gQykef14hsTkdgIetuFCvO3Vk2H9v7WDmDEj2~pGdVK4Llmwe7VF4VRESG80qqKTmpNJkBxo2ZGgUyk5eMGuphGBrqeklJDHDEvnitPyUXRyjKNEPuNmjKBKnRi2dX9Z~0JPQ7BtRQyIG79BojPFd0MMLKEzGa58ZjHmqHMNHzZMK633TpcnU0v1ulRwOLVsupz-Qwvbw69d33Dubm4VZv9zlh5Gs8~h9O8yT99au9O~LJvfq3p6fKRKdd--Aum4KJAJbiHEScNdcpij4vB8Pd~VVUicLKSGEA__"
                  alt="logo_img"
                />
              </div>
            </div>
          </div>
          <div className="drop_part">
            <div className="inerPart">
              <div className="excel">
                <img
                  style={{ marginLeft: "115.5px", marginRight: "115.5px" }}
                  src={excel}
                  alt="excel"
                />
                {toggle ? (
                  // <div style={{textAlign:"center"}}>
                  <p style={{ textAlign: "center" }}>
                    upload-template.xlsx{" "}
                    <span
                      style={{
                        display: "block",
                        color: "red",
                        marginTop: "0.5em",
                      }}
                    >
                      Remove
                    </span>
                  </p>
                ) : (
                  <p>
                    Drop your excel sheet or{" "}
                    <span style={{ color: "#605bff" }}>browser</span>
                  </p>
                )}
              </div>
            </div>
            <button className="btn1" onClick={handleUpload}>
              {" "}
              {toggle ? (
                <ColorRing
                  width="30px"
                  colors={["#fff", "#fff", "#fff", "#fff", "#fff"]}
                />
              ) : (
                <div>
                  <span>
                    <HiOutlineUpload />
                  </span>
                  Upload
                </div>
              )}
            </button>
          </div>
          {tableloader ? (
            <div className="table">
              <Tables />
            </div>
          ) : (
            <div></div>
          )}
          {/* <div className="table">
            <div>
              <p className="paragraph">Upload</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
