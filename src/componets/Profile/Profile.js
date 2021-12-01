import PropTypes from 'prop-types';
import style from './Profile.module.scss';

export const Profile = ({
  avatar,
  username,
  tag,
  location,
  followers,
  views,
  likes,
}) => {
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} alt="User avatar" className={style.avatar} />
        <p className={style.name}>{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={style.stats}>
        <li className={style.item}>
          <span className="label">Followers</span>
          <span className={style.quantity}>{followers}</span>
        </li>
        <li className={style.item}>
          <span className="label">Views</span>
          <span className={style.quantity}>{views}</span>
        </li>
        <li className={style.item}>
          <span className="label">Likes</span>
          <span className={style.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
