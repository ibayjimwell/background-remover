import Text from "./Text"
import Button from "./Button"
import LoginModal from "../LoginModal/Index"
import { Link } from "react-router-dom"

function Card({title, desc, buttonText, isForLogin = false, href}: {title: string, desc: string, buttonText: string, isForLogin: boolean, href: string}) {

    const isForLoginHandler = () => {
        if (!isForLogin) {
            return (
                <Link to="/main">
                    <Button 
                        text={buttonText}
                    />
                </Link>
            )
        } else {
            return (
                    <Button 
                    data-modal-target="authentication-modal" 
                    data-modal-toggle="authentication-modal"
                    text={buttonText}
                />
            )
        }
    }

  return (
    <>
        <article className="max-w-lg md:max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow  hover:bg-primary-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

            <Text 
                href={href}
                title={title}
                desc={desc}
            />

            { isForLoginHandler() }
            
            <LoginModal />

        </article>
    </>
  )
}

export default Card