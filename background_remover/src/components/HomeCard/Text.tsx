
function Text({href, title, desc}: {href: string, title: string, desc: string}) {
  return (
    <>
        <a href={href}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ title }</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{ desc }</p>
    </>
  )
}

export default Text