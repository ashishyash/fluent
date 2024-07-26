import { Outlet } from "react-router-dom";
import Footer from "../partials/footer/footer";
import Header from "../partials/header/header";
import { tokens, makeStyles, webLightTheme } from "@fluentui/react-components";
import { FluentProvider, webDarkTheme } from '@fluentui/react-components';
import { useSelector } from "react-redux";
import { baseUrlBackend, apiUrls } from "../../src/utils/constant";
import { useDispatch } from "react-redux";
import { updateApis } from "../utils/apiSlice";
import { updateApps } from "../utils/appSlice";
import useFetch from "../utils/useFetch";
import { useEffect } from "react";
const useClasses = makeStyles({
  mainWrapper: {
    padding: tokens.spacingHorizontalXL,
    minHeight: 'calc(100vh - 142px)',
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
  const currentTheme = useSelector((state) => state.theme);
  const allApis = useFetch(`${baseUrlBackend}${apiUrls.allApis}`);
  const allApps = useFetch(`${baseUrlBackend}${apiUrls.allApps}`);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateApps(allApps?.data?.apps));
    dispatch(updateApis(allApis?.data?.apis));
  }, [allApis, allApps, dispatch]);

  console.log('layout rendered');
  const myTheme = currentTheme.theme === 'light' ? customLightTheme : customDarkTheme;
  const classes = useClasses();
  return (
    <FluentProvider theme={myTheme}>
      <Header />
      <div className={classes.mainWrapper}>
        <Outlet />
      </div>
      <Footer />
    </FluentProvider>
  )
}
export default Layout;