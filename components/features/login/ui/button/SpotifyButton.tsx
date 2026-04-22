import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpotify } from "@fortawesome/free-brands-svg-icons"

export default function SpotifyButton() {

    return(
        <button className="flex justify-center items-center w-full bg-green-800 text-white py-3 rounded-full hover:bg-green-600 transition duration-300">
            <FontAwesomeIcon icon={faSpotify} className="mr-2 h-8 w-8" />
        </button>
    )
}