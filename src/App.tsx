import { useState } from 'react';

import Header from './components/Header/Header';
import ImageContainer from './components/ImageContainer/ImageContainer';
import Features from './components/Features';
import RandomButton from './components/RandomButton';
import DownloadButton from './components/DownloadButton';
import featuresStylesData from './data/featureStylesData';
import combineImagesAndDownload from './lib/combineImageAndDownload';
import Footer from './components/Footer';

function App() {
  const [featuresStyles, setFeaturesStyles] = useState<FeaturesStyleType[]>(featuresStylesData)
  const [activeFeature, setActiveFeature] = useState<number>(0);

  const FeatureClickHandler = (index: number): void => {
    setActiveFeature(index);
  }

  const downloadHandler = (): void => {
    combineImagesAndDownload();
  }

  const randomHandler = (): void => {
    let featuresStylesTmp = featuresStyles.map((featureStyle, index) => {
        featureStyle.activeStyle = featureStyle.styles[Math.floor(Math.random() * featureStyle.styles.length)]
        return featureStyle
    })

    setFeaturesStyles(featuresStylesTmp);
  }

  const FeatureStyleClickHandler = (index: number): void => {
    const featuresStyleTmp = JSON.parse(JSON.stringify(featuresStyles));

    setFeaturesStyles((prev) => {
       featuresStyleTmp[activeFeature].activeStyle = featuresStyleTmp[activeFeature].styles[index];
       return featuresStyleTmp;
    });
  }

  return (
    <div className="app">
      <div className="container-lg p-lg-5 pt-5 text-center">
        <Header />
        <main className='mt-4'>
          <div className="row justify-content-evenly">
            <div className="col-md-6 mb-5 mb-md-0">
              <ImageContainer imgs={featuresStyles} background={featuresStyles.at(0)?.activeStyle!}/>
              <div className='d-flex justify-content-center gap-5'>
                <RandomButton randomHandler={ randomHandler } />
                <DownloadButton downloadHandler={ downloadHandler } />
              </div>
            </div>

            {/* Features Buttons  */}
            <div className="col-md-4 offset-md-1 offset-lg-2">
              <Features
                featuresStyles={featuresStyles}
                activeFeature={activeFeature}
                featureClickHandler={FeatureClickHandler}
                featureStyleClickHandler={FeatureStyleClickHandler}
              />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
