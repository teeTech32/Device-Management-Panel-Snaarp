import { useContext } from "react";
import ModalAlert from './ModalAlert';
import { PiToggleLeftFill } from "react-icons/pi";
import { PiUsbLight } from "react-icons/pi";
import { PiSimCard } from "react-icons/pi";
import { PiDiscDuotone } from "react-icons/pi";
import { PiDeviceMobileCameraLight } from "react-icons/pi";
import { IoIosBluetooth } from "react-icons/io";
import { PiPrinter } from "react-icons/pi";
import { PiPlug } from "react-icons/pi";
import { PiLaptopThin } from "react-icons/pi";
import { PiToggleRightFill } from "react-icons/pi";
import agentContext from "../context/agent/AgentContext";
import TableItems from "./TableItems";

const Table = () => {
  
  const {usbOnandOff,setUsbOnandOff,sdportOnandOff,setSdportOnandOff,dvdOnandOff,setDvdOnandOff,lockdeviceOnandOff,setLockdeviceOnandOff,bluetoothOnandOff,setBluetoothOnandOff,printersOnandOff,setPrintersOnandOff,shutDowndeviceOnandOff,setShutDowndeviceOnandOff,rebootOnandOff, setRebootOnandOff,modalContent, setModalContent,agents} = useContext(agentContext)

  return (
    <>
      <table className="mt-2  rounded-3" style={{backgroundColor:'#d5d5d5'}}>
        <thead className=" ">
          <tr>
            <th className="text-center">
              <p className="fw-normal pt-5 ">Status</p>
            </th>
            <th>
              <p className="fw-normal pt-5">Name</p>
            </th>
            <th className="text-center">
              < PiUsbLight className="fs-1 p-2"/>
              <p className="fw-normal pt-2" style={{fontSize: '13px'}}>USB Ports</p>
            </th>
            <th className="text-center">
              <PiSimCard className="fs-1 p-2"/>
              <p className="fw-normal pt-2" style={{fontSize: '13px'}}>SD Ports</p>
            </th>
            <th className="text-center">
              <PiDiscDuotone className="fs-1 p-2"/>
              <p className="fw-normal pt-2" style={{fontSize: '13px'}}>CD/DVDs</p>
            </th>
            <th className="text-center">
              <PiDeviceMobileCameraLight className="fs-1 p-2"/>
              <p className="fw-normal pt-2" style={{fontSize: '13px'}}>Lock Device</p>
            </th>
            <th className="text-center">
              <IoIosBluetooth className="fs-1 p-2"/>
              <p className="fw-normal pt-2" style={{fontSize: '13px'}}>Bluetooth</p>
            </th>
            <th className="text-center">
              <PiPrinter className="fs-1 p-2"/>
              <p className="fw-normal pt-2" style={{fontSize: '13px'}}>Printers</p>
            </th>
            <th className="text-center">
              <PiPlug className="fs-1 p-2"/>
              <p className="fw-normal pt-2" style={{fontSize: '13px'}} >Shutdown Device</p>
            </th>
            <th className="text-center">
              <PiLaptopThin className="fs-1 p-2"/>
              <p className="fw-normal pt-2" style={{fontSize: '13px'}}>Reboot Device</p>
            </th>
          </tr>
        </thead>
        <tbody className="px-2" >
            <tr className="bg-white my-4">
              <td>
              </td>
              <td className="text-secondary opacity-50">
                <select className="rounded-2" style={{width:'165px', padding:'3px'}}>
                  <option value='All'>All</option>
                </select>
              </td>
              <td className="text-center">
                {usbOnandOff ? <PiToggleRightFill className="text-primary" style={{ fontSize: '47px' }} onClick={()=>setUsbOnandOff((prevState)=>(!prevState))
                }/> : <PiToggleLeftFill className="text-secondary opacity-50" style={{ fontSize: '47px' }} onClick={()=>setUsbOnandOff((prevState)=>(!prevState))
                }/>}
              </td>
              <td className="text-center">
                {sdportOnandOff ? <PiToggleRightFill className="text-primary" style={{ fontSize: '47px' }} onClick={()=>setSdportOnandOff((prevState)=>(!prevState))
                }/> : <PiToggleLeftFill className="text-secondary opacity-50" style={{ fontSize: '47px' }} onClick={()=>setSdportOnandOff((prevState)=>(!prevState))
                }/>}
              </td>
              <td className="text-center">
                {dvdOnandOff ? <PiToggleRightFill className="text-primary" style={{ fontSize: '47px' }} onClick={()=>setDvdOnandOff((prevState)=>(!prevState))
                }/> : <PiToggleLeftFill className="text-secondary opacity-50" style={{ fontSize: '47px' }} onClick={()=>setDvdOnandOff((prevState)=>(!prevState))
                }/>}
              </td>
              <td className="text-center">
                {lockdeviceOnandOff ? <PiToggleRightFill className="text-primary" style={{ fontSize: '47px'}} onClick={()=>setLockdeviceOnandOff((prevState)=>(!prevState))
                }/> : <PiToggleLeftFill className="text-secondary opacity-50" style={{ fontSize: '47px'}} onClick={()=>setLockdeviceOnandOff((prevState)=>(!prevState))
                }/>}
              </td>
              <td className="text-center">
                {bluetoothOnandOff ? <PiToggleRightFill className="text-primary" style={{ fontSize: '47px'}} onClick={()=>setBluetoothOnandOff((prevState)=>(!prevState))
                }/> : <PiToggleLeftFill className="text-secondary opacity-50" style={{ fontSize: '47px'}} onClick={()=>setBluetoothOnandOff((prevState)=>(!prevState))
                }/>}
              </td>
              <td className="text-center">
                {printersOnandOff ? <PiToggleRightFill className="text-primary" style={{ fontSize: '47px'}} onClick={()=>setPrintersOnandOff((prevState)=>(!prevState))
                }/> : <PiToggleLeftFill className="text-secondary opacity-50" style={{ fontSize: '47px'}} onClick={()=>setPrintersOnandOff((prevState)=>(!prevState))
                }/>}
              </td>
              <td className="text-center">
                {shutDowndeviceOnandOff ? <PiToggleRightFill className="text-primary" style={{ fontSize: '47px'}} onClick={()=>setShutDowndeviceOnandOff((prevState)=>(!prevState))
                }/> : <PiToggleLeftFill className="text-secondary opacity-50" style={{ fontSize: '47px'}} onClick={()=>setShutDowndeviceOnandOff((prevState)=>(!prevState))
                }/>}
              </td>
              <td className="text-center">
                {rebootOnandOff? <PiToggleRightFill className="text-primary" style={{ fontSize: '47px'}} onClick={()=>setRebootOnandOff((prevState)=>(!prevState))
                }/> : <PiToggleLeftFill className="text-secondary opacity-50" style={{ fontSize: '47px'}} onClick={()=>setRebootOnandOff((prevState)=>(!prevState))
                }/>}
              </td>
            </tr>
          {agents.map((agent) => (
            <TableItems key={agent.id} id={agent.id} agent={agent}/>
          ))}
        </tbody>
      </table>
      {modalContent && <ModalAlert content={modalContent} onClose={() => setModalContent(null)} />}
    </>       
  )
}

export default Table