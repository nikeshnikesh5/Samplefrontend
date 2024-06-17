import React from 'react'
import { Box,Stack,Text,Button, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/react'
import { RiDeleteBin7Fill } from 'react-icons/ri';




const VideoCard = ({title,description,num,lectureId,courseId,deleteButtonHandler}) => {
  return (
      <Stack direction={["column","row"]}
      my="8" 
      borderRadius={"lg"} 
      boxShadow={"0 0 10px rgba(107,70,193,0.5)"}
      justifyContent={["flex-start",'space-between']}
      p={["4","8"]}
      >
          <Box>
            <Heading size={"sm"} children={`#${num} ${title}`}/>
            <Text children={description} />
          </Box>
          <Button color={"purple.600"} onClick={()=>deleteButtonHandler(courseId,lectureId)}>
            <RiDeleteBin7Fill/>
          </Button>
    </Stack>
   
  )
}

export default VideoCard