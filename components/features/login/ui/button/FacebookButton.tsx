import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"

export default function FacebookButton() {

    return(
        <button className="flex justify-center items-center w-full bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 transition duration-300">
            <FontAwesomeIcon icon={faFacebook} className="mr-2 h-8 w-8" />
        </button>
    )
}