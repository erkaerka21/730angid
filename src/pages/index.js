import Image from "next/image";
import { Inter } from "next/font/google";
import Input from "@/components/input";
import UserCard from "@/components/user.card";
import profiles from "@/components/userCardData";
import { useState } from "react";

export default function Home() {
  const [searchedValue, setSearchedValue] = useState("");
  const [users, setUsers] = useState(profiles);

  const handleChange = (text) => {
    setSearchedValue(text);
    // hereglegchiig haij oloh
    const findUser = profiles.filter((user) =>
      user.firstName.toLowerCase().includes(text.toLowerCase())
    );
    setUsers(findUser);
  };

  // const deleteCard = () => {users.map((users) => users.pop())};
  // console.log("cardUstgah", deleteCard);
  return (
    <main
      className="flex
   flex-col items-center"
    >
      <h1 className="text-5xl font-bold">User find App</h1>
      <div className="flex items-start">
        <Input handleChange={handleChange} />
        <button
          className="ml-4 mt-5 border-5 border-black bg-slate-200 rounded-xl px-3 py-1"
          onClick={() => {
            setUsers(null);
          }}
        >
          Устгах
        </button>
        <button
          className="ml-4 mt-5 border-5 border-black bg-slate-200 rounded-xl px-3 py-1"
          onClick={() => {
            setUsers(profiles);
          }}
        >
          Харах
        </button>
      </div>
      <button className=" border-solid border-4 border-gray-900 bg-slate-50 rounded-lg px-4 py-2">
        Хайх
      </button>
      <p>Searched value: {searchedValue}</p>
      {users?.map(
        ({ imageUrl, id, firstName, age, jobTitle, phone, email, address }) => (
          <UserCard
            imageUrl={imageUrl}
            id={id}
            firstName={firstName}
            age={age}
            jobTitle={jobTitle}
            phone={phone}
            email={email}
            address={address}
          />
        )
      )}
      {!users && <p>Мэдээлэл байхгүй</p>}
    </main>
  );
}
