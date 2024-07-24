import useFetch from "../../utils/useFetch"
import useInnerHtml from "../../utils/useInnerHtml";
import {Text} from '@fluentui/react-components'
import './about.scss';
import { apiUrls, baseUrlBackend } from "../../utils/constant";
const About = () => {
  const aboutData = useFetch(`${baseUrlBackend}${apiUrls.about}`);
  const aboutHtml = useInnerHtml(aboutData?.block?.text);
  return (
    <div>
      <Text> {aboutHtml}</Text></div>
  )
}

export default About