import { Box } from '@chakra-ui/react'
import React from 'react'
import introVideo from "../../assets/videos/video-preview.mp4"

const VideoPlayes = () => {
  return (
   <Box>
    <video
    autoPlay
    loop
    muted
    controls
    controlsList='nodownload nofullscreen noremoteplayback'
    disablePictureInPicture
    disableRemotePlayback
    src={introVideo}
    ></video>
   </Box>
  )
}

export default VideoPlayes