import Image from "next/image"
import ProgressBar from "./components/progressBar/ProgressBar"

const Loading = () => {
  return (
    <>
    <ProgressBar/>
    <div className="w-full h-screen flex justify-center items-center">
        <Image src='/spinner.svg' alt='loading...' width={75} height={75} style={{width: '75px', height: '75px'}}/>
    </div>
    </>
  )
}

export default Loading