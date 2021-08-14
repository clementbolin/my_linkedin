import styled from "styled-components";
import PhotoProfile from "./../../assets/photo.svg";
import { HiUserAdd, HiFlag } from "react-icons/hi";
import { GrFormAdd } from "react-icons/gr";
import firebase from "firebase";

type Props = {
  user: firebase.User | null;
};

export const LeftSideComponent: React.FC<Props> = (props): JSX.Element => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBacground />
          <div>
            <Photo>
              {props.user && props.user.photoURL ? (
                <img src={props.user.photoURL} alt="" />
              ) : (
                <img src={PhotoProfile} alt="" />
              )}
            </Photo>
            <Link>
              Welcome, {props.user ? props.user.displayName : "there"} !
            </Link>
          </div>
          <div>
            <AddPhotoText>Add a Photo</AddPhotoText>
          </div>
        </UserInfo>
        <Widget>
          <a>
            <div>
              <span>Connection</span>
              <span>Grow your network</span>
            </div>
            <HiUserAdd />
          </a>
        </Widget>
        <Item>
          <span>
            <HiFlag />
            My Item
          </span>
        </Item>
      </ArtCard>
      <CommunityCard>
        <div>
          <span>Groups</span>
        </div>
        <div>
          <span>
            Events
            <GrFormAdd />
          </span>
        </div>
        <div>
          <span>Follow Hastags</span>
        </div>
        <div>
          <span>Discovery more</span>
        </div>
      </CommunityCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: leftside;
`;

const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;
const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-all;
`;

const CardBacground = styled.div`
  background: url("./card-bg.svg");
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;

export const Photo = styled.div`
  margin: -10px auto 12px;
  img {
    border-radius: 50%;
    width: 72px;
    height: 72px;
    background-color: white;
    border: #f1f1f1 1px solid;
  }
`;

const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
  word-break: break-word;
`;

const AddPhotoText = styled.div`
  color: #0a66c2;
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.3;
  font-weight: 400;
  cursor: pointer;
`;

const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-top: 12px;
  padding-bottom: 12px;

  & > a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }

    div {
      display: flex;
      flex-direction: column;
      text-align: left;
      span {
        font-size: 12px;
        line-height: 1.33;
        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }
        &:nth-child(2) {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }

  svg {
    color: rgba(0, 0, 0, 1);
  }
`;

const Item = styled.a`
  border-color: rgba(0, 0, 0, 0.8);
  text-align: left;
  padding: 12px;
  font-size: 12px;
  display: block;
  span {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 1);
    svg {
      color: rgba(0, 0, 0, 0.6);
    }
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

const CommunityCard = styled(ArtCard)`
  padding: 0px 0 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  div {
    color: black;
    padding: 4px 12px 4px 12px;
    font-size: 12px;

    &:hover {
      color: #0a66c2;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &:last-child {
      color: rgba(0, 0, 0, 0.6);
      text-decoration: none;
      border-top: 1px solid #d6cec2;
      padding: 12px;
      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`;
