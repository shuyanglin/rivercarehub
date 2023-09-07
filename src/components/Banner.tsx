function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
        
        <h1 className="text-5xl">Say 'Hi' to the Rivers</h1>
        <h2 className="mt-5 md:mt-0">
            Welcome to a  {" "} 
            <span className="underline decoration-4 decoration-[#F7AB0A]">
            Conversational Journey</span>
            {" "} with Nature's Flow
        </h2>
    </div>
  )
}

export default Banner