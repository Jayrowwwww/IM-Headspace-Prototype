import Image from "next/image";
import GoogleLogo from "@/assets/_images/google.webp";

export default function GoogleButton() {

    return (
        <button className="flex justify-center items-center w-full h-[48px] bg-gray-200 text-gray-800 py-3 rounded-full hover:bg-gray-300 transition duration-300">
            <Image src={GoogleLogo} alt="Google Logo" width={26} height={26} />
        </button>
    )
}