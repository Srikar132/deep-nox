import React from 'react'
import Section from './Section'
import { collabApps, collabContent, collabText } from '../constants'
import { brainwaveSymbol, check } from '../assets';
import Button from './Button';
import {LeftCurve , RightCurve } from './design/Collaboration'

const Collabration = () => {

  return (
    <Section id={"extension"} crosses className={"z-1 "}>
        <div className='container rounded-xl  lg:flex'>
            <div className='max-w-[25rem]'>
                <h1 className='h2 mb-4 md:mb-8 '>Seamless Collaboration Against Deepfakes</h1>
                <ul className='max-w-[22rem] mb-10 md:mb-14'>
                    {collabContent.map((item) => (
                        <li className='mb-3 py-3' key={item.id}>
                            <div className='flex items-center '>
                                <img src={check} width={24} height={24} alt='check'/>
                                <h6 className='body-2 ml-5'>{item.title}</h6>
                            </div>
                                {item.text && (
                                    <p className='body-2 mt-3 text-n-4'>{item.text}</p>
                                )}
                        </li>
                    ))}
                </ul>
                <Button>Try it Now</Button>
            </div>
            <div className='lg:ml-auto xl:w-[38rem] mt-4'>
                <p className='body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto'>{collabText}</p>
                <div className='border border-n-6 relative left-1/2 flex w-[22rem] aspect-square rounded-full -translate-x-1/2 scale:75 md:scale-100'>
                    <div className='flex w-60 m-auto border border-n-6 aspect-square rounded-full '>
                        <div className='w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full'>
                            <div className='flex items-center justify-center w-full h-full rounded-full bg-n-8'>
                                <img src={brainwaveSymbol} alt="brainwave" width={48} height={48}/>
                            </div>
                        </div>
                    </div>
                    <ul>
                        {collabApps.map((app,index) => (
                            <li key={app.id} className={`absolute rotate-${index*45} top-0 h-1/2 left-1/2 -ml-[1.6rem] origin-bottom`}>
                                <div className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index*45} `}>
                                    <img className='m-auto' src={app.icon} alt={app.title} width={app.width} height={app.height} />
                                </div>
                            </li>
                        ))}
                    </ul>
                    <LeftCurve />
                    <RightCurve />
                </div>
            </div>
        </div>
    </Section>
  )
}

export default Collabration;