import SectionWrapper from "./components/layout/SectionWrapper"

// import Link from 'next/link'
const NotFound = () => {
  return (
    <SectionWrapper mSt='flex justify-center items-center h-screen'>
        <div className="flex flex-col gap-2 items-center justify-center">
            <h2 className="text-xl">The Page you were Looking for Does not Exist 🥺</h2>
            <p>Maybe you can Start from Here</p>
            <a href='/' className='bg-secondary-color hover:bg-primary-color rounded-xl py-2 px-4 mt-4' >Home Page</a>
        </div>
    </SectionWrapper>
  )
}

export default NotFound