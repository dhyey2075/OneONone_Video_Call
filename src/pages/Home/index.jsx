import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const handleRoomJoin = useCallback(() => {
    if (roomCode.trim()) {
      navigate(`room/${roomCode}`);
    }
  }, [navigate, roomCode]);


  return (
    <div >
      <div>
        <div className="flex justify-center p-10">
          <h1 className="text-3xl">Hello, Welcome to OneONone Video Calling App - dekho</h1>
        </div>
        <div className="flex flex-col justify-center p-10 gap-10">
          <h2 className="text-3xl text-center">Enter Room Code:</h2>
          <input
            className="w-1/2 sm:w-1/3 m-auto p-2 rounded-lg text-black"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
            type="text"
            placeholder="Enter room code(eg. 123456)"
          />
          <button
          type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-52 m-auto"
            onClick={handleRoomJoin}
          >
            Join Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
