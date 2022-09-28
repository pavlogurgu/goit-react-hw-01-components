import PropTypes from 'prop-types';
import {DescriptionContainer, StatsContainer, UserPicture, UserName, UserTag, UserLocation} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (<div classItem="profile">
    <DescriptionContainer>
        <UserPicture>
      <img
        src={avatar}
        alt="User avatar"
        classItem="avatar"
       
      />
      </UserPicture>
      <UserName><b>{username}</b></UserName>
      <UserTag>@{tag}</UserTag>
      <UserLocation>{location}</UserLocation>
    </DescriptionContainer>
  
    <StatsContainer>
      <li>
        <span classItem="label">Followers:</span>
        <span classItem="quantity"> {stats.followers}</span>
      </li>
      <li>
        <span classItem="label">Views:</span>
        <span classItem="quantity"> {stats.views}</span>
      </li>
      <li>
        <span classItem="label">Likes:</span>
        <span classItem="quantity"> {stats.likes}</span>
      </li>
    </StatsContainer>
  </div>)
}
Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
    
}

