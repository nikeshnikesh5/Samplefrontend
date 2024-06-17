import { Box,Heading, VStack,Stack,HStack} from '@chakra-ui/react'
import {TiSocialYoutubeCircular,TiSocialInstagram} from "react-icons/ti"
import {DiGithub } from "react-icons/di"
import React from 'react'

function Footer() {
  return (
   <Box padding={'4'} bg="blackAlpha.900" minH={'10vh'}>
    <Stack direction={['column','row']}>
     <VStack alignItems={['center','flex-start']} width="full">
     <Heading children="All Rigth REserved" color={"white"}/>
    <Heading 
    fontFamily={'body'}
    size="sm"
    children="company details"
    color={'yellow'}
    />
   
     </VStack>
     <HStack spacing={['2','15']} alignItems={['center','flex-end']} justifyContent='center' color={'white'}  fontSize="50">
    <a href="https://youtube.com" target={'blank'}>
    <TiSocialYoutubeCircular/>
    </a>
    <a href="www.instagram.com" target={'blank'}>
   <TiSocialInstagram/> 
    </a>
    <a href="https://githun.com" target={'blank'}>
     <DiGithub/>
</a>
     </HStack>
     
    </Stack>
   </Box>
  )
}

export default Footer