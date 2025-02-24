
function Image({src}: {src: string}) {
  return (
   <>
      <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img src={src} alt="mockup" />
      </div>    
   </>
  )
}

export default Image