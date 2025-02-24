import Card from "./Card"

function Index() {
  return (
    <>
         <div className="flex flex-col md:flex-row gap-4 px-2 py-4 md:py-8 md:w-screen md:justify-center">
            <Card 
                title="Continue to background remover app"
                desc="If you want to remove the background without saving the image and just download it click continue ."
                buttonText="Continue"
                isForLogin={false}
                href="#"
            />
            <Card 
                title="Login to your account"
                desc="If you want to have saving features when removing the background you need to Login or Signup."
                buttonText="Login"
                isForLogin={true}
                href="#"
            />
        </div>
    </>
  )
}

export default Index