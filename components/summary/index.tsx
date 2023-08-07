import { FC } from 'react';
import './index.scss';
import { Plan } from '../plan';
import { Addon } from '../add-on';

// <!-- Dynamically add subscription and add-on selections here -->

// Total (per month/year)

type Props = {
  duration: string;
  change: () => void;
  plan?: Plan;
  addon?: Addon;
};

const Summary: FC<Props> = ({ duration, addon, plan, change }) => {
  return (
    <div className="summary">
      <h2 className="h2">Finishing up</h2>

      <p className="p">Double-check everything looks OK before confirming.</p>
    </div>
  );
};

export default Summary;
