import PropTypes from 'prop-types';
import style from './Statistics.module.scss';
import randomColor from './ColorRandom';

export const Statistics = ({ title = '', stats }) => {
  return (
    <section className={style.statistics}>
      {title && <h2 className="title">{title}</h2>}

      <ul className={style.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={style.item}
            key={id}
            style={{ backgroundColor: randomColor() }}
          >
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};