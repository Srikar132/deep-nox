import React, { useState, useEffect } from 'react';
import Section from './Section';
import { GradientLight } from './design/Benefits';
import ClipPath from '../assets/svg/ClipPath';
import Arrow from '../assets/svg/Arrow';
import { benefitIcon1, benefitIcon2, benefitIcon3, benefitIcon4 } from '../assets';

const LegalCasesTimeline = () => {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mock Data
  const mockCases = [
    {
      id: 1,
      date: '2023-03-15T10:00:00.000Z',
      title: 'Celebrity Defamation Case',
      court: 'Court of Public Opinion',
      backgroundUrl: "./src/assets/benefits/card-1.svg",
      iconUrl: benefitIcon1,
      punishment: 'Defamation lawsuit, damages awarded to the plaintiff',
      description: 'A deepfake video of a famous actress was used to promote a product without her consent.',
    },
    {
      id: 2,
      date: '2023-06-22T14:30:00.000Z',
      title: 'Political Misinformation Campaign',
      backgroundUrl: "./src/assets/benefits/card-1.svg",
      iconUrl: benefitIcon2,
      court: 'International Court of Justice',
      punishment: 'Imprisonment and public apology',
      description: 'Deepfake audio was created to mimic a politician making controversial statements.',
      light: true
    },
    {
      id: 3,
      date: '2023-09-08T09:15:00.000Z',
      title: 'Financial Fraud Scheme',
      court: 'Federal Court',
      backgroundUrl: "./src/assets/benefits/card-1.svg",
      iconUrl: benefitIcon3,
      punishment: 'Criminal charges, fines, and imprisonment',
      description: 'Deepfake video conferencing was used to impersonate a company executive in fraudulent wire transfers.',
      light: true
    },
    {
      id: 4,
      date: '2024-01-10T16:00:00.000Z',
      title: 'Personal Harassment Case',
      court: 'Local Court',
      backgroundUrl: "./src/assets/benefits/card-1.svg",
      iconUrl: benefitIcon3,
      punishment: 'Restraining orders and damages to the plaintiff',
      description: 'A deepfake video was created and disseminated to harass an individual.',
    },
    {
      id: 5,
      date: '2024-04-01T11:45:00.000Z',
      title: 'Corporate Espionage Incident',
      court: 'Corporate Court',
      backgroundUrl: "./src/assets/benefits/card-1.svg",
      iconUrl: benefitIcon4,
      punishment: 'Lawsuit, financial compensation, and corporate penalties',
      description: 'Deepfake audio was used to impersonate a CEO during negotiations, leading to a breach of contract.',
    },
    {
      id: 5,
      date: '2024-04-01T11:45:00.000Z',
      title: 'Corporate Espionage Incident',
      court: 'Corporate Court',
      backgroundUrl: "./src/assets/benefits/card-1.svg",
      iconUrl: benefitIcon4,
      punishment: 'Lawsuit, financial compensation, and corporate penalties',
      description: 'Deepfake audio was used to impersonate a CEO during negotiations, leading to a breach of contract.',
      light: true
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        setCases(mockCases);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Format the date using JavaScript's Date object
  const formatDate = (date) => {
    const d = new Date(date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return d.toLocaleDateString('en-US', options);
  };

  return (
    <Section className="container -mt-[1rem]" crosses crossesOffset >
    <div className="relative my-8 p-8 rounded-md overflow-x-auto overflow-y-hidden">
      <div className="absolute top-0 bottom-0 left-14 w-0.5 bg-n-7 z-0"></div>

      {loading && <div className="text-center italic text-n-1 mt-4">Loading legal cases...</div>}
      {error && <div className="text-red-500 text-center mt-4">Error: {error}</div>}

      {!loading && !error && (
      <div className='flex flex-wrap items-center justify-center gap-10 mb-10'>
      {cases.map((item,index) => (
        <div className='block relative p-0.5 bg-no-repeat bg-[lenght: 100%_100%] md:max-w-[24rem]'
        key={index}
        style={{
          backgroundImage: `url(${item.backgroundUrl})`
        }}
        >
          <div className='relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-ecents-none'>
            <h5 className='h5 mb-5'>{item.title}</h5>
            <p className='body-2 mb-6 text-n-3'>{item.text}</p>
            
          </div>
      {item.light && <GradientLight/>}
      <div className='absolute inset-0.5  bg-n-8'
        style={{ clipPath: "url(#benefits)" }}>
        <div className='inset-0 absolute opacity-10 transition-opacity hover:opacity-10'>
          {item.imageUrl && (
            <img src={item.imageUrl} 
            width={380} height={362}
            className='w-full h-full object-cover'
            />
          )}
        </div>
        </div>
      <ClipPath/>
    </div>
  ))}
</div>
      )}
    </div>
    </Section>
  );
};

export default LegalCasesTimeline;