import { Toolbar } from "@fluentui/react-components";
import { NavLink } from "react-router-dom";
import { Avatar } from "@fluentui/react-components";
import { PeopleTeamRegular } from "@fluentui/react-icons";
import { Button } from '@fluentui/react-components';
import './header.scss';
const Header = () => {
    return (
        <Toolbar >
            <header className="app-header">
                <div className="logo">
                    <Avatar
                        shape="square"
                        aria-label="square avatar"
                        icon={<PeopleTeamRegular />}
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
                    </ul>
                </nav>
            </header>
        </Toolbar>
    )
}

export default Header;