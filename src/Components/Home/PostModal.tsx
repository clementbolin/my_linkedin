import styled from "styled-components";
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from "react-redux";
import { UserState } from "../../reducers/userReducer";
import PictureUsr from './../../assets/user.svg'
import { ImYoutube } from 'react-icons/im'
import { GrGallery } from 'react-icons/gr'
import { RiShareForward2Fill } from 'react-icons/ri'
import { Dispatch, useState } from "react";
import ReactPlayer from 'react-player'
import { postArticleAPI } from "../../actions";
import { useCallback } from "react";
import firebase from 'firebase'

type Props = {
    showModal: string
    handleClick: (e: any) => void
}

export const PostModal: React.FC<Props> = (props) => {
    const [editorText, setEditorText] = useState<string>("")
    const [shareImage, setShareImage] = useState<string>("")
    const [videoLink, setVideoLink] = useState<string>("")
    const [assetArea, setAssetArea] = useState<string>("")
    
    const user = useSelector<UserState, UserState['user']>((state) => state.user)

    const dispatch: Dispatch<any> = useDispatch()
    const postArticle = useCallback(
        (p) => dispatch(postArticleAPI(p)),
        [dispatch]
    )

    const handleChange = (e: any) => {
        const image = e.target.files[0]

        if (image === "" || image === undefined) {
            alert(`Not an image, the file is a ${typeof image}`)
            return
        }
        setShareImage(image)
    }

    const switchAssetArea = (area: any) => {
        setShareImage('')
        setVideoLink('')
        setAssetArea(area)
    }

    const reset = (e: any) => {
        setEditorText("")
        setShareImage("")
        setVideoLink("")
        setAssetArea('')
        props.handleClick(e)
    }

    const handlePost = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        const payload = {
            image: shareImage,
            video: videoLink,
            user: user,
            description: editorText,
            timestamp: firebase.firestore.Timestamp.now()
        }
        postArticle(payload)
        reset(e)
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
                            {
                                assetArea === 'image' ? (
                                <UploadImage>
                                    <input type="file" 
                                        accept='image/gif, image/jpeg, image/png'
                                        name="image"
                                        id='file'
                                        onChange={handleChange}
                                        style={{display: 'none'}}
                                    />
                                    <p>
                                        <label htmlFor="file">
                                            Select image to share
                                        </label>
                                    </p>
                                    {shareImage && (
                                        <img src={URL.createObjectURL(shareImage)} alt='your img'/>
                                    )}
                                </UploadImage>
                                ) : ( 
                                assetArea === 'media' && 
                                <>
                                    <input type='text'
                                        placeholder='video Link' 
                                        value={videoLink}
                                        onChange={(e) => setVideoLink(e.target.value)}
                                    />
                                    {videoLink && <ReactPlayer width='100%' url={videoLink} />}
                                </>
                                )
                            }
                        </Editor>
                    </ShareContent>
                    <ShareCreation>
                        <AttachAssets>
                            <AssetButton onClick={() => switchAssetArea('image')}>
                                <GrGallery fontSize='20px' />
                            </AssetButton>
                            <AssetButton onClick={() => switchAssetArea('media')}>
                                <ImYoutube fontSize='20px'/>
                            </AssetButton>
                        </AttachAssets>
                        <ShareComment>
                            <AssetButton>
                                <RiShareForward2Fill fontSize='20px'/>
                                Share
                            </AssetButton>
                        </ShareComment>
                        <PostButton disabled={!editorText ? true : false}
                            onClick={handlePost}
                        >
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
    justify-content: center;
    height: 40px;
    min-height: auto;
    color: rgba(0, 0, 0, 0.5);
    background: transparent;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
        border-radius: 15%;
    }
`

const AttachAssets = styled.div`
    display: flex;
    align-items: center;
    padding-right: 8px;
    ${AssetButton} {
        width: 40px;
        &:hover {
            border-radius: 50%;
        }
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
    border: none;
    height: 35px;
    background: ${(disabled: any) => (disabled.disabled ? 'rgba(0, 0, 0, 0.08)' : '#0a66c2')};
    color: ${(disabled: any) => (disabled.disabled ? 'rgba(0, 0, 0, 0.3)' : 'white')};
    &:hover {
        background: ${(disabled: any) => (disabled.disabled ? 'rgba(0, 0, 0, 0.08)' : '#004182')};
        cursor: ${(disabled: any) => (!disabled.disabled && 'pointer')};
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

const UploadImage = styled.div`
    text-align: center;
    img {
        width: 100%;
    }
`