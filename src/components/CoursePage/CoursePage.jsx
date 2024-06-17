import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import introVideo from "../../assets/videos/video-preview.mp4"

const CoursePage = () => {


const [lectureNumber , SetLectureNumber] = useState(1)

    

const lecture = [
        {
            _id:'sasadaa',
            title:"Sample1",
            description:'sample secfdf ndfs fsf asd fads',
            video:{
                url:'saadsad'
            }
        },
        {
            _id:'sasadaa2',
            title:"Sample2",
            description:'sample secfdf ndfs fsf asd fads',
            video:{
                url:'saadsad'
            }
        },
        {
            _id:'sasadaa3',
            title:"Sample3",
            description:'sample secfdf ndfs fsf asd fads',
            video:{
                url:'saadsad'
            }
        },

    ]
    console.log(lecture);
  return (
   <Grid minH={'90vh'} templateColumns={['1fr','3fr 1fr']}>
      <Box>
        <video
        width={'100%'}
        controls
        controlsList='nodownload noremoteplayback'
        disablePictureInPicture
        disableRemotePlayback
        src={introVideo}
        >
        </video>
        <Heading m="4" children={`#${lectureNumber} ${lecture[lectureNumber].title}`} />
       <Heading m="4" children="Description"/> 
       <Text m="4" children={lecture[lectureNumber].description}/>
     </Box>


 


   <VStack>
    {
        lecture.map((item,index)=>(
            <button key={item._id}
            onClick={()=>(SetLectureNumber(index + 1))}
            style={{
                width: "100%",
                padding:"1rem",
                textAlign:"center",
                margin:0,
                borderBottom:"1px solid rgba(0,0,0,0.2)"
            }}
            >
                <Text noOfLines={1}>
                    #{index + 1} {item.title}
                </Text>
            </button>
        ))
    }
   </VStack>

   </Grid>
  )
}

export default CoursePage