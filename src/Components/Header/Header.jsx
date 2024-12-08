import { useState } from "react";
import HeaderTopBar from "./HeaderTopBar";
import HeaderMiddleBar from "./HeaderMiddleBar";
import HeaderBottomBar from "./HeaderBottomBar";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <HeaderTopBar />
      <HeaderMiddleBar isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <HeaderBottomBar />
    </>
  );
}

export default Header;
