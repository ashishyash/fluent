import { Button, Card, CardFooter, CardHeader, Title1, tokens } from "@fluentui/react-components";
import './appcard.scss';
const AppCard = (props) => {
return(
    <div style={{width:'26em'}}>
        <Card style={{backgroundColor: tokens.colorNeutralBackground1Selected, height: '100%', justifyContent: 'space-between'}}>
            <CardHeader header={<Title1>{props.info.sortingDisplayName}</Title1>}/>
            <p>{props.info.shortDescription}</p>
            <CardFooter>
                <Button appearance="primary">Learn More</Button>
                <Button appearance="primary">Documentation</Button>
            </CardFooter>
        </Card>
    </div>
)
}
export default AppCard;