import PropTypes from 'prop-types';
import {DescriptionContainer, StatsContainer, UserPicture, UserName, UserTag, UserLocation} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (<div class="profile">
    <DescriptionContainer>
        <UserPicture>
      <img
        src={avatar}
        alt="User avatar"
        class="avatar"
       
      />
      </UserPicture>
      <UserName><b>{username}</b></UserName>
      <UserTag>@{tag}</UserTag>
      <UserLocation>{location}</UserLocation>
    </DescriptionContainer>
  
    <StatsContainer>
      <li>
        <span class="label">Followers:</span>
        <span class="quantity"> {stats.followers}</span>
      </li>
      <li>
        <span class="label">Views:</span>
        <span class="quantity"> {stats.views}</span>
      </li>
      <li>
        <span class="label">Likes:</span>
        <span class="quantity"> {stats.likes}</span>
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
