import { FC } from 'react';
import './index.scss';
import Image from 'next/image';

const Appreciation: FC = () => {
  return (
    <div className="appreciation">
      <div>
        <Image
          height={80}
          width={80}
          alt="thank you"
          src="/assets/images/icon-thank-you.svg"
        />

        <h2 className="h2">Thank you!</h2>

        <p className="p">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default Appreciation;
