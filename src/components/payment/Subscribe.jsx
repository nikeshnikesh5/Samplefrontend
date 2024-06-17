import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Subscribe = () => {
  return (
   <Container h="90vh" p="16">
      <Heading  children="Welcome" my="8" textAlign={'center'}/>
        <VStack
        borderShadow={'lg'}
        alignItems="stretch"
        borderRadius={'lg'}
        spacing="0"
        >
            <Box bg="yellow.400" p={"4"} css={{borderRadius:"8px 8px 0 0"}}>
                <Text color={"black"} 
                children={`Pro Pack - 399`} />
            </Box>

            <Box  p={'4'} >
              <VStack textAlign={"center"} px="8" mt={"4"} spacing="8">
                <Text 
                color={"black"}
                children={`Join pro pack and get acess to all content`}
                />
                <Heading  size="md" children={"$299 only"} />
              </VStack>


              <Button my="8" x="f" colorScheme='yellow'>
                Buy Now
              </Button>
            </Box>

            <Box bg="blackAlpha.600" p="4" css={{ borderRadius: '0 0 8px 8px'}}>
                <Heading color={'white'} size="sm" children={'100% refund at cancellation'} />
             <Text fontSize={"xs"}  color={"white"} children={"*Terms & Condition Apply"} />
            </Box>
        </VStack>
   </Container>
  )
}

export default Subscribe