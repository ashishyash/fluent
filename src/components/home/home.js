import useFetch from "../../utils/useFetch";
import { Title3,  tokens, makeStyles, typographyStyles, mergeClasses } from "@fluentui/react-components";
import { FontSizes } from '@fluentui/theme';
import AppCard from "../../partials/appcard/appcard";
import { baseUrlUI, baseUrlBackend , apiUrls} from "../../utils/constant";
const useClasses = makeStyles({
  text: typographyStyles.largeTitle,
  customFont: {
    fontFamily: '"Playwrite FR Moderne", cursive'
  }
})
const Home = () => {
  const marketplaceData = useFetch(`${baseUrlUI}${apiUrls.marketplaceData}`);
  const allApis = useFetch(`${baseUrlBackend}${apiUrls.allApis}`);
  const allApps = useFetch(`${baseUrlBackend}${apiUrls.allApps}`);
  const classes = useClasses();
  return (

    <>
    <h1 className={mergeClasses(classes.text, classes.customFont)}>Marketplace</h1>
    <h1 className={classes.text}>Potential is Open</h1>
      <div style={{marginBottom: tokens.spacingVerticalXL}}>
        <Title3 style={{ color: tokens.colorBrandForegroundLink }}>{marketplaceData?.marketplace}</Title3>
      </div>
      <div style={{marginBottom: tokens.spacingVerticalXL}}>
        <Title3>{marketplaceData?.pershing}</Title3>
      </div>
      <div className="power" style={{marginBottom: tokens.spacingVerticalXL}}>
        {marketplaceData?.powering.map((text) => <div className="power-item" key={text} style={{ fontSize: FontSizes.size24, lineHeight: '24px' }}>{text}</div>)}
      </div>
      <div>
      </div>
      <div className="card-wrapper" style={{marginTop: tokens.spacingVerticalXL}}>
        {allApps?.data.apps?.map((data) => <AppCard key={data.id} info={data}/>)}
      </div>
      <div className="card-wrapper" style={{marginTop: tokens.spacingVerticalXL}}>
        {allApis?.data.apis?.map((data) => <AppCard key={data.id} info={data}/>)}
      </div>
    </>

  )
}

export default Home;