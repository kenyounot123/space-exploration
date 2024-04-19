import { Stars } from "@react-three/drei";
import { Perf } from "r3f-perf";
import CameraPositionLog from "../helpers/CameraPositionLog";
import Sun from "./Sun";
import Earth from "./Earth";
import Mars from "./Mars";
const MainContainer = ({ handleClick, planetClicked }) => {
  return (
    <>
      <Perf />
      <CameraPositionLog event="mousedown" />
      <Stars />
      <Sun />
      <Earth planetClicked={planetClicked} handleClick={handleClick} />
      <Mars />
    </>
  );
};
export default MainContainer;
