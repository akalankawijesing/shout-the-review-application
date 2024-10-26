import react from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'



function HeroMoreTabs() {
  return (
    <>
      <div className="grid grid-cols-1 sm:justify-items-stretch md:justify-center p-4 text-white gap-1 text-lg "  >
      Looking for more?
      <div className="flex items-center justify-center font-extrabold underline gap-2 "> <span className="text-center">More Categories </span> <FontAwesomeIcon icon={faArrowRight} size={'lg'}/> </div>
      </div>
    </>
  );
}

export default HeroMoreTabs;
