import React from 'react'
import { Avatar, Container, Heading, Stack, Text, VStack } from '@chakra-ui/react'

const Founder = () => {
  return (
    <Stack
    direction={["coloum","row"]}
    spacing={['4','16']} padding={'8'}>
   <VStack>
    <Avatar boxSize={['40','48']}/>
    <Text children='CO-FOunder' opacity={0.7}/>
   </VStack>

   <VStack justifyContent={'center'} alignItems={['center','flex-start']}>
     <Heading children="Founder A" size={['md','xl']}/>
     <Text 
     textAlign={['center','left']}
     children={`Hi , I am a full stack developer`} />
   </VStack>
    </Stack>

  )
}

export default Founder