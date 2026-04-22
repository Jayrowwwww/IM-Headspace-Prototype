import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

export default function SSCOButton() {

    return(
        <button className="flex justify-center items-center w-full bg-gray-200 text-black py-3 rounded-full hover:bg-green-600 transition duration-300">
            <FontAwesomeIcon icon={faLock} className="mr-2 w-8 h-8" />
            Log In with SSCO
        </button>
    )
}