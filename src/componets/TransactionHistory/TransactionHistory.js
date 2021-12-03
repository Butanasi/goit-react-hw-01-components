import PropTypes from 'prop-types';
import style from './TransactionHistory.module.scss';
export const TransactionHistory = ({ elements }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th className={style.title}>Type</th>
          <th className={style.title}>Amount</th>
          <th className={style.title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {elements.map(({ id, amount, currency, type }) => (
          <tr className={style.stringTable} key={id}>
            <td className={style.about}>{type}e</td>
            <td className={style.about}>{amount}</td>
            <td className={style.about}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
