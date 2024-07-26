import { TabList, Tab, Subtitle1, tokens,  } from "@fluentui/react-components";
import { apiUrls, baseUrlBackend } from "../../utils/constant"
import useFetch from "../../utils/useFetch"
import { useState } from "react";
import GettingStartaed from "./gettingStarted";
import SupportContact from "./supportContact";
import Faq from './faq';
const Contact = (props) => {
  const gettingStartedData = useFetch(`${baseUrlBackend}${apiUrls.gettingStarted}`);
  const support = useFetch(`${baseUrlBackend}${apiUrls.support}`);
  const supportContact = useFetch(`${baseUrlBackend}${apiUrls.contact}`);
  const [selectedTab, setSelectedTab] = useState('gettingStarted');
  const tabChange = (event, data) => {
    setSelectedTab(data.value);
  }
  return (
    <>
    <TabList {...props}  selectedValue={selectedTab} onTabSelect={tabChange}>
      <Tab value="gettingStarted"><Subtitle1>Getting Started</Subtitle1></Tab>
      <Tab value="faq"><Subtitle1>FAQ</Subtitle1></Tab>
      <Tab value="contact"><Subtitle1>Contact</Subtitle1></Tab>
    </TabList>
    <div style={{padding: tokens.spacingVerticalL}}>
      {selectedTab === 'gettingStarted' && <GettingStartaed data={gettingStartedData?.data}/>}
      {selectedTab === 'faq' && <Faq data={support?.data}/>}
      {selectedTab === 'contact' && <SupportContact data={supportContact?.block}/>}
    </div>
    </>
  )
}

export default Contact