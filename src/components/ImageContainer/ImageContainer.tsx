import Image from "../Image/";
import "./ImageContainer.css";

const imgsPath: string = "images/alpaca";

interface Props {
  imgs: FeaturesStyleType[];
  background: string;
}

const ImageContainer: React.FC<Props> = ({ imgs, background }) => {
  return (
    <div className="text-start imgsContainer">
      <div className="background" style={{backgroundImage: `url(${imgsPath}/backgrounds/${background}.png)`}}>
        {
          imgs.map((img)=>{
            return <Image img={img}/>
          })
        }
      </div>
    </div>
  )
}

export default ImageContainer;