import PropTypes from 'prop-types';
import { ListOfFriends } from './FriendList.styled';
import {FriendListItem} from './FriendListItem';


export const FriendList = ({ friends }) => {
    return (
        <ListOfFriends>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ListOfFriends>
     
    );
  };

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })),
   
  };

  