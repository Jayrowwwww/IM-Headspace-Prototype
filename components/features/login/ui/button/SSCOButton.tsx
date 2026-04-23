import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

export default function SSCOButton() {

    return (
        <button className="flex justify-center items-center w-full h-[48px] bg-gray-200 text-black py-3 rounded-full hover:bg-gray-300 transition duration-300">
            <FontAwesomeIcon icon={faLock} className="w-7 h-7 mr-4" />
            Log In with SSO
        </button>
    )
}