import React from 'react'
import Form from './Form'
import Button from './Button'
import CloseButton from './CloseButton'
import Adds from './Adds'

function Index() {

    const [isSignup, setIsSignup] = React.useState(false)

    const isNotSignupHandler = () => {
        if (!isSignup) {
            return (
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Not registered? <a onClick={() => setIsSignup(!isSignup)} className="text-blue-700 hover:underline dark:text-blue-500 cursor-pointer">Create account</a>
                </div>
            )
        }
    }

  return (
    <>
        <div id="authentication-modal" tabIndex={-1} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-md max-h-full">
                {/* <!-- Modal content --> */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    {/* <!-- Modal header --> */}
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            { isSignup ? 'Signup' : 'Login' } to your account
                        </h3>
                        <CloseButton onClick={() => setIsSignup(!isSignup)} />
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className="p-4 md:p-5">
                        <form className="space-y-4">
                            <Form isSignup={isSignup}/>
                            {!isSignup ? <Adds /> : ''}
                            <Button text={isSignup ? 'Sign up' : 'Login'} />
                            {isNotSignupHandler()}
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Index