import "./FeatureBtn.css";
import { MouseEvent } from "react";

interface PropsTypes {
  text: string;
  active?: boolean;
  clickHandler: (e: MouseEvent) => void;
}

const FeatureBtn: React.FC<PropsTypes> = ({ text, active, clickHandler }) => {
  let classNames = "feature-btn btn rounded-pill px-4 py-2  border-secondary text-capitalize";
  classNames += active ? " active": "";

  return (
    <button type="button" className={classNames} onClick={clickHandler}>
      { text }
    </button>
  )
}

export default FeatureBtn;