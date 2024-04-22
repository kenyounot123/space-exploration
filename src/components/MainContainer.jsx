import { Stars, useBounds, Bounds } from "@react-three/drei";
import { Perf } from "r3f-perf";
import CameraPositionLog from "../helpers/CameraPositionLog";
import Sun from "./Sun";
import Planet from "./Planet";
import Data from "../helpers/data";
const MainContainer = ({ handleClick, planetClicked }) => {
  return (
    <>
      <Perf />
      <CameraPositionLog event="mousedown" />
      <Stars />
      <Bounds fit clip observe margin={1.7}>
        <SelectToZoom>
          <Sun />
          {Data.map((planet) => (
            <Planet
              key={planet.id}
              planetClicked={planetClicked}
              handleClick={handleClick}
              data={planet}
            />
          ))}
          {/* <Earth planetClicked={planetClicked} handleClick={handleClick} />
          <Mars /> */}
        </SelectToZoom>
      </Bounds>
    </>
  );
};

function SelectToZoom({ children }) {
  const bounds = useBounds();
  return (
    <group
      onClick={(e) => (e.stopPropagation(), bounds.refresh(e.object).fit())}
      onPointerMissed={(e) => {
        e.button === 0 && bounds.refresh();
      }}
    >
      {children}
    </group>
  );
}
export default MainContainer;
