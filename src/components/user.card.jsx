import React from "react";
import { MdOutlineDeleteForever } from "react-icons/md";

const UserCard = ({
  imageUrl,
  id,
  firstName,
  age,
  jobTitle,
  phone,
  email,
  address,
  deleteCard,
}) => {
  return (
    <div className="flex w-1/2 justify-between mb-3 border-solid border-blue-500 border-2 rounded-xl px-2 py-6">
      <img className="w-30 h-30 rounded-full" src={imageUrl} alt="" />
      <div className="flex items-start">
        <div>
          <p>Дугаар: {id}</p>
          <div>
            <h1>Овог нэр: {firstName}</h1>
            <p>Нас : {age}</p>
          </div>
          <p>Ажлын байр: {jobTitle}</p>
          <p>Утасны дугаар: {phone}</p>
          <p>Цахим шуудан: {email}</p>
          <p>Хаяг: {address}</p>
        </div>
        <button className="text-2xl text-center ml-4" onClick={deleteCard}>
          <MdOutlineDeleteForever />
        </button>
      </div>
    </div>
  );
};

export default UserCard;
