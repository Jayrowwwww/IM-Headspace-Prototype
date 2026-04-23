import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";

export default function AppleButton() {

    return (
        <button className="flex justify-center items-center w-full h-[48px] bg-black text-white py-3 rounded-full hover:bg-black/80 transition duration-200">
            <FontAwesomeIcon icon={faApple} className="h-7 w-7" />
        </button>
    )
}