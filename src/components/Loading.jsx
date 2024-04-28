import { SpinnerRoundOutlined } from "spinners-react";
const Loading = () => {
  return (
    <>
      <SpinnerRoundOutlined
        className="loading"
        size={500}
        thickness={50}
        speed={100}
        color="#7c77b9"
      />{" "}
      <h2 className="loading">Loading</h2>
    </>
  );
};

export default Loading;
