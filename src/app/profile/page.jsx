import { UserProfile } from "@clerk/nextjs"
import SectionWrapper from "../components/layout/SectionWrapper"

const ProfilePage = () => {
  return (
    <SectionWrapper>
      <UserProfile/>
    </SectionWrapper>
  )
}

export default ProfilePage