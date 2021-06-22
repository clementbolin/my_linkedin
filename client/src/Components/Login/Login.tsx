import styled from 'styled-components'
import Logo from './login-logo.svg'

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
`