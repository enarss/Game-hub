import { HStack, Text } from "@chakra-ui/react"
import PlatformSelector from "./PlatformSelector"

const Heading = () => {
    return (
    <>
    <Text fontSize='5xl' fontWeight='bold' marginY={5} paddingLeft='10px'>Games</Text>
    <HStack paddingLeft='5px' paddingBottom={5}>
        <PlatformSelector />
    </HStack>
    </>
    )
}

export default Heading