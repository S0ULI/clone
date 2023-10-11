import FormWrapper from '@/app/components/layout/FormWrapper';
import { SignUp } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <FormWrapper>
      <div>
        <SignUp />
      </div>
    </FormWrapper>
  );
};

export default SignInPage;
