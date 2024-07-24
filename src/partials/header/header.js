import { Toolbar } from "@fluentui/react-components";
import { NavLink } from "react-router-dom";
import { Avatar } from "@fluentui/react-components";
import { PeopleTeamRegular } from "@fluentui/react-icons";
import { Button } from '@fluentui/react-components';
import { makeStyles,  tokens } from "@fluentui/react-components";
import { Switch } from "@fluentui/react-components";
import './header.scss';
import { useDispatch, useSelector } from "react-redux";
import { updateTheme } from "../../utils/themeSlice";
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
        borderBottom: `1px solid ${tokens.colorBrandForeground2}`
    }
});
const Header = () => {
    const classes = useClasses();
    const currentTheme = useSelector((state)=> state.theme);
    const newTheme = currentTheme.theme === 'light'? 'dark' : 'light';
    const dispatch = useDispatch();
    const changeTheme = () => { dispatch(updateTheme(newTheme))}
    return (
        <Toolbar className= {classes.wrapper} as="div">
            <header className="app-header">
                <div className="logo">
                    <Avatar
                    size={48}
                        shape="square"
                        aria-label="square avatar"
                        icon={<PeopleTeamRegular className={classes.iconAccessTime} />}
                    />
                </div>
                <nav className="navigation">
                    <ul>
                        <li><NavLink to='/'>
                            <Button appearance="primary">Home</Button>
                        </NavLink></li>
                        <li><NavLink to='/about'> <Button appearance="primary">About</Button>
                        </NavLink></li>
                        <li><NavLink to='/contact'> <Button appearance="primary">Contact</Button>
                        </NavLink></li>
                        <li>
                        <Switch onChange={changeTheme} label={currentTheme.theme}  />
                        </li>
                    </ul>
                </nav>
            </header>
        </Toolbar>
    )
}

export default Header;