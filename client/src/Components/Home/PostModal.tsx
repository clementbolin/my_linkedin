import styled from "styled-components";
import { AiOutlineClose } from 'react-icons/ai'
import { useSelector } from "react-redux";
import { UserState } from "../../reducers/userReducer";
import PictureUsr from './../../assets/user.svg'
import { ImYoutube } from 'react-icons/im'
import { GrGallery } from 'react-icons/gr'
import { RiShareForward2Fill } from 'react-icons/ri'
import { useState } from "react";

type Props = {
    showModal: string
    handleClick: (e: any) => void
}

export const PostModal: React.FC<Props> = (props) => {
    const [editorText, setEditorText] = useState<string>("")
    const user = useSelector<UserState, UserState['user']>((state) => state.user)

    const reset = (e: any) => {
        setEditorText("")
        props.handleClick(e)
    }
    return (
        <>
            {
                props.showModal === 'open' &&
            <Container>
                <Content>
                    <Header>
                        <h2>Create a post</h2>
                        <button onClick={reset}>
                            <AiOutlineClose />
                        </button>
                    </Header>
                    <ShareContent>
                        <UserInfo>
                            {user && user.photoURL ? 
                            <img src={user.photoURL} alt="photoURL" />
                                :
                            <img src={PictureUsr} alt="photoURL" />
                            }
                            {user && user.displayName ? 
                            <span>{user.displayName}</span>
                                :
                            <span>Me</span>
                            }                        
                        </UserInfo>
                        <Editor>
                            <textarea value={editorText}
                                onChange={(e) => setEditorText(e.target.value)} 
                                placeholder="What do you want to talk about"
                                autoFocus={true}
                            />
                        </Editor>
                    </ShareContent>
                    <ShareCreation>
                        <AttachAssets>
                            <AssetButton>
                                <GrGallery />
                            </AssetButton>
                            <AssetButton>
                                <ImYoutube />
                            </AssetButton>
                        </AttachAssets>
                        <ShareComment>
                            <AssetButton>
                                <RiShareForward2Fill />
                                Send
                            </AssetButton>
                        </ShareComment>
                        <PostButton>
                            Post
                        </PostButton>
                    </ShareCreation>
                </Content>
            </Container>
            }
        </>
    )
}

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    color: black;
    background-color: rgba(0, 0, 0, 0.8 );
    animation: fadeIn 0.3s;
`

const Content = styled.div`
    width: 100%;
    max-width: 552px;
    background-color: white;
    max-height: 90%;
    overflow: initial;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    top: 32px;
    margin: 0 auto;
`

const Header = styled.div`
    display: block;
    padding: 16px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    font-size: 16px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
        height: 40px;
        width: 40px;
        min-width: auto;
        color: rgba(0, 0, 0, 0.5)
        svg {
            pointer-events: none;
        }
    }
`

const ShareContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow: auto;
    vertical-align: baseline;
    background: transparent;
    padding: 8px 12px;
`

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 24px;
    svg,
    img {
        width: 48px;
        height: 48px;
        background-clip: content-box;
        border: 2px solid transparent;
        border-radius: 50%;
    }
    span {
        font-weight: 600;
        font-size: 16px;
        line-height: 1.5;
        margin-left: 5px;
    }
`

const ShareCreation = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 24px 12px 16px;
`

const AssetButton = styled.button`
    display: flex;
    align-items: center;
    height: 40px;
    min-height: auto;
    color: rgba(0, 0, 0, 0.5);
`

const AttachAssets = styled.div`
    display: flex;
    align-items: center;
    padding-right: 8px;
    ${AssetButton} {
        width: 40px;
    }
`

const ShareComment = styled.div`
    padding-left: 8px;
    margin-right: auto;
    border-left: 1px solid rgba(0, 0, 0, 0.15);
    ${AssetButton} {
        svg {
            margin-right: 5px;
        }
    }
`

const PostButton = styled.button`
    min-width: 60px;
    border-radius: 16px;
    padding-left: 16px;
    padding-right: 16px;
    background: #0a66c2;
    color: white;
    &:hover {
        background: #004182;
    }
`

const Editor = styled.div`
    padding: 12px 24px;
    textarea {
        width: 100%;
        min-height: 100px;
        resize: none;
    }

    input {
        width: 100%;
        height: 25px;
        font-size: 16px;
        margin-bottom: 20px;
    }
`