import React from 'react'
import Sidebar from '../Components/Sidebar'
import "./UploadCSV.css"
import { FaRegBell } from 'react-icons/fa'
import { HiOutlineUpload } from "react-icons/hi";
export default function UploadCSV() {
  return (
    <div className='mainContainer'>
        <div className='sidebar'>
            <Sidebar/>
        </div>
        <div >
        <div className='mainPart'>
   <div className='navbar'>
    <div>
        <p>Upload CSV</p>
    </div>
    <div className='right_part'>
       <div>
       <FaRegBell size={20} />
        </div> 
        <div>
            <img src="https://s3-alpha-sig.figma.com/img/203e/bb33/eccd71f34638f7751900105c639d563d?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k9saXYAamsOvnZ1xhzIr2V29Xg9PlJAWrA5JwbJGAigpiUSMK~I3gQykef14hsTkdgIetuFCvO3Vk2H9v7WDmDEj2~pGdVK4Llmwe7VF4VRESG80qqKTmpNJkBxo2ZGgUyk5eMGuphGBrqeklJDHDEvnitPyUXRyjKNEPuNmjKBKnRi2dX9Z~0JPQ7BtRQyIG79BojPFd0MMLKEzGa58ZjHmqHMNHzZMK633TpcnU0v1ulRwOLVsupz-Qwvbw69d33Dubm4VZv9zlh5Gs8~h9O8yT99au9O~LJvfq3p6fKRKdd--Aum4KJAJbiHEScNdcpij4vB8Pd~VVUicLKSGEA__" alt="logo_img" />
        </div>
    </div>
   </div>
   <div className='drop_part'>
    <div className='inerPart'>
        <img src="https://i.ibb.co/pzLQHXG/uploader.png" alt="uploader" />
    </div>
    <button className='btn1'> <span><HiOutlineUpload /></span>Upload</button>
   </div>
    </div>
        </div>
    </div>
  )
}
