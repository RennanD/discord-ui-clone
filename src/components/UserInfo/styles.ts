import styled from 'styled-components';
import { MdHeadphones, MdMic, MdSettings } from 'react-icons/md';

export const Container = styled.div`
  grid-area: UI;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: var(--quaternary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;

  background-color: var(--gray);
`;

export const UserData = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 13px;
    color: var(--white);
    display: block;
  }

  > span {
    font-size: 13px;
    color: var(--gray);
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;

  > svg + svg {
    margin-left: 7px;
  }
`;

export const MicIcon = styled(MdMic)`
  width: 20px;
  height: 20px;
  color: var(--white);
  opacity: 0.7;
  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

export const HeadPhoneIcon = styled(MdHeadphones)`
  width: 20px;
  height: 20px;
  color: var(--white);
  opacity: 0.7;
  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

export const SettingsIcon = styled(MdSettings)`
  width: 20px;
  height: 20px;
  color: var(--white);
  opacity: 0.7;
  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;
