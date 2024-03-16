import React from "react";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import Username from "./Username";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto  ">
      <div className="divider my-0 py-0 h-1" />
      <div className="flex flex-1 items-center justify-between">
        <div>
          <Username />
        </div>

        <div>
          {!loading ? (
            <BiLogOut
              className="w-6 h-6 text-white cursor-pointer"
              onClick={logout}
            />
          ) : (
            <span className="loading loading-spinner"></span>
          )}
        </div>
      </div>
    </div>
  );
};

export default LogoutButton;
