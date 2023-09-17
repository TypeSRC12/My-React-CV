import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

const MyCard: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box
      borderRadius={'0px 30px 0px 30px'}
      padding={10}
      bgColor={useColorModeValue('gray.100', 'gray.700')}
      cursor={'pointer'}
      _hover={{
        borderRadius: '20px 20px 20px 20px',
        transform: 'scale(1.1)',
      }}
      transition={'border-radius , all ease 200ms'}
      boxShadow={'outline'}
      margin={'0 0 5px 5px'}
      width={'200px'}
    >
      <Flex
        direction={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        {children}
      </Flex>
    </Box>
  )
}

export default MyCard
