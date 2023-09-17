import { FC, MutableRefObject } from 'react'
import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { MdNightlightRound, MdSunny } from 'react-icons/md'
import { HiMenu } from 'react-icons/hi'
import { AnimatePresence, motion } from 'framer-motion'

const Header: FC<{
  btnRef: MutableRefObject<HTMLButtonElement | null>
  onOpen: () => void
}> = ({ btnRef, onOpen }) => {
  const { toggleColorMode } = useColorMode()

  return (
    <Box
      as={'header'}
      bgColor={useColorModeValue('rgba(255, 255, 255, 0.25)', '#1A202C80')}
      position={'fixed'}
      top={0}
      width={'100%'}
      zIndex={2}
      backdropFilter={'auto'}
      backdropBlur={'10px'}
    >
      <Container padding={'10px'} maxW={'container.sm'}>
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <Heading size={'lg'}>Vrezh Hovsepyan</Heading>
          <ButtonGroup>
            <AnimatePresence mode={'wait'} initial={false}>
              <motion.div
                style={{ display: 'inline-block' }}
                key={useColorModeValue('light', 'dark')}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                // @ts-ignore
                transition={{ duration: 0.2 }}
              >
                <IconButton
                  aria-label={'color switcher'}
                  onClick={toggleColorMode}
                  icon={useColorModeValue(<MdSunny />, <MdNightlightRound />)}
                />
              </motion.div>
            </AnimatePresence>
            <IconButton aria-label={'drawer'} ref={btnRef} onClick={onOpen}>
              <HiMenu />
            </IconButton>
          </ButtonGroup>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
