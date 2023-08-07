import { Dispatch, FC, SetStateAction } from 'react';
import './index.scss';
import Image from 'next/image';

const plans: Plan[] = [
  {
    name: 'Arcade',
    price: 9,
    image: '/assets/images/icon-arcade.svg',
  },
  {
    name: 'Advanced',
    price: 12,
    image: '/assets/images/icon-advanced.svg',
  },
  {
    name: 'Pro',
    price: 15,
    image: '/assets/images/icon-pro.svg',
  },
];

export type Plan = {
  name: string;
  price: number;
  image: string;
};

type Props = {
  duration: string;
  setDuration: Dispatch<SetStateAction<string>>;
  plan?: Plan;
  setPlan: Dispatch<SetStateAction<Plan | undefined>>;
};

const Plan: FC<Props> = ({ duration, setDuration, plan, setPlan }) => {
  return (
    <div className="plan">
      <h2 className="h2">Select your plan</h2>

      <p className="p">You have the option of monthly or yearly billing.</p>

      <div className="plan-box">
        {plans.map(pl => (
          <div
            key={pl.name}
            onClick={() => setPlan(pl)}
            className={`plan-item ${
              pl.name === plan?.name
                ? 'bg-neutral-Magnolia border-primary-Purplish-blue'
                : ''
            }`}
          >
            <Image alt={pl.name} src={pl.image} width={40} height={40} />
            <div>
              <h4>{pl.name}</h4>

              <p>
                ${pl.price}/{duration === 'Monthly' ? 'mo' : 'yr'}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="plan-switch">
        <p
          className={
            duration === 'Monthly'
              ? 'text-primary-Marine-blue'
              : 'text-neutral-Cool-gray'
          }
        >
          Monthly
        </p>

        <div
          onClick={() =>
            setDuration(duration === 'Monthly' ? 'Yearly' : 'Monthly')
          }
        >
          <div className={duration === 'Monthly' ? 'ml-0' : 'ml-auto'} />
        </div>

        <p
          className={
            duration === 'Yearly'
              ? 'text-primary-Marine-blue'
              : 'text-neutral-Cool-gray'
          }
        >
          Yearly
        </p>
      </div>
    </div>
  );
};

export default Plan;
