import styled from 'styled-components'
import LogoLinkedin from './../../assets/home-logo.svg'
import UserLogo from './../../assets/user.svg'
import { AiOutlineSearch, AiFillHome, AiFillMessage } from 'react-icons/ai'
import { BsPeopleFill, BsGrid3X3Gap } from 'react-icons/bs'
import { RiSuitcaseFill } from 'react-icons/ri'
import { MdNotifications } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { UserState } from '../../reducers/userReducer'

type Props = {
    signOutAPI: () => void
}

export const Header: React.FC<Props> = (props) => {
    const user = useSelector<UserState, UserState["user"]>((state) => state.user)

    return (
        <Container>
            <Content>
                <Logo>
                    <a href='/home'>
                        <img src={LogoLinkedin} alt="linkedin logo" />
                    </a>
                </Logo>
                <Search>
                    <div>
                        <input type="text" placeholder="Search" />
                    </div>
                    <SearchIcon>
                        <AiOutlineSearch />
                    </SearchIcon>
                </Search>
                <NavIcon>
                    <ContentItem>
                        <NavItem className='active'>
                            <a href='/home'>
                                <AiFillHome />
                                <span>Home</span>
                            </a>
                        </NavItem>
                        <NavItem>
                            <a href='/home'>
                                <BsPeopleFill />
                                <span>Network</span>
                            </a>
                        </NavItem>
                        <NavItem>
                            <a href='/home'>
                                <RiSuitcaseFill />
                                <span>Jobs</span>
                            </a>
                        </NavItem>
                        <NavItem>
                            <a href='/home'>
                                <AiFillMessage />
                                <span>Messaging</span>
                            </a>
                        </NavItem>
                        <NavItem>
                            <a href='/home'>
                                <MdNotifications />
                                <span>Notifications</span>
                            </a>
                        </NavItem>
                        <User>
                            <a href="/home">
                                {user && user.photoURL ? <img src={user.photoURL} alt="usr logo" /> : <img src={UserLogo} alt="usr logo" />}
                                {user && user.displayName ? <span>{user.displayName}</span> : <span>Me</span>}
                            </a>
                            <SignOut onClick={() => props.signOutAPI()}>
                                <a href='/'>
                                    Sign Out
                                </a>
                            </SignOut>
                        </User>
                        <Work>
                            <a href="/home">
                                <BsGrid3X3Gap />
                                <span>Products</span>
                            </a>
                        </Work>
                    </ContentItem>
                </NavIcon>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    background-color: white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    width: 100%;
    left: 0;
    padding: 0 2px;
    position: fixed;
    top: 0;
    z-index: 100;
`

const Content = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    min-height: 100%;
    max-width: 1120px;
    padding: 0px 3px;
`

const Logo = styled.span`
    margin-right: 0px;
    font-size: 0px;
    cursor: pointer; 
`

const Search = styled.div`
    opacity: 1;
    flex-grow: 1;
    position: relative;
    & > div {
        max-width: 200px;
        border-radius: 10px;
        padding: 0 10px;
        input {
            border: none;
            box-shadow: none;
            background-color: #eef3f8;
            border-radius: 2px;
            color: rgba(0, 0, 0, 0.9);
            width: 260px;
            height: 34px;
            padding: 0 8px 0 40px;
            line-height: 1.75;
            font-weight: 400;
            font-size: 14px;
            vertical-align: text-top;
        }
    }
    @media (max-width: 910px) {
        padding: 8px;
    }
`

const SearchIcon = styled.div`
    position: absolute;
    z-index: 1;
    top: 10px;
    left: 10px;
    @media (max-width: 910px) {
        top: 17px;
        left: 19px;
    }
`

const NavIcon = styled.nav`
    margin-left: auto;
    display: block;
    @media (max-width: 910px) {
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: white;
        position: fixed;
    }
`

const ContentItem = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    list-style-type: none;

    .active {
        span:after {
            content: "";
            transform: scaleX(1);
            border-bottom: 2px solid var(--white, #fff);
            bottom: 0;
            left: 0;
            position: absolute;
            transition: transform 0.2s ease-in-out;
            width: 100%;
            border-color: rgba(0, 0, 0, 0.9);
        }
    }
`

const NavItem = styled.li`
    display: flex;
    align-items: center;
    padding-top: 3px;
    a {
        align-items: center;
        background: transparent;
        display: flex;
        flex-direction: column;
        font-size: 22px;
        font-weight: 400;
        justify-content: center;
        line-height: 1.8;
        min-height: 42px;
        min-width: 80px;
        position: relative;
        text-decoration: none;
        color: black;
    }

    @media (max-width: 768px) {
      min-width: 90px;
    }

    span {
        font-size: 11px;
        color: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &:hover, &:active {
        a {
            span {
                color: rgba(0, 0, 0, 0.9);
            }
        }
    }
`

const SignOut = styled.div`
    position: absolute;
    top: 45px;
    background: white;
    border-radius: 0 0 5px 5px;
    width: 100px;
    height: 40px;
    font-size: 16px;
    transition-duration: 167ms;
    text-align: center;
    display: none;
`

const User = styled(NavItem)`
    a > svg {
        width: 24px;
        border-radius: 50%;
    }

    a > img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
    }

    &:hover {
        ${SignOut} {
            align-items: center;
            display: flex;
            justify-content: center;
        }
    }
`

const Work = styled(User)`
    a > svg {
        border-radius: initial;
    }
    border-left: 1px solid rgba(0, 0, 0, 0.08);
`