import React from 'react'
import "./Home.css"
import { Heading, VStack,Stack, Button, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Image } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import {CgGoogle,CgYoutube} from "react-icons/cg"
import introVideo from "../../assets/videos/video-preview.mp4"
import vg from "../../assets/images/4739.jpg"
const Home = () => {
  return (
    <section className='home'>
        <div className="container">
   <Stack
   direction={["column","row"]}
   height="100%"
   justifyContent={["center","space-between"]}
   alignItems="center"
   spaceing={["16","56"]}
   >e^JqmpJsS8Q4(t5
    <VStack width={"full"} alignItems={['center' , 'flex-end']} spacing="8">
        <Heading children="LEARN FORM THE EXPERTS" size={'2xl'} />
        <Text 
        fontSize={`2xl`}
        textAlign={['center','left']}
        fontFamily="cursive"
        children="FIND YOUR NEEDS AT RESONOBLE PRICE" />
        <Link to="/course" colorScheme="yellow">
        <Button size={'lg'} colorScheme='yellow'>Explore Now</Button>
        </Link>
    </VStack>
    <Image boxSize={'md'} className='vector-graphics' src={vg} objectFit="contain"/>
     
   </Stack>
   </div>

    <Box padding={'8'} bg="blackAlpha.800 ">
        <Heading textAlign={"center"} fontFamily="body" color={"yellow.400"} children="OUR BRAND" />
        <HStack justifyContent={'space-evenly'}
        marginTop="4"
        >
        <CgGoogle className='brandsBanner' />
        <CgYoutube className='brandsBanner'/>
     </HStack>
     </Box>
    <div className="container2">
        <video 
       
         muted
        controls
        controlsList='nodownload nofullscreen noremoteplayback'
       disableRemotePlayback
       disablePictureInPicture
       autoPlay
        src={introVideo}
        ></video>
    </div>

   </section>
  )
}

export default Home