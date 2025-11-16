'use client'

import { Box, Text } from '@chakra-ui/react'
import { usePathname } from 'next/navigation'

export default function Breadcrumb() {
  const pathname = usePathname()

  const getBreadcrumbPath = () => {
    const paths = ['HOME', 'ADITYA']
    
    if (pathname === '/') {
      return '/' + paths.join('/')
    }
    
    const pageName = pathname.slice(1).toUpperCase()
    if (pageName) {
      paths.push(pageName)
    }
    
    return '/' + paths.join('/')
  }

  return (
    <Box
      py={2}
      borderBottom="1px solid"
      borderColor="black"
      _dark={{ borderColor: 'white' }}
      bg="white"
      _dark={{ bg: 'black' }}
      fontFamily="mono"
      fontSize="xs"
      color="text.muted"
    >
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }}>
        <Text>
          &gt; {getBreadcrumbPath()}
        </Text>
      </Box>
    </Box>
  )
}

