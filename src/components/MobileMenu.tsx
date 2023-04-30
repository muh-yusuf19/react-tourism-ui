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
import ImgLogo from "../images/Logo.png"

const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef<HTMLButtonElement>(null)

  return (
    <>
      <IconButton
        aria-label="Nav Button"
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
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Link to="/">
              <Image
                objectFit={"contain"}
                src={ImgLogo}
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
