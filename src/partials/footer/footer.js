import { Toolbar , makeStyles, tokens} from "@fluentui/react-components";
const useClasses = makeStyles({
  iconAccessTime: {
      color: tokens.colorPaletteLightGreenForeground2,
      fontSize: "48px",
  },
  iconSend: {
      color: tokens.colorPaletteDarkOrangeForeground2,
      fontSize: "64px",
  },
  wrapper: {
      margin: '0 auto',
      maxWidth: '1200px',
      backgroundColor: tokens.colorBrandBackground2Hover,
      borderTop: `1px solid ${tokens.colorBrandForeground2}`,
      padding: '1em'
  }
});
const Footer = () => {
  const classes = useClasses();
  return (
   <Toolbar as="div" size="small" className={classes.wrapper}>
    @copyright text
   </Toolbar>
  )
}

export default Footer;


//colorNeutralForeground3