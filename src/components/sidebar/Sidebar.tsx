import { FC, MutableRefObject } from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
} from '@chakra-ui/react'

const Sidebar: FC<{
  btnRef: MutableRefObject<HTMLButtonElement | null>
  isOpen: boolean
  onClose: () => void
}> = ({ btnRef, isOpen, onClose }) => {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <Heading size={'md'}>
              Пока что тут нечего нет но я собираюсь добавить страницу для моих
              постов
            </Heading>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Sidebar
