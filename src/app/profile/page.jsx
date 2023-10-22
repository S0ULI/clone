import UserProfile from "../components/auth/UserProfile"
import SectionWrapper from "../components/layout/SectionWrapper"

const ProfilePage = () => {
  return (
    <SectionWrapper>
      <h1>Profile</h1>
      <UserProfile/>
    </SectionWrapper>
  )
}

export default ProfilePage