import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpotify } from "@fortawesome/free-brands-svg-icons"

export default function SpotifyButton() {

    return (
        <button className="flex justify-center items-center w-full h-[48px] bg-green-800 text-white py-3 rounded-full hover:bg-green-600 transition duration-300">
            <FontAwesomeIcon icon={faSpotify} className="h-7 w-7" />
        </button>
    )
}