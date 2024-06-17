import { Box, Grid, HStack, Heading,  Stack, Text } from '@chakra-ui/react'
import React from 'react'
import cursor from "../../../assets/images/cursor.png"
import SideBar from "../SideBar"
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri'
import { DoughnutCart, LineChart } from './Chart'
import Bar from './Bar'






const Databox = ({title,qty,qtyPercentage,profit}) => (
  <Box 
  w={["full" ,"20%"]} 
  boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
   p="8"
  borderRadius={'lg'}
  >
      <Text children={title} />
    
    <HStack spacing={"6"}>
      <Text fontSize={"2xl"} fontWeight="bold" children={qty}/>
   
      <HStack>
        <Text children={`${qtyPercentage}%`}/>
        {
          profit?<RiArrowUpLine color='green'/>:(
            <RiArrowDownLine color='red'/>
          )
        }
      </HStack>
    </HStack>
    <Text opacity={0.6} children={"Since Last Month"} />
      
  </Box>
)

const DashBoard = () => {
  return (
    <Grid css={{
        cursor: `url(${cursor}),default`,
    }}
    minH={"100vh"}
     templateColumns={['1fr','5fr 1fr']}>

  <Box boxSizing='border-box' py="16" px={['4','0']}>
    <Text textAlign={"center"} opacity={0.5} children={`Last change was on ${String(new Date()).split('G')[0]}`}/>
   <Heading children="Dashboard" ml="16" textAlign={["center","left"]}/>
    <Stack
    direction={["column","row"]} minH="24" justifyContent={"space-evenly"}
    >
     <Databox title="View" qty={123} qtyPercentage={30} profit={true} />
     <Databox title="Users" qty={123} qtyPercentage={70} profit={true} />
     <Databox title="Subscription" qty={23} qtyPercentage={78} profit={false} />
    </Stack>
  
  

  <Box m={["0","16"]}
   borderRadius="lg"
   p={['0','16']}
   mt={['4','16']}
   boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
  >
    <Heading 
    textAlign={["center","left"]} 
    size="md" 
    children="View Graph"
    pt={["8","0"]}
    />
    <LineChart/>
        {/* line Gragh here */}
  </Box>

<Grid templateColumns={["1fr","2fr 1fr"]}>
  <Box p="4">
    <Heading 
     textAlign={['center','left']}
     size="md"
     children="Progress Bar"
     my="8"
     ml={['0','16']}
    />

    <Box>
      <Bar profit={true} title="Views" value={30}/>
      <Bar profit={true} title="Users" value={78}/>
      <Bar profit={false} title="Subscription" value={0}/>
    </Box>
  </Box>
<Box p={['0','16']} boxSizing='border-box' py='4'>
  <Heading textAlign={'center'} size='md' mb="4" children="Users"/>
<DoughnutCart/>
  {/* DOugth graph */}
</Box>



</Grid>

  </Box>
  
  <SideBar />
    </Grid>
  )
}

export default DashBoard