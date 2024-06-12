import useFetch from "../../utils/useFetch"
import useInnerHtml from "../../utils/useInnerHtml";

const About = () => {
  const aboutData = useFetch('https://marketplace.bnymellon.com/public/mp/prod/enAboutUsCms.json');
  const aboutHtml = useInnerHtml(aboutData?.block?.text);
  return (
    <div>{aboutHtml}</div>
  )
}

export default About