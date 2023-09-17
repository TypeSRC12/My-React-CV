import { FC } from 'react'
import { Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'

const AboutCard: FC<{ title: string; content: string }> = ({
  title,
  content,
}) => {
  return (
    <>
      <Flex justifyContent={'flex-start'} width={'100%'} direction={'column'}>
        <Heading
          textDecoration={'underline'}
          lineHeight={'1.2'}
          textUnderlineOffset={'6px'}
        >
          {title}
        </Heading>
      </Flex>
      <Text
        maxW={'720px'}
        textColor={useColorModeValue('gray.600', 'gray.200')}
        textAlign={'center'}
        marginTop={'20px'}
      >
        {content}
      </Text>
    </>
  )
}

export default AboutCard
