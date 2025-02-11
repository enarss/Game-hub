import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
} from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { Platforms, error, isLoading } = usePlatforms();
  if(error) return null;
  return (
    <Menu>
      <MenuButton marginLeft='10px' as={Button} rightIcon={<BsChevronBarDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {Platforms.map(platform => <MenuItem key={platform.id}>{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
