import styled from 'styled-components'
import Logo from './login-logo.svg'
import backLogo from './../../assets/login-hero.svg'
import { FcGoogle } from 'react-icons/fc'

export const Login = () => {
    return (
        <Container>
            <Nav>
                <a href='/'>
                    <img src={Logo} alt="" />
                </a>
                <div>
                    <Join>Join Now</Join>
                    <SignIn>Sign In</SignIn>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h1>Welcome to your linkedin application</h1>
                    <img src={backLogo} alt="hero logo" />
                </Hero>
                <Form>
                    <Google>
                        <FcGoogle style={{marginRight: '10px'}} />
                        Sign in with Google
                    </Google>
                </Form>
            </Section>
        </Container>
    )
}

const Container = styled.div`
    padding: 0px;
`

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

    & > a {
        width: 135px;
        height: 34px;
        @media (max-width: 768px) {
            padding: 0 5px;
        }
    }
`
const Join = styled.a`
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    color: #333333;
    border-radius: 4px;
    margin: 0 14px;
    cursor: pointer;

    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
    }
`

const SignIn = styled.a`
    font-size: 16px;
    text-decoration: none;
    padding: 10px 15px;
    color: #0a66c2;
    box-shadow: inset 0 0 0 1px #0a66c2;
    border-radius: 20px;
    font-weight: 600;
    transition-duration: 200ms;
    cursor: pointer;
    margin-right: 10px;

    &:hover {
        background-color: rgba(112, 181, 249, 0.15);
    }
`

const Section = styled.section`
    display: flex;
    align-content: start;
    min-height: 700px;
    padding-bottom: 138px;
    padding-top: 40px;
    padding: 60px 0;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1128px;
    align-items: center;
    margin: auto;

    @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
    }
`

const Hero = styled.div`
    width: 100%;
    margin: 10px;
    h1 {
        padding-bottom: 0;
        width: 55%;
        font-size: 56px;
        color: #2977c9;
        font-weight: 200;
        line-height: 70px;
        @media (max-width: 768px) {
            text-align: center;
            font-size: 20px;
            width: 100%;
            line-height: 2;
        }
    }
    img {
        width: 700px;
        height: 670px;
        position: absolute;
        bottom: -2px;
        right: -150px;
        @media (max-width: 768px) {
            top: 230px;
            width: initial;
            position: initial;
            height: initial;
        }
    }
`

const Form = styled.div`
    margin-top: 100px;
    width: 408px;
    @media (max-width: 768px) {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 10px;
    }
`

const Google = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: white;
    width: 40%;
    height: 56px;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
    border-radius: 170px;
    vertical-align: middle;
    z-index: 0;
    transition-duration: 167ms;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    @media (max-width: 768px) {
        position: initial;
        width: 100%;
    }

    &:hover {
        background-color: rgba(207, 207, 207, 0.25);
        color: rgba(0, 0, 0, 0.75);
    }
`