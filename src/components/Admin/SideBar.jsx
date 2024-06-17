import { Button,  VStack } from '@chakra-ui/react'
import {Link, useLocation} from 'react-router-dom'
import React from 'react'
import {RiAddCircleFill, RiDashboardFill, RiEyeFill, RiUser3Fill} from 'react-icons/ri'
import LinkButton from './LinkButton'
const SideBar = () => {
  
  const location = useLocation();

  return (
    <VStack
    spacing={'8'}
    p="16"
    boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
    >
    <LinkButton 
    Icon={RiDashboardFill} 
    text="Dashboard"
     url={'dashboard'}
     active={location.pathname === '/admin/dashboard'}
     />
      <LinkButton 
    Icon={RiAddCircleFill} 
    text="Create Course"
     url={'createcourse'}
     active={location.pathname === '/admin/createcourse'}
     />
      <LinkButton 
    Icon={RiEyeFill} 
    text="Courses"
     url={'courses'}
     active={location.pathname === '/admin/courses'}
     />
      <LinkButton 
    Icon={RiUser3Fill} 
    text="Users"
     url={'users'}
     active={location.pathname === '/admin/users'}
     />
    </VStack>
  )
}

export default SideBar


