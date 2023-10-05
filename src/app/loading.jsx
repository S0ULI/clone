import Image from "next/image"

const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
        <Image src='spinner.svg' alt='loading...' width={150} height={150}/>
    </div>
  )
}

export default Loading