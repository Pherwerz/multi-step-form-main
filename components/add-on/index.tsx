import { FC } from 'react';
import './index.scss';

// Pick add-ons
// Add-ons help enhance your gaming experience.

// Online service
// Access to multiplayer games
// +$1/mo

// Larger storage
// Extra 1TB of cloud save
// +$2/mo

// Customizable Profile
// Custom theme on your profile
// +$2/mo

type Props = {
  duration: string;
};

const AddOn: FC<Props> = ({ duration }) => {
  return <div className="add"></div>;
};

export default AddOn;
