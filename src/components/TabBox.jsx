import react from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBurger,faCar,faHammer,faBagShopping,faGlassMartiniAlt } from '@fortawesome/free-solid-svg-icons'



function TabBox() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:justify-items-stretch md:justify-center p-4 text-white gap-1 "  >
      <div className="col tab rounded lg:rounded-l-full  flex flex-col justify-center items-center hover:bg-blue-700"  ><FontAwesomeIcon icon={faBurger} size="xl" />Resturent</div>
      <div className="col tab rounded flex flex-col justify-center items-center hover:bg-blue-700"><FontAwesomeIcon icon={faCar} size="xl" />Auto Services</div>
      <div className="col tab rounded flex flex-col justify-center items-center hover:bg-blue-700"><FontAwesomeIcon icon={faHammer} size="xl" />Home Services</div>
      <div className="col tab rounded flex flex-col justify-center items-center hover:bg-blue-700"><FontAwesomeIcon icon={faBagShopping} size="xl" />Shopping</div>
      <div className="col tab flex flex-col rounded lg:rounded-r-full justify-center items-center hover:bg-blue-700"><FontAwesomeIcon icon={faGlassMartiniAlt} size="xl" />Bars</div>
      </div>
    </>
  );
}

export default TabBox;
