import { FC } from 'react';
import './index.scss';
import { Plan } from '../plan';
import { Addon } from '../add-on';

type Props = {
  duration: string;
  change: () => void;
  plan: Plan;
  addon?: Addon[];
};

const Summary: FC<Props> = ({ duration, addon, plan, change }) => {
  const price = duration === 'Monthly' ? 1 : 10;
  const ad = addon ? addon?.reduce((cv, cur) => cur.price * price + cv, 0) : 0;
  const shortDur = duration === 'Monthly' ? 'mo' : 'yr';

  return (
    <div className="summary">
      <h2 className="h2">Finishing up</h2>

      <p className="p">Double-check everything looks OK before confirming.</p>

      <div className="summary-box">
        <div className="summary-plan">
          <div>
            <h3>
              {plan.name} ({duration})
            </h3>
            <button onClick={change}>change</button>
          </div>

          <h4>
            ${plan.price * price}/{shortDur}
          </h4>
        </div>

        {addon && (
          <div className="summary-addon">
            {addon.map(cur => (
              <div key={cur.name}>
                <p> {cur.name}</p>
                <p>
                  +{cur.price * price}/{shortDur}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="summary-total">
        <p>Total (per {duration === 'Monthly' ? 'month' : 'year'})</p>

        <h4>
          ${plan.price * price + ad}/{shortDur}
        </h4>
      </div>
    </div>
  );
};

export default Summary;
