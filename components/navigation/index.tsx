import { FC } from 'react';
import './index.scss';

type Props = {
  step: number;
  back: () => void;
  next: () => void;
};

const Navigation: FC<Props> = ({ step, back, next }) => {
  return (
    <div className="nav">
      <div onClick={back}>
        {step > 1 && <button className="nav-back">Go Back</button>}
      </div>

      <button
        onClick={next}
        className={`nav-next ${
          step === 4 ? 'bg-primary-Purplish-blue' : 'bg-primary-Marine-blue'
        }`}
      >
        {step === 4 ? 'Confirm' : 'Next Step'}
      </button>
    </div>
  );
};

export default Navigation;
