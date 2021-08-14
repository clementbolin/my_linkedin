import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { UserState } from '../../reducers/userReducer'
import { LeftSideComponent } from './LeftSide'
import { MainComponent } from './MainSide'
import { RightSideComponent } from './RightSide'

export const Home = () => {
    const user = useSelector<UserState, UserState["user"]>((state) => state.user)

    return (
        <Container>
            {
                !user && <Redirect to='/'/>
            }
            <Layout>
                <LeftSideComponent user={user} />
                <MainComponent />
                <RightSideComponent />
            </Layout>
        </Container>
    )
}

const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding-top: 37px;
    max-width: 1128px;
`

const Layout = styled.div`
    display: grid;
    grid-template-areas: "leftside main rightside";
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
    column-gap: 25px;
    row-gap: 25px;
    margin: 25px 0;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 0 5px;
    }
`