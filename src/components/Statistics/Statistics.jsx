import PropTypes from 'prop-types';
import {} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return (
      <div>
        {title !== undefined && <h2>{title}</h2>}
        <ul>
          {stats.flatMap(({ id, label, percentage }) => {
            return (
              <li id={id} key={id}>
                <span>{label}</span>
                <span>{percentage}%</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };


 
Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.object.isRequired),
    title: PropTypes.string,
  };
