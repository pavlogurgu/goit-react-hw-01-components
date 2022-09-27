import PropTypes from 'prop-types';
import {StatisticsBox, BoxTitle, StatsList, ListItemInfo, ListItem} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return (
      <StatisticsBox>
        <BoxTitle>Upload Stats</BoxTitle>
        {title !== undefined && <h2>{title}</h2>}
        <StatsList>
          {stats.flatMap(({ id, label, percentage }) => {
            return (
              <ListItem id={id} key={id}>
                <ListItemInfo>{label}</ListItemInfo>
                <ListItemInfo>{percentage}%</ListItemInfo>
                
              
              </ListItem>
              
            );
          })}
        </StatsList>
      </StatisticsBox>
     
    );
  };


 
Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.object.isRequired),
    title: PropTypes.string,
  };
