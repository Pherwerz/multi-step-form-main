import { FC } from 'react';
import './index.scss';

// Finishing up
// Double-check everything looks OK before confirming.

// <!-- Dynamically add subscription and add-on selections here -->

// Total (per month/year)

type Props = {
  duration: string;
};

const Summary: FC<Props> = ({ duration }) => {
  return <div className="summary"></div>;
};

export default Summary;
