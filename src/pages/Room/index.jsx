import React, { useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

const Room = () => {
  const { roomId } = useParams()
  const navigate = useNavigate()

  const handleRoomLeave = useCallback(()=>{
    console.log("User leave callback")
    navigate('/')
  })

  const myMeetings = async(element) => {
    const appID = 403943817
    const serverSecret = "a027b1d6468703c106c39c983e31b905"
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Dhyey Parekh");

    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall
      },
      showScreenSharingButton: true,
      onUserLeave: () => {
        alert("User ended the call")
        navigate('/')
      },
      onLeaveRoom: handleRoomLeave
    })
  }
  return (
    <div>
      <div ref={myMeetings} />
    </div>
  )
}

export default Room