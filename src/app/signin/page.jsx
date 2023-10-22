import SectionWrapper from '@/app/components/layout/SectionWrapper';
import SignInFrom from '../components/forms/SignInFrom';

const Signin = () => {
  return (
    <div className='flex flex-col gap-8 w-full'>
      <SectionWrapper mSt="w-full flex flex-col jestify-center items-center">
        <SignInFrom/>
      </SectionWrapper>
    </div>
  )
};

export default Signin;