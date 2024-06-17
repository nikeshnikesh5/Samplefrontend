import { Avatar, Button, Container, HStack, Heading, Image, Stack, Text, VStack, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import ChangePhotoBox from "./ChangePhotoBox";




const Profile = () => {
    const user = {
        name:"Nikesh",
        email:"nikejds@gmail.com",
        createdAt:String(new Date().toISOString()),
        role:"noadmin",
        subscription:{
            status: "non active"
        },
        playlist:[
            {
                course:"saad",
                poster:'https://images.pexels.com/photos/8294606/pexels-photo-8294606.jpeg?auto=compress&cs=tinysrgb&w=800'
            }
        ]
    }


   const removeFromPlayListHandler = (id) => {
            console.log(id);
   }

   const changeImageSubmitHandler = (e,image) => {
    
   e.preventDefault()
   console.log(image);
   }

  const {isOpen , onClose , onOpen} = useDisclosure();

    return(
        <Container minH={'95vh'} maxW="container.lg" py="8">
            <Heading  children="Profile" m="8" textTransform={'uppercase'} />
        <Stack justifyContent={"flex-start"} direction={["colunm","row"]} alignItems={"center"}spacing={["8","16"]} padding="8" >
         <VStack>
            <Avatar boxSize={"48"} />

            <Button  onClick={onOpen} colorScheme={"yellow"} variant={"ghost"}>
                Change Photo
            </Button>  
         </VStack>
         <VStack spacing={'4'} alignItems={['center','flex-start']}>
          <HStack>
            <Text children="Name" fontWeight={'bold'}/>
            <Text children={user.name} />
          </HStack>
          <HStack>
            <Text children="Email" fontWeight={'bold'}/>
            <Text children={user.email} />
          </HStack>
          <HStack>
            <Text children="CreatedAt" fontWeight={'bold'}/>
            <Text children={user.createdAt.split("T")[0]} />
          </HStack>
          {user.role !== 'admin' && (
            <HStack>
                <Text children="Subscription" fontWeight={'bold'}/>
               {
                user.subscription.status === "active" ? (
                    <Button color={'yellow.500'} variant="unstyled">Cancel Subscription</Button>
                ):(
                    <Link to="/subscribe">
                          <Button colorScheme={'yellow'}>Subscribe</Button>
                    </Link>
                  
                )
               }
            </HStack>
          )}
            <Stack direction={['column','row']} alignItems={'center'}>
            <Link to="/updateprofile">
            <Button>Update Profile</Button>
            </Link>
            <Link to="/changepassword">
            <Button>Change Password</Button>
            </Link>
            </Stack>

         </VStack>
        </Stack>
        <Heading children="Playlist" size={"md"} my="8"/>
         {
            user.playlist.length > 0 && (
                <Stack direction={['column' , 'row']} alignItems={'center'} flexWrap="wrap"
                p="4"
                >
                {
                    user.playlist.map((element,index)=>(
                        <VStack w="48" m="2" key={element.course}>
                            <Image
                                   boxSize={'full'}
                                   objectFit="contain"
                                   src={element.poster}
                            />
                            <HStack>
                              <Link to={`/course/${element.course}`}>
                               <Button variant={'ghost'} colorScheme="yellow">Watch Now</Button>
                              </Link>  
                              <Button onClick={()=>removeFromPlayListHandler(element.course)}>
                                <RiDeleteBin7Fill/>
                              </Button>
                            </HStack>
                        </VStack>
                    ))
                }
                
                </Stack>
            )
         }
         <ChangePhotoBox isOpen={isOpen} onClose={onClose} changeImageSubmitHandler={changeImageSubmitHandler}/>
        </Container>
    )
}


export default Profile;