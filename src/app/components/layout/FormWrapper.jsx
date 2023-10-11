import SectionWrapper from "./SectionWrapper"

const FormWrapper = ({children}) => {
  return (
    <SectionWrapper mSt='flex justify-center items-center' mtn='mt-14'>
        <div>{children}</div>
    </SectionWrapper>
  )
}

export default FormWrapper