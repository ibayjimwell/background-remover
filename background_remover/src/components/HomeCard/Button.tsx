
function Button({text}: {text: string}) {
  return (
    <>
        <button className="px-8 py-2 float-end text-sm font-bold text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            { text }
        </button>
    </>
  )
}

export default Button