import useFetch from "../../utils/useFetch";
import { Title1, Title2,  tokens } from "@fluentui/react-components";
import { FontSizes } from '@fluentui/theme';
import AppCard from "../../partials/appcard/appcard";
const Home = () => {
  const marketplaceData = useFetch('https://marketplace.bnymellon.com/app/assets/staticdata/marketplace.json');
  const allApps = useFetch('https://marketplace.bnymellon.com/public/mp/prod/app.json');

  return (

    <>
      <div style={{marginBottom: tokens.spacingVerticalXL}}>
        <Title1 style={{ color: tokens.colorBrandForegroundLink }}>{marketplaceData?.marketplace}</Title1>
      </div>
      <div style={{marginBottom: tokens.spacingVerticalXL}}>
        <Title2>{marketplaceData?.pershing}</Title2>
      </div>
      <div className="power" style={{marginBottom: tokens.spacingVerticalXL}}>
        {marketplaceData?.powering.map((text) => <div className="power-item" key={text} style={{ fontSize: FontSizes.size24, lineHeight: '24px' }}>{text}</div>)}
      </div>
      <div>

      </div>
      <div className="card-wrapper" style={{marginTop: tokens.spacingVerticalXL}}>
        {allApps?.data.apps?.map((data) => <AppCard key={data.id} info={data}/>)}
      </div>
    </>

  )
}

export default Home;