import { FC } from 'react'
import {
  Image,
  Box,
  Container,
  Flex,
  Wrap,
  WrapItem,
  Heading,
} from '@chakra-ui/react'
import Layout from '@src/components/layout/Layout.tsx'
import MyCard from '@src/components/ui/card/MyCard.tsx'
import { aboutCardItems, cardItems } from '@src/utils/lists.ts'
import AboutCard from '@src/components/ui/about-card/AboutCard.tsx'

const HomePage: FC = () => {
  return (
    <Layout>
      <Box as={'section'}>
        <Container maxW={'container.sm'} padding={'20px'}>
          <Flex direction={'column'} alignItems={'center'}>
            <Image
              borderRadius={'full'}
              boxSize={'250px'}
              src={'/assets/avatar2.jpg'}
              alt={'my image'}
            />
            {aboutCardItems.map((item) => (
              <AboutCard
                key={item.id}
                title={item.title}
                content={item.content}
              />
            ))}
          </Flex>

          <Wrap justify={'center'} spacing={30} padding={10}>
            {cardItems.map((item) => (
              <WrapItem key={item.id}>
                <MyCard>
                  <item.icon size={50} />
                  <Heading size={'sm'}>{item.text}</Heading>
                </MyCard>
              </WrapItem>
            ))}
          </Wrap>
        </Container>
      </Box>
    </Layout>
  )
}

export default HomePage
