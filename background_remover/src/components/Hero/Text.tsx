
function Text({title,  subtitle}: {title: string, subtitle: string}) {
  return (
    <>
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">{ title }</h1>
        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{ subtitle }</p>
    </>
  )
}

export default Text

