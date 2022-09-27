import PropTypes from 'prop-types';
import { ListOfFriendsItem, FriendStatus, FriendAvatar, FriendName, Active, NotActive } from './FriendList.styled';
import css from './FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <ListOfFriendsItem>
        <FriendStatus className={isOnline ? `${css.Active}` : `${css.NotActive}`}></FriendStatus>
        <FriendAvatar src={avatar} alt={name} width="48" />
        <FriendName>{name}</FriendName>
      </ListOfFriendsItem>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};