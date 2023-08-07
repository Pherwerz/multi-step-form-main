import { Dispatch, FC, SetStateAction } from 'react';
import './index.scss';

// Online service
// Access to multiplayer games
// +$1/mo

// Larger storage
// Extra 1TB of cloud save
// +$2/mo

// Customizable Profile
// Custom theme on your profile
// +$2/mo

export type Addon = {
  name: string;
  text: string;
  price: number;
};

type Props = {
  duration: string;
  addon?: Addon;
  setAddon: Dispatch<SetStateAction<Addon | undefined>>;
};

const AddOn: FC<Props> = ({ duration }) => {
  return (
    <div className="add">
      <h2 className="h2">Pick add-ons</h2>

      <p className="p">Add-ons help enhance your gaming experience.</p>

      <div></div>
    </div>
  );
};

export default AddOn;
