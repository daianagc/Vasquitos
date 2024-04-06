import { CSSProperties } from "react";
import { BeatLoader } from "react-spinners";
import "./Spinner.css";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export const Spinner = ({
  color = "#f22b29",
  loading = true,
  size = 35,
  backgroundColor = "",
}) => {
  return (
    <div className="sweet-loading" style={{ backgroundColor }}>
      <BeatLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
