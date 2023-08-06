import { FC } from 'react';
import './index.scss';

type Props = {
  className?: string;
  step: number;
};

const steps = [
  {
    step: 1,
    text: 'Your info',
  },
  {
    step: 2,
    text: 'Select plan',
  },
  {
    step: 3,
    text: 'Add-ons',
  },
  {
    step: 4,
    text: 'Summary',
  },
];

const Steps: FC<Props> = ({ className, step: curStep }) => {
  return (
    <section className={`step ${className || ''}`}>
      {steps.map(step => (
        <div key={step.step} className="step-box">
          <p
            className={`step-num ${
              step.step === curStep
                ? 'bg-primary-Light-blue text-primary-Marine-blue'
                : 'border-[2px] border-primary-Light-blue text-primary-Light-blue'
            }`}
          >
            {step.step}
          </p>

          <div className="step-text">
            <p>Step {step.step}</p>
            <p>{step.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Steps;
