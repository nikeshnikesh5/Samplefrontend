import React from 'react'
import {Button,Image,Table,Th,Td,Tbody,HStack, Container, Grid, Heading, Input, Select, VStack, Box, TableContainer, TableCaption, Thead, Tr } from '@chakra-ui/react'
import cursor from "../../../assets/images/cursor.png"

import SideBar from '../SideBar'
import { RiDeleteBin7Fill } from 'react-icons/ri'



const Users = () => {
  
  const user = [{
    _id:"2554632754235",
    name:"Nikesh A",
    role:"admin",
    subscription:{
      status:"active",
    },
    email:"nand@gmail.com"
  }]



  const  updateHandler = () => {
    console.log("updateHandler");
  } 
  
  const deleteButtonHandler = () => {
    console.log("updateButtonHandle");
  }
  
  return (
   <Grid
   css={{
    cursor:`url(${cursor}), default`,
   }}
   minH={'100vh'}
   templateColumns={['1fr','5fr 1fr']}
   >
    <Box p={["0","16"]} overflowX={"auto"}>
     
     <Heading
             textTransform={'uppercase'}
             children="All Users"
             textAlign={['center','left']}
     />
     <TableContainer w={['100vw' ,'full']}>
         <Table variant={'simple'} size="lg">
          <TableCaption>All available users in the databases</TableCaption>
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Role</Th>
              <Th>Subscription</Th>
              <Th isNumeric>Action</Th>
            </Tr>
          </Thead>
           <Tbody>
            {
              user.map((item)=>(
                <Row key={item._id}  updateHandler={updateHandler} deleteButtonHandler={deleteButtonHandler} item={item}/>
              ))
            }
           
           </Tbody>
         </Table>
     </TableContainer>
    </Box>
  <SideBar/>
   </Grid>
  )
}

export default Users


function Row({item,updateHandler,deleteButtonHandler}){
  return(
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>
        {item.subscription.role ===
        'active'?"Active":"Not Active"}
      </Td>
      <Td isNumeric>
     <HStack justifyContent={"flex-end"}>
      <Button variant={"outline"} onClick={()=>updateHandler(item._id)} color="purple.500">
        Change Role
      </Button>
      <Button onClick={()=> deleteButtonHandler(item._id)} color={'purple.600'}>
      <RiDeleteBin7Fill/>
      </Button>
     </HStack>
      </Td>
    </Tr>
  )
}