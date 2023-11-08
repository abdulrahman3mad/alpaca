import "./Image.css";

interface Props {
  img: FeaturesStyleType
}

const Image: React.FC<Props> = ({ img }) => {
  return (
      <img src={img.path + img.activeStyle + ".png"} alt={img.activeStyle} className={img.type} hidden={img.type === "backgrounds"? true: false}/>
  )
}

export default Image;