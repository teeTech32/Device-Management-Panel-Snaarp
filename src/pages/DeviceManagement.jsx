import React, { useState } from 'react';
import { RxDashboard} from "react-icons/rx";
import { PiDeviceMobileCameraLight, PiDesktopTowerFill, PiLinuxLogoLight } from "react-icons/pi";
import { FaWindows , FaApple} from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { CgRadioChecked } from "react-icons/cg";
import { BsChevronDown } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import Table from '../components/Table';

const DeviceManagement = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [activeDevice, setActiveDevice] = useState(null)
  const [activeSoftWare, setActiveSoftWare] = useState(null)
 
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId); 
  };

  const handleActiveDevice = (deviceId) =>{
    setActiveDevice(deviceId)
  }

  const handleSoftWare = (softwareId) =>{
    setActiveSoftWare(softwareId)
  }
  
  return (
    <>
    <div className='p-3 me-3 ms-2 mt-2 bg-white rounded-3 d-flex'>
      <div className='bg-light rounded-2'>
        <RxDashboard  className='m-2 bg-light rounded-3 fs-3'/>
      </div>
      <h4 className='mx-3 my-2 fw-bold'>Device Management</h4>
    </div>
    <div className='mx-2'>
      <div className='d-flex'>
        <div className='rounded-3 bg-white text-black my-2 me-1' style={{ width: '22rem', height:'21rem' }}>
          <div className='card-body'>
            <header className='card-title my-4 mx-3'>
              <h5>Organizations</h5>
            </header>
            <div className="d-flex mx-3">
              <input
              type="text"
              className="form-control  col-md-6 col-lg-20 px-5 py-3 rounded-4 me-5 position-relative "
              placeholder="Search organizational units"
              />
              <IoIosSearch className="position-absolute fs-3 my-3 mx-3 " />
            </div>
            <div className='row my-4 mx-3 bg-secondary bg-opacity-10 rounded-4 pt-3 pb-1'>
              <div className='d-flex pb-3'style={{ width: '20rem'}} >
                {activeButton === 1 ? <CgRadioChecked className='fs-3 text-primary' onClick={() => handleButtonClick(1)}/> : <GoDotFill className='fs-3 text-white bg-white border border-3 rounded-circle ' onClick={() => handleButtonClick(1)}/>}
                <p className='card-text px-2'>All organizational units users</p>
              </div>
              <div className='card-text d-flex pt-2'>
               {activeButton === 2 ? <CgRadioChecked className='fs-3 text-primary' onClick={() => handleButtonClick(2)}/> : <GoDotFill className='fs-3 text-white bg-white border border-3 rounded-circle' onClick={() => handleButtonClick(2)}/>}
                <p className='px-2'>Selected Organizational units users</p>
              </div>
            </div>
            <div  className='card-text d-flex mx-4 mt-4 mb-6 justify-content-between'>
              <p className=''>Select</p>
              <BsChevronDown className='float-right fs-3 text-black'/>
            </div>
          </div>
        </div>
        <div className='row ms-1 me-2' style={{ width: '72rem'}}>
          <div className='p-3 mt-2 bg-white rounded-3 d-flex '>
            <div className={`btn btn-xs rounded-4 d-flex pe-2 ${activeDevice === 1 ? 'bg-primary bg-opacity-10 text-primary' : 'bg-white text-black'}`} onClick={()=>handleActiveDevice(1)}>
              <PiDeviceMobileCameraLight  className='m-2 fs-3'/>
              <p className='mx-1 my-2 '>Mobile</p>
            </div>
            <div  className={`btn btn-xs rounded-4 d-flex pe-2 mx-2 ${activeDevice === 2 ? 'bg-primary bg-opacity-10 text-primary' : 'bg-white text-black'}`} onClick={()=>handleActiveDevice(2)}>
              <PiDesktopTowerFill  className='m-2 fs-3'/>
              <p className='mx-1 my-2'>Computer</p>
            </div>
          </div>
          <div className='p-3 mt-2 bg-white rounded-3 d-flex'>
            <div className={`btn btn-xs rounded-4 d-flex pe-2 ${activeSoftWare === 1 ? 'bg-primary bg-opacity-10 text-primary' : 'bg-white text-black'}`} onClick={()=>handleSoftWare(1)}>
              <FaWindows  className='m-2 fs-3'/>
              <p className='mx-1 my-2'>Windows</p>
            </div>
            <div className={`btn btn-xs rounded-4 d-flex pe-2 mx-2 ${activeSoftWare === 2 ? 'bg-primary bg-opacity-10 text-primary' : 'bg-white text-black'}`} onClick={()=>handleSoftWare(2)}>
              <FaApple  className='m-2 fs-3'/>
              <p className='mx-1 my-2'>Mac</p>
            </div>
            <div className={`btn btn-xs rounded-4 d-flex pe-2 ${activeSoftWare === 3 ? 'bg-primary bg-opacity-10 text-primary' : 'bg-white text-black'}`} onClick={()=>handleSoftWare(3)}>
              <PiLinuxLogoLight  className='m-2 fs-3'/>
              <p className='mx-1 my-2'>Linux</p>
            </div>
          </div>
          <Table/>
        </div>
      </div>
    </div>
  </>
    
  );
};

export default DeviceManagement;