import { Toolbar } from "@fluentui/react-components";
import { NavLink } from "react-router-dom";
import { Avatar } from "@fluentui/react-components";
import { PeopleTeamRegular } from "@fluentui/react-icons";
const Header = () => {
    return (
        <Toolbar appearance="primary">
            <header>
                <div className="logo">
                    <Avatar
                        shape="square"
                        aria-label="square avatar"
                        icon={<PeopleTeamRegular />}
                    />
                </div>
                <nav>
                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                </nav>
            </header>
        </Toolbar>
    )
}

export default Header;