import { FC } from 'react'
import { Divider, Flex, Text, useColorModeValue } from '@chakra-ui/react'

const Footer: FC = () => {
  return (
    <>
      <Divider />
      <Flex
        justifyContent={'center'}
        alignItems={'center'}
        paddingTop={'20px'}
        paddingBottom={'30px'}
      >
        <Text color={useColorModeValue('blackAlpha.700', 'whiteAlpha.700')}>
          Website is created by Vrezh Hovsepyan
        </Text>
      </Flex>
    </>
  )
}

export default Footer
