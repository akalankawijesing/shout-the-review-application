import react from "react";
import RecentActivitiesItem from "./RecentActivitiesItem";

function RecentActivities() {
  return (
    <>
    
      <div class="w-screen p-12 overflow-x-hidden ">
        <p class="text-center text-2xl font-bold">Recent Activities</p>
        <div className="pl-12 pr-12 pt-0 items-center justify-center sm:justify-items-stretch md:justify-center text-white border overflow-x-hidden">
          <div className=" grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full p-8  justify-center justify-self-center mx-auto text-white  text-lg overflow-x-hidden">
          <RecentActivitiesItem />
        <RecentActivitiesItem />
        <RecentActivitiesItem />
        <RecentActivitiesItem />
        <RecentActivitiesItem />
        <RecentActivitiesItem />
          </div>

      </div>
      </div>


      
    </>
  );
}

export default RecentActivities;
