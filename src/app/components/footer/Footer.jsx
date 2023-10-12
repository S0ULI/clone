import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import FooterNav from './FooterNav';
import FooterLogosection from './FooterLogosection';
import FooterButtom from './FooterButtom';

const Footer = () => {
  return (
    <footer className='footer w-full relative mt-16 self-end'>
      <div className='bg-header-bg-color/10 rounded-t-[2rem] absolute bottom-0 left-0 w-full h-3/5 sm:h-fit'>
      <SectionWrapper mSt='flex flex-col h-full sm:justify-end justify-center pt-8 pb-8' mtn='mt-0'>
        <div className="w-full flex justify-between items-center sm:gap-36">
          <div className='flex flex-col sm:flex-row sm:flex-wrap justify-between items-center gap-4 flex-1'>
            <FooterNav />
          </div>
          <div>
            <FooterLogosection/>
          </div>
        </div>
      </SectionWrapper>
      <FooterButtom/>
      </div>
    </footer>
  );
};

export default Footer;
