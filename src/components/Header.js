import React from "react";
import Nav from "./partials/Nav";

import { useDisplayData } from './hooks/useDisplayData';

const Header = () => {
  const { hideModal } = useDisplayData();
  return (
    <header onClick={hideModal}>
      <Nav />
    </header>
  );
}

export default Header;
