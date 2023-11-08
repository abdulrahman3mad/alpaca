import FeatureBtn from '../FeatureButton/FeatureBtn';

interface PropsTypes {
  featuresStyles: FeaturesStyleType[];
  activeFeature: number;
  featureClickHandler:(index: number) => void;
  featureStyleClickHandler:(index: number) => void;
}

const Features:React.FC<PropsTypes> = ({
  featuresStyles, activeFeature, featureClickHandler, featureStyleClickHandler}) => {
  return (
    <div className="features text-start">
      <h2 className="text-uppercase fs-5 mb-4 fw-semibold">Accessorize The Alpaca's</h2>
        <div className="accessories d-flex flex-wrap gap-3">
          {
            featuresStyles.map((feature, index) =>
              <FeatureBtn
                  text={feature.type}
                  active={ index === activeFeature ? true: false }
                  clickHandler={() => featureClickHandler(index)}
                  key={index}
              />
            )
          }
        </div>

        <h2 className="text-uppercase fs-5 mb-4 fw-semibold mt-2 mt-lg-5 pt-5">Style</h2>
        <div className="style d-flex flex-wrap gap-3">
          {
            featuresStyles[activeFeature].styles.map((featureStyle, index) =>
                <FeatureBtn
                  text={featureStyle}
                  active={ featuresStyles[activeFeature].activeStyle === featureStyle ? true: false }
                  clickHandler={() => featureStyleClickHandler(index)}
                  key={index}
                />
            )
          }
        </div>
    </div>
  )
}

export default Features