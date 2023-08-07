import { FC } from 'react';
import './index.scss';

const Info: FC = () => {
  return (
    <div className="info">
      <h2 className="h2">Personal info</h2>

      <p className="p">
        Please provide your name, email address, and phone number.
      </p>

      <div className="info-box">
        <div className="mb-[20px]">
          <div className="info-label">
            <label htmlFor="name">Name</label>
            <p></p>
          </div>

          <input
            type="text"
            placeholder="e.g. Stephen King"
            id="name"
            className="info-input"
          />
        </div>

        <div className="mb-[20px]">
          <div className="info-label">
            <label htmlFor="email">Email Address</label>
            <p></p>
          </div>

          <input
            type="text"
            placeholder="e.g. stephenking@lorem.com"
            id="email"
            className="info-input"
          />
        </div>

        <div className="mb-[20px]">
          <div className="info-label">
            <label htmlFor="num">Phone Number</label>
            <p></p>
          </div>

          <input
            type="number"
            placeholder="e.g. +1 234 567 890"
            id="num"
            className="info-input"
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
