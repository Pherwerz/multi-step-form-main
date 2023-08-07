'use client';

import { NextPage } from 'next';
import './page.scss';
import Steps from '@/components/steps';
import { useState } from 'react';
import Navigation from '@/components/navigation';
import Info from '@/components/info';
import Appreciation from '@/components/appreciation';
import Plan, { Plan as PLAN } from '@/components/plan';
import AddOn, { Addon } from '@/components/add-on';
import Summary from '@/components/summary';
import { useForm, useFormState } from 'react-hook-form';
import { IInfoform, infoSchema } from '@/form/info';
import { zodResolver } from '@hookform/resolvers/zod';

const Home: NextPage = () => {
  const [step, setSteps] = useState(1);
  const [duration, setDuration] = useState('Monthly');
  const [plan, setPlan] = useState<PLAN>();
  const [addon, setAddon] = useState<Addon[]>();

  const {
    register,
    formState: { errors, isValid },
  } = useForm<IInfoform>({
    resolver: zodResolver(infoSchema),
    mode: 'onBlur',
  });

  const next = () => {
    if ((step === 2 && !plan) || (step === 1 && !isValid)) return;
    setSteps(step + 1);
  };

  return (
    <main className="main">
      <Steps className="md:hidden flex" step={step > 4 ? 4 : step} />

      <section className="main-box">
        <Steps className="hidden md:flex" step={step > 4 ? 4 : step} />

        <div className="main-box-right">
          <div className="basis-[500px]">
            {step < 5 ? (
              <div className="flex flex-col md:h-[575px]">
                <div className="my-[30px] md:mb-auto md:mt-[40px]">
                  {step === 1 && <Info errors={errors} register={register} />}
                  {step === 2 && (
                    <Plan
                      duration={duration}
                      setDuration={setDuration}
                      plan={plan}
                      setPlan={setPlan}
                    />
                  )}
                  {step === 3 && (
                    <AddOn
                      duration={duration}
                      addon={addon}
                      setAddon={setAddon}
                    />
                  )}
                  {step === 4 && plan && (
                    <Summary
                      duration={duration}
                      plan={plan}
                      addon={addon}
                      change={() => setSteps(2)}
                    />
                  )}
                </div>

                <Navigation
                  step={step}
                  next={next}
                  back={() => setSteps(step - 1)}
                />
              </div>
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
