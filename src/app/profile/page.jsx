import UserProfile from "../components/auth/UserProfile"
import SectionWrapper from "../components/layout/SectionWrapper"

const ProfilePage = () => {
  return (
    <SectionWrapper>
      <h1>Profile</h1>
      <div className="flex flex-col justify-center items-center w-full">
      <UserProfile/>
      </div>
    </SectionWrapper>
  )
}

export default ProfilePage