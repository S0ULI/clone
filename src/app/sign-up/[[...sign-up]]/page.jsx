import FormWrapper from '@/app/components/layout/FormWrapper';
import { SignUp } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <FormWrapper>
      <div>
        <SignUp
          appearance={{
            variables: {
              borderRadius: '0.75rem',
              colorInputBackground: '#EAD8BF',
              colorInputText: '#1f1f1f',
              colorPrimary: '#FF6517',
              colorText: '#f1f1f1',
              colorDanger: '#FF0000',
              colorBackground: '#1f1f1f',
            },
          }}
        />
      </div>
    </FormWrapper>
  );
};

export default SignInPage;
