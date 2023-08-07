import { FC } from 'react';
import './index.scss';
import { IInfoform } from '@/form/info';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

type Props = {
  errors: FieldErrors<IInfoform>;
  register: UseFormRegister<IInfoform>;
};

const Info: FC<Props> = ({ errors, register }) => {
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
            {errors.name && <p>{errors.name?.message}</p>}
          </div>

          <input
            {...register('name')}
            placeholder="e.g. Stephen King"
            id="name"
            className={`info-input ${
              errors.name
                ? 'border-primary-Strawberry-red'
                : 'border-neutral-Light-gray'
            }`}
          />
        </div>

        <div className="mb-[20px]">
          <div className="info-label">
            <label htmlFor="email">Email Address</label>
            {errors.email && <p>{errors.email?.message}</p>}
          </div>

          <input
            {...register('email')}
            placeholder="e.g. stephenking@lorem.com"
            id="email"
            className={`info-input ${
              errors.email
                ? 'border-primary-Strawberry-red'
                : 'border-neutral-Light-gray'
            }`}
          />
        </div>

        <div className="mb-[20px]">
          <div className="info-label">
            <label htmlFor="num">Phone Number</label>
            {errors.phoneNumber && <p>{errors.phoneNumber?.message}</p>}
          </div>

          <input
            {...register('phoneNumber')}
            type="number"
            placeholder="e.g. +1 234 567 890"
            id="num"
            className={`info-input ${
              errors.phoneNumber
                ? 'border-primary-Strawberry-red'
                : 'border-neutral-Light-gray'
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
