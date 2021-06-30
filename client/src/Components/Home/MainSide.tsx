import styled from 'styled-components'
import PictureUsr from './../../assets/user.svg'
import { BiPhotoAlbum, BiMovie } from 'react-icons/bi'
import { MdEvent } from 'react-icons/md'
import { BsThreeDots } from 'react-icons/bs'
import { GrArticle } from 'react-icons/gr'
import { IoMdShareAlt } from 'react-icons/io'
import { AiFillLike, AiFillHeart, AiOutlineComment } from 'react-icons/ai'
import Photo from './../../assets/naruto.jpeg'

export const MainComponent = (): JSX.Element => {
    return (
        <Container>
            <ShareBox>
                <div>
                    <img src={PictureUsr} alt="" className="img"/>
                    <button>Start a post</button>
                </div>
                <div>
                    <button>
                        <BiPhotoAlbum className="img"/>
                        <span>Photo</span>
                    </button>
                    <button>
                        <BiMovie className="img"/>
                        <span>Video</span>
                    </button>
                    <button>
                        <MdEvent className="img"/>
                        <span>Event</span>
                    </button>
                    <button>
                        <GrArticle className="img"/>
                        <span>Write article</span>
                    </button>
                </div>
            </ShareBox>
            <div>
                <Article>
                    <SharedActor>
                        <a>
                            <img src={PictureUsr} alt="" className="img"/>
                            <div>
                                <span>Title</span>
                                <span>Info</span>
                                <span>Date</span> 
                            </div>
                        </a>
                        <button>
                            <BsThreeDots />
                        </button>
                    </SharedActor>
                    <Description>Description</Description>
                    <ShareImage>
                            <img src={Photo} alt="" className="img"/>
                    </ShareImage>
                    <SocialCount>
                        <li>
                            <button>
                                <AiFillLike />
                                <AiFillHeart />
                                <span>75</span>
                            </button>
                        </li>
                        <li>
                            <a>2 comments</a>
                        </li>
                    </SocialCount>
                    <SocialAction>
                        <button>
                            <div>
                                <AiFillLike />
                            </div>
                            <span>Like</span>
                        </button>
                        <button>
                            <div>
                                <AiOutlineComment />
                            </div>
                            <span>Comments</span>
                        </button>
                        <button>
                            <div>
                                <IoMdShareAlt />
                            </div>
                            <span>Share</span>
                        </button>
                        <button>
                            <div>
                                <IoMdShareAlt />
                            </div>
                            <span>Send</span>
                        </button>
                    </SocialAction>
                </Article>
            </div>
        </Container>
    )
}

const Container = styled.div`
`

const CommonCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`

const ShareBox = styled(CommonCard)`
    display: flex;
    flex-direction: column;
    color: #928b7b;
    margin: 0 0 8px;
    background-color: white;
    div {
        button {
            outline: none;
            color: rgba(0, 0, 0, 0.6);
            font-size: 12px;
            line-height: 1.5;
            min-height: 48px;
            background: transparent;
            border: none;
            display: flex;
            align-items: center;
            font-weight: 600;
        }
        &:first-child {
            display: flex;
            align-items: center;
            padding: 8px 16px 0px 16px;
            button {
                margin: 4px 0;
                flex-grow: 1;
                border-radius: 35px;
                padding-left: 16px;
                border: 1px solid rgba(0, 0, 0, 0.15);
                background-color: white;
                text-align: left;
            }
        }
        &:nth-child(2) {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            span {
                color: rgba(0, 0, 0, 0.6);
            }
        }
        .img {
            width: 40px;
            border-radius: 50%;
            margin-right: 6px;
            font-size: 18px;
        }
    }
`

const Article = styled(CommonCard)`
    padding: 0;
    margin: 0 0 8px;
    overflow: visible;
`

const SharedActor = styled.div`
    padding-right: 40px;
    flex-wrap: nowrap;
    padding: 12px 16px 0;
    margin-bottom: 8px;
    align-items: center;
    display: flex;
    a {
        margin-right: 12px;
        flex-grow: 1;
        overflow: hidden;
        display: flex;
        text-decoration: none;

        img {
            width: 48px;
            height: 48px;
        }

        & > div {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            flex-basis: 0;
            margin-left: 8px;
            overflow: hidden;
            span {
                text-align: left;
                &:first-child {
                    font-size: 14px;
                    font-weight: 700;
                    color: rgba(0, 0, 0, 1);
                }
                &:nth-child(n+1) {
                    font-size: 12px;
                    color: rgba(0, 0, 0, 0.6);
                }
            }
        }
    }

    button {
        position: absolute;
        right: 12px;
        top: 0;
        background: transparent;
        border: none;
        outline: none;
    }
`

const Description = styled.div`
    padding: 0 16px;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.9);
    font-size: 14px;
    text-align: left;
`

const ShareImage = styled.div`
    margin-top: 8px;
    width: 100%;
    display: block;
    position: relative;
    background-color: #f9fafb;
    img {
        object-fit: contain;
        width: 100%;
        height: 0%;
    }
    svg {
        object-fit: contain;
        width: 100%;
        height: 0%;
    }
`

const SocialCount = styled.ul`
    display: flex;
    line-height: 1.3;
    align-items: flex-start;
    overflow: auto;
    margin: 0 16px;
    padding: 8px 0;
    border-bottom: 1px solid #e9e5df;
    list-style: none;
    li {
        margin-right: 5px;
        font-size: 12px;
        align-items: center;
        button {
            background: white;
            display: flex;
            border: none;
        }
    }
`

const SocialAction = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 0;
    min-height: 40px;
    padding: 4px 8px;
    button {
        display: inline-flex;
        align-items: center;
        padding: 8px;
        color: #0a66c2;
        border: none;
        background-color: white;

        @media (min-width: 768px) {
            span {
                margin-left: 8px;
            }
        }
    }
`