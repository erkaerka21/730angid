import React from "react";

const UserCard = ({ userImg, MyName }) => {
  return (
    <div>
      <img className="w-10 h-10 rounded-full" src={userImg} alt="" />
      <div>
        <h1>{MyName}</h1>
        <p>{position}</p>
      </div>
    </div>
  );
};

export default UserCard;
