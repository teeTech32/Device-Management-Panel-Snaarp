import { IoIosSearch } from "react-icons/io";
import { PiCopyLight } from "react-icons/pi";
import { GoBell } from "react-icons/go";


const Header = () => (
  <header className="d-flex justify-content-between align-items-center p-2 my-2 me-3 ms-2 bg-white  rounded-3 ">
    <div></div>
    <div className="d-flex ">
      <input
      type="text"
      className="form-control   px-5 py-3 rounded-4 me-5 position-relative "
      placeholder="Search for files and folders"
      style={{width: "550px"}}
      />
      <IoIosSearch className="position-absolute fs-3 my-3 mx-3 " />
    </div>
    <div className="d-flex">
      <div className="bg-secondary bg-opacity-10 rounded-4 mx-2 text-center cursor-pointer ">
        <GoBell className="m-3 fs-4 text-center"/>
      </div>
      <div className="bg-secondary bg-opacity-10 rounded-4 px-2 me-2">
        Agent Code: <strong className="text-primary ">0365o23j7742y3b38</strong>
        <PiCopyLight className="m-3 fs-4 cursor-pointer " />
      </div>
    </div>
  </header>
);

export default Header;