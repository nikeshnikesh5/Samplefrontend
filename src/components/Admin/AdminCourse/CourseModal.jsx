import { Center,Grid,Box,Stack,Text,Button, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, VStack, ModalFooter, Input, ModalHeader } from '@chakra-ui/react'
import React, { useState } from 'react'

import VideoCard from './VideoCard';
import { fileUploadCss } from '../../Auth/Registration';

const CourseModal = ({isOpen,onClose,onOpen,id ,deleteButtonHandler}) => {
  const courseTitle = 'React Course';

  

  const lectures = [1,2,3,4]

  const [title , setTitle] = useState("")
const [description,setDescription] = useState("")
const [video, setVideo] = useState("")
const [videoPrev,setVideoPrev] =useState("")

const addLectureHandler = (e) =>{

}

const changeVideoHandlerconst  = e =>{
    const file = e.target.files[0];
    const reader = new FileReader();
  
    reader.readAsDataURL(file);
  
    reader.onload = () => {
        setVideoPrev(reader.result);
        setVideo(file);
    }
  }

  const handleClose = () => {
    setTitle("")
    setDescription("")
    setVideo("")
    setVideoPrev("")
    onClose();
  }

return (

    <Modal isOpen={isOpen} 
    size="full" 
    onClose={handleClose}
    scrollBehavior='outside'
    >
       <ModalOverlay/>
       <ModalContent>
      <ModalHeader>{courseTitle}</ModalHeader>
       <ModalCloseButton onClick={onClose}/>
       <ModalBody p="6">
        <Grid templateColumns={["1fr","3fr 1fr"]}>
         <Box
         px={["0","16"]}>
            <Box my="5">
        <Heading children={courseTitle} />
        <Heading children={`#${id}`} size="sm" opacity={0.4} />
        <Heading children={'Lecture'} size="lg"/>
       {
        lectures.map((item ,index)=>(
            <VideoCard 
            key={index}
            title="REact Intro " 
            description={"This is a intro lecture"} 
            num={1} 
            lectureId='dsdfkjhfdshjkf'
             courseId={id}
              deleteButtonHandler={deleteButtonHandler} 
            />

        ))
       }
            </Box>
         
            <Box>

       </Box>
         </Box>
   
         <form onSubmit={e => addLectureHandler(e,id,title,description,video) }>
 <VStack spacing={"4"}>
             <Heading 
             children="Add lecture" 
             size={"md"} 
             textTransform={'uppercase'}
             />
             <Input
             focusBorderColour="purple.300" 
             placeholder="Title"
              value={title}
             onChange={(e)=>setTitle(e.target.value)}
             />

<Input
         focusBorderColour="purple.300"
         placeholder="Description" 
         type={'text'}
         value={description}
         onChange={(e)=>setDescription(e.target.value)}
         />

         
             <Input
         accept='video/mp4'
         required
         id='chooseAvatar'
         type={'file'}
         focusBorderColor='purple.300'
         css={{
          '&::file-selector-button':{
            ...fileUploadCss,
            color:'purple'}
         }}
         onChange={changeVideoHandlerconst }
         />

         {
            videoPrev && (
                <video controlsList='nodownload' controls src={videoPrev}>

                </video>
            )
         }

         <Button w="full" colorScheme={"purple"}
         type="submit"
         >
            Upload Lecture
         </Button>
            </VStack>

        </form>
        </Grid>
       </ModalBody>

       <ModalFooter>
        <Button onClick={handleClose}>Close</Button>
       </ModalFooter>
       </ModalContent>
    </Modal>
  )
}

export default CourseModal


