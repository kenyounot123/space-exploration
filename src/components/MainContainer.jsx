import { Stars } from "@react-three/drei";
import Sun from "./Sun";
import Earth from "./Earth";
import { Perf } from "r3f-perf";

const MainContainer = () => {
  return (
    <>
      <Perf />
      <Stars />
      <Sun />
      <Earth />
    </>
  );
};
export default MainContainer;
