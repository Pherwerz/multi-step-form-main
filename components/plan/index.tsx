import { Dispatch, FC, SetStateAction } from 'react';
import './index.scss';

// Select your plan
// You have the option of monthly or yearly billing.

// Arcade
// $9/mo

// Advanced
// $12/mo

// Pro
// $15/mo

// Monthly
// Yearly

type Props = {
  duration: string;
  setDuration: Dispatch<SetStateAction<string>>;
};

const Plan: FC<Props> = ({ duration, setDuration }) => {
  return <div className="plan"></div>;
};

export default Plan;
