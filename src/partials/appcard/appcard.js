import { Button, Card, CardFooter, CardHeader, Title2, tokens } from "@fluentui/react-components";
import useInnerHtml from "../../utils/useInnerHtml";
import './appcard.scss';
import { Link } from "react-router-dom";
const AppCard = (props) => {
    const description = useInnerHtml(props.info.shortDescription);
    return (
        <div style={{ width: '23.5em' }}>
            <Card style={{ backgroundColor: tokens.colorNeutralBackground1Selected, height: '100%', justifyContent: 'space-between' }}>
                <CardHeader header={<Title2>{props.info.sortingDisplayName}</Title2>} />
                <div style={{ lineHeight: tokens.lineHeightBase500 }}>{description}</div>
                <CardFooter>
                    <Link to={`apidetail/${props.type}/${props.info.internalName.replace(/\s/g, '')}`} ><Button shape="circular" appearance="primary">Learn More</Button></Link>
                    <Button shape="circular" appearance="primary">Documentation</Button>
                </CardFooter>
            </Card>
        </div>
    )
}
export default AppCard;