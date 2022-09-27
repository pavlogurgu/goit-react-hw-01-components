import PropTypes from 'prop-types';
import { TransactionRow } from './TransactionRow';
import {
  Table,
  TableHead,
  TableRow,
  HeadTitle,
  TransactionBody,
} from './Transactions.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <HeadTitle>Type</HeadTitle>
          <HeadTitle>Amount</HeadTitle>
          <HeadTitle>Currency</HeadTitle>
        </TableRow>
      </TableHead>
      {transactions.map(transaction => (
        <TransactionBody key={transaction.id}>
          <TransactionRow
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
          ></TransactionRow>
        </TransactionBody>
      ))}
    </Table>
  );
};

TransactionHistory.prototypeTypes = {
  transaction: PropTypes.object,
};