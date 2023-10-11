import { SignIn } from '@clerk/nextjs';
import FormWrapper from '@/app/components/layout/FormWrapper';

const SignInPage = () => {
  return (
    <FormWrapper>
      <div>
        <SignIn />
      </div>
    </FormWrapper>
  );
};

export default SignInPage;
