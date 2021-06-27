import styled from 'styled-components'
import PictureUsr from './../../assets/user.svg'
import { BiPhotoAlbum, BiMovie } from 'react-icons/bi'
import { MdEvent } from 'react-icons/md'
import { GrArticle } from 'react-icons/gr'

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
            &:nth-child(1 ) {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
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