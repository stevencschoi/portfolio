import { useContext } from "react";
import { MyContext } from "../components/MyContext";

const useMyContext = () => {
  const [state, setState] = useContext(MyContext);
};

export { useMyContext };
