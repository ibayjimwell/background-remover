import { Link } from "react-router-dom"

function button({isPrimary, text}: {isPrimary: boolean, text: string}) {

  const IsPrimaryHandler = () => {
    if (isPrimary) {
      return (
        <Link to='/main' className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
          { text }
        </Link>
      )
    } else {
      return (
        <a data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-primary-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
          { text }
        </a> 
      )
    }
  }

  return (
    <>
      {IsPrimaryHandler()}
    </>
  )
}

export default button