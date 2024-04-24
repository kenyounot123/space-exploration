import { Stars, useBounds, Bounds } from "@react-three/drei";
// import { Perf } from "r3f-perf";
import Planet from "./Planet";
import Data from "../helpers/data";
const MainContainer = ({ handleClick }) => {
  return (
    <>
      {/* <Perf /> */}
      <Stars />
      <Bounds fit clip observe margin={1.5}>
        <SelectToZoom>
          {Data.map((planet) => (
            <Planet key={planet.id} handleClick={handleClick} data={planet} />
          ))}
        </SelectToZoom>
      </Bounds>
    </>
  );
};

function SelectToZoom({ children }) {
  const bounds = useBounds();
  return (
    <group
      onClick={(e) => (
        e.stopPropagation(), e.delta <= 2 && bounds.refresh(e.object).fit()
      )}
      onPointerMissed={(e) => {
        e.button === 0 && bounds.refresh().fit();
      }}
    >
      {children}
    </group>
  );
}
export default MainContainer;
