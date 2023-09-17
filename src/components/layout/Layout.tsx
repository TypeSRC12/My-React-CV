import { FC, ReactNode, useRef } from 'react'
import Header from '@src/components/header/Header.tsx'
import Sidebar from '@src/components/sidebar/Sidebar.tsx'
import { Box, Flex, useDisclosure } from '@chakra-ui/react'
import Footer from '@src/components/footer/Footer.tsx'
import { motion } from 'framer-motion'

const animationConfiguration = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
}
const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const btnRef = useRef<HTMLButtonElement | null>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex direction={'column'} minHeight={'100vh'}>
      <Sidebar btnRef={btnRef} isOpen={isOpen} onClose={onClose} />
      <Header btnRef={btnRef} onOpen={onOpen} />
      <Box
        as={motion.main}
        variants={animationConfiguration}
        initial="initial"
        animate="animate"
        exit="exit"
        // @ts-ignore
        transition={{ duration: 1 }}
        marginTop={'100px'}
      >
        {children}
      </Box>
      <Footer />
    </Flex>
  )
}

export default Layout
