import { Dispatch, FC, SetStateAction } from 'react';
import './index.scss';
import Image from 'next/image';

const addons: Addon[] = [
  {
    name: 'Online service',
    text: 'Access to multiplayer games',
    price: 1,
  },
  {
    name: 'Larger storage',
    text: 'Extra 1TB of cloud save',
    price: 2,
  },
  {
    name: 'Customizable Profile',
    text: 'Custom theme on your profile',
    price: 2,
  },
];

export type Addon = {
  name: string;
  text: string;
  price: number;
};

type Props = {
  duration: string;
  addon?: Addon[];
  setAddon: Dispatch<SetStateAction<Addon[] | undefined>>;
};

const AddOn: FC<Props> = ({ duration, setAddon, addon }) => {
  return (
    <div className="add">
      <h2 className="h2">Pick add-ons</h2>

      <p className="p">Add-ons help enhance your gaming experience.</p>

      <div className="add-box">
        {addons.map(add => (
          <div
            key={add.name}
            onClick={() => {
              if (addon?.find(cur => cur.name === add.name)) return;

              if (addon) {
                setAddon([...addon, add]);
              } else {
                setAddon([add]);
              }
            }}
            className={`add-item ${
              addon?.find(cur => cur.name === add.name)
                ? 'bg-neutral-Magnolia border-primary-Purplish-blue'
                : ''
            }`}
          >
            <div
              className={`add-check ${
                addon?.find(cur => cur.name === add.name)
                  ? 'bg-primary-Purplish-blue'
                  : 'border'
              }`}
            >
              {addon?.find(cur => cur.name === add.name) && (
                <Image
                  alt={'check'}
                  src={'/assets/images/icon-checkmark.svg'}
                  width={12}
                  height={9}
                />
              )}
            </div>

            <div className="flex-1">
              <h4>{add.name}</h4>

              <p>{add.text}</p>
            </div>

            <p>
              ${add.price}/{duration === 'Monthly' ? 'mo' : 'yr'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddOn;
