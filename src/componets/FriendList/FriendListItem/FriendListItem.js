import PropTypes from 'prop-types';
import style from './FriendListItem.module.scss';
import { Fragment } from 'react';
export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <Fragment>
      <span className={isOnline ? style.online : style.offline}></span>
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </Fragment>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
