import styled from 'styled-components'
import LogoLinkedin from './../../assets/home-logo.svg'
import { AiOutlineSearch } from 'react-icons/ai'

export const Header = () => {
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
    padding: 6px 4px;
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
            width: 210px;
            height: 34px;
            padding: 0 8px 0 40px;
            line-height: 1.75;
            font-weight: 400;
            font-size: 14px;
            vertical-align: text-top;
        }
    }
`

const SearchIcon = styled.div`
    position: absolute;
    z-index: 1;
    top: 10px;
    left: 10px;
`

const NavIcon = styled.div`
`