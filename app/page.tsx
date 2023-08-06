'use client';

import { NextPage } from 'next';
import './page.scss';
import Steps from '@/components/steps';
import { useState } from 'react';
import Navigation from '@/components/navigation';
import Info from '@/components/info';
import Appreciation from '@/components/appreciation';
import Plan from '@/components/plan';
import AddOn from '@/components/add-on';
import Summary from '@/components/summary';

const stages = [
  <Info key={1} />,
  <Plan key={2} />,
  <AddOn key={3} />,
  <Summary key={4} />,
];

const Home: NextPage = () => {
  const [step, setSteps] = useState(1);

  return (
    <main className="main">
      <Steps className="md:hidden flex" step={step} />

      <section className="main-box">
        <Steps className="hidden md:flex" step={step} />

        <div className="main-box-right">
          <div className="basis-[500px]">
            {step < 5 ? (
              <>
                <div className="mb-[80px]">{stages[step - 1]}</div>

                <Navigation
                  step={step}
                  next={() => setSteps(step + 1)}
                  back={() => setSteps(step - 1)}
                />
              </>
            ) : (
              <Appreciation />
            )}
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home;
