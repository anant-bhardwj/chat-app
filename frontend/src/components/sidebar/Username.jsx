import React from "react";
import { useAuthContext } from "../../context/AuthContext";

const Username = () => {
  const { authUser } = useAuthContext();

  return (
    <div className={`flex gap-2 items-center rounded p-2 py-1`}>
      <div className="avatar">
        <div className="w-9 rounded-full">
          <img src={authUser.profilePic} alt="user avatar" />
        </div>
      </div>

      <div>
        <p className="font-bold text-sm text-gray-200">{authUser.fullName}</p>
      </div>
    </div>
  );
};

export default Username;
