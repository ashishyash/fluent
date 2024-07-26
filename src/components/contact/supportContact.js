import { makeStyles, Title2 } from "@fluentui/react-components";
import useInnerHtml from "../../utils/useInnerHtml";
const useClasses = makeStyles({
    contactWrapper: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    }
   })
const SupportContact = ({data})=>{
   const classes = useClasses();
    return(
        <>
        <h2><Title2>{data?.name}</Title2></h2>
        <div className={classes.contactWrapper}>
            {useInnerHtml(data?.text)}
        </div>
        </>
    )
}
export default SupportContact;