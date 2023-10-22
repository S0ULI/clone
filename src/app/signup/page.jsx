import SectionWrapper from '@/app/components/layout/SectionWrapper';
import SignUpForm from '../components/forms/SignUpForm';

const SignUp = () => {
  return (
    <div className='flex flex-col gap-8 w-full'>
      <SectionWrapper mSt="w-full flex flex-col jestify-center items-center">
        <SignUpForm />
      </SectionWrapper>
    </div>
  )
};

export default SignUp;
