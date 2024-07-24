import { Outlet } from "react-router-dom";
import Footer from "../partials/footer/footer";
import Header from "../partials/header/header";
import { tokens, makeStyles, webLightTheme } from "@fluentui/react-components";
import { FluentProvider, webDarkTheme } from '@fluentui/react-components';
import { useSelector } from "react-redux";
const useClasses = makeStyles({
  mainWrapper: {
      padding: tokens.spacingHorizontalXL,
      minHeight: 'calc(100vh - 60px)',
      maxWidth: '1200px',
      margin: '0 auto',
      backgroundColor: tokens.colorBrandBackground2Hover
  }
});
const customDarkTheme = {
  ...webDarkTheme,
  fontFamilyBase: '"Roboto", sans-serif',
  fontSizeBase300: '16px'
}
const customLightTheme = {
  ...webLightTheme,
  fontFamilyBase: '"Roboto", sans-serif',
  fontSizeBase300: '16px'
}

const Layout = () => {
  const currentTheme = useSelector((state)=> state.theme);
  console.log(currentTheme.theme);
  const myTheme = currentTheme.theme === 'light'? customLightTheme : customDarkTheme;
  const classes = useClasses();
  return (
    <FluentProvider theme={myTheme}>
        <Header/>
        <div className={classes.mainWrapper}>
          <Outlet/>
        </div>
        <Footer/>
    </FluentProvider>
  )
}
export default Layout;