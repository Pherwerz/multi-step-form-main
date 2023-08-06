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

const Home: NextPage = () => {
  const [step, setSteps] = useState(1);
  const [duration, setDuration] = useState('');

  return (
    <main className="main">
      <Steps className="md:hidden flex" step={step} />

      <section className="main-box">
        <Steps className="hidden md:flex" step={step} />

        <div className="main-box-right">
          <div className="basis-[500px]">
            {step < 5 ? (
              <>
                <div className="mb-[80px]">
                  {step === 1 && <Info />}
                  {step === 2 && (
                    <Plan duration={duration} setDuration={setDuration} />
                  )}
                  {step === 3 && <AddOn duration={duration} />}
                  {step === 4 && <Summary duration={duration} />}
                </div>

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
