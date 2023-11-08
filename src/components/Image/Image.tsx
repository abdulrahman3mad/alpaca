import "./Image.css";

const imgsPath: string = "images/alpaca";

interface Props {
  imgs: FeaturesStyleType[];
  background: string;
}

const Image: React.FC<Props> = ({ imgs, background }) => {
  return (
    <div className="text-start imgsContainer">
      <div className="background" style={{backgroundImage: `url(${imgsPath}/backgrounds/${background}.png)`}}>
        {
          imgs.map((img)=>{
            return <img src={imgsPath + "/" + img.type + "/" + img.activeStyle + ".png"} alt={img.activeStyle} className={img.type} hidden={img.type === "backgrounds"? true: false}/>
          })
        }
      </div>
    </div>
  )
}

export default Image;