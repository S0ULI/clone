import { UserProfile } from "@clerk/nextjs"
import SectionWrapper from "../components/layout/SectionWrapper"

const ProfilePage = () => {
  return (
    <SectionWrapper>
      <UserProfile appearance={{
        variables:{
          colorBackground: '#1f1f1f',
          colorAlphaShade: '#002A33',
          colorDanger: '#FF0000',
          colorInputBackground: '#EAD8BF',
          colorInputText: '#1f1f1f',
          colorPrimary: '#FF6517',
          colorText: '#f1f1f1',
          borderRadius: '0.75rem'
        },
        elements : {
          rootBox: 'w-full !p-0 !m-0',
          card: '!p-0 !m-0 w-full',
          scrollBox: 'max-w-[740px]'
        }
        }}/>
    </SectionWrapper>
  )
}

export default ProfilePage