import ImageUploaderCard from '../ImageUploaderCard/Index';

function Index() {
  return (
    <>
         <div className="flex flex-col md:flex-row md:flex-wrap gap-10 px-2 py-4 md:py-8 md:w-screen h-screen justify-center items-center scroll-smooth">
            <ImageUploaderCard />
        </div>
    </>
  )
}

export default Index