import { FC } from 'react';
import './index.scss';

// Name
// e.g. Stephen King

// Email Address
// e.g. stephenking@lorem.com

// Phone Number
// e.g. +1 234 567 890

const Info: FC = () => {
  return (
    <div className="info">
      <h2 className="h2">Personal info</h2>

      <p className="p">
        Please provide your name, email address, and phone number.
      </p>
    </div>
  );
};

export default Info;
