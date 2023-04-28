import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Image,
  useDisclosure,
} from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import { Link } from "react-router-dom"
import LinkList from "./LinkList"

const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <IconButton
        alt="Menu Button"
        ref={btnRef}
        onClick={onOpen}
        icon={<FontAwesomeIcon icon={faBars} />}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={["xs"]}
        scrollBehavior={"inside"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Link to="/">
              <Image
                objectFit={"contain"}
                src={`./logo.png`}
                h={["10", "14"]}
              />
            </Link>
          </DrawerHeader>
          <DrawerBody>
            <LinkList />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MobileMenu
