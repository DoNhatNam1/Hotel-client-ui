"use server";

import AdminAddRoomClassButtonComponent from "@/components/Buttons/Rooms/AdminAddRoomClassButtonComponent";
import AdminRoomClassTableComponent from "@/components/Tables/Rooms/AdminRoomClassTableComponent";
import AdminHeader from "@/components/Layout/AdminHeader";

const RoomBody = () => {
  return (
    <>
      <div className="basis-5/6">
        <AdminHeader />
        <div className="h-auto">
          <div className="mx-10 mt-32 mb-9 z-0 flex justify-between">
            <h2 className="text-gray-700 font-semibold text-xl">
              Hạng phòng/Phòng
            </h2>
            <AdminAddRoomClassButtonComponent />
          </div>
          <div className="w-full grid place-content-center">
            <AdminRoomClassTableComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomBody;