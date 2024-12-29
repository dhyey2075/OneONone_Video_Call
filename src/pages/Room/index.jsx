import React, { useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import { ToastContainer, toast } from 'react-toastify'

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
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Dhyey");

    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy Link",
          url: window.location.href
        }
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall
      },
      showScreenSharingButton: true,
      onLeaveRoom: () => {
        navigate('/');
      },
      autoHideFooter: true,
      branding: {
        companyName: "Dekho",
        logo: "https://storage.zego.im/demo/imgs/ZegoLogo.png"
      },
      onUserJoin: (user) => {
        console.log(user);
      },
      screenSharingConfig: {
        extensionId: "minllpmhdgpndnkomcoccfekfegnlikg",
        resolution: {
          width: 1920,
          height: 1080
        }
      },
      showMyCameraToggleButton: true,
      showPinButton: true,
      showMyMicrophoneToggleButton: true,
      showMyScreenToggleButton: true,
      showLeaveButton: true,
      showInviteButton: true,
      showMoreButton: true,
      showFullScreenButton: true,
      showWhiteboardButton: true,
      showSettingButton: true,
      showRecordButton: true,
      showRaiseHandButton: true,
      showParticipants: true,
      showChat: true,
      showExitFullScreenButton: true,
      
    })
  }
  return (
    <div className="flex flex-col justify-center p-10 gap-10">
      <div className='h-[88vh] w-[90vw] m-auto' ref={myMeetings} />
    </div>
  )
}

export default Room