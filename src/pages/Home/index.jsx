import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [roomCode, setRoomCode] = useState()
    const [name, setName] = useState()
    const navigate = useNavigate()

    const handleRoomJoin = useCallback(() => {
        navigate(`room/${roomCode}`)
    }, [navigate, roomCode])

    const styles = {
        container: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "#f5f5f5",
          padding: "20px",
        },
        heading: {
          fontSize: "24px",
          fontWeight: "600",
          color: "#333",
          marginBottom: "20px",
        },
        input: {
          width: "100%",
          maxWidth: "400px",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "16px",
          marginBottom: "16px",
          outline: "none",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        },
        button: {
          width: "100%",
          maxWidth: "400px",
          padding: "12px",
          borderRadius: "8px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          fontSize: "16px",
          fontWeight: "600",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          textAlign: "center",
        },
        buttonHover: {
          backgroundColor: "#0056b3",
        },
      };
      

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Join a Room</h2>
            <input
                style={styles.input}
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                type="text"
                placeholder="Enter room code"
            />
            <button style={styles.button} onClick={handleRoomJoin}>
                Join Room
            </button>
        </div>

    )
}

export default Home