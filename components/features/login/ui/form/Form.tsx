import Link from "next/link";
import FormInputs from "./Inputs";
import AppleButton from "../button/AppleButton";
import FacebookButton from "../button/FacebookButton";
import GoogleButton from "../button/GoogleButton";
import SpotifyButton from "../button/SpotifyButton";
import SSCOButton from "../button/SSCOButton";

export default function LoginForm() {

    return (
        <div className="h-[610px] w-[600px] mt-15 px-8 py-8 font-brother bg-white rounded-xl shadow-lg flex flex-col items-center justify-center gap-8">
            <div className="flex flex-col justify-center items-center gap-3">
                <h1 className="text-[40px] font-extrabold text-[#3A3938]">Log In</h1>
                <div className="flex font-[16px] gap-1">
                    <p className="text-gray-500">New to Headspace? </p>
                    <Link href="/" className="text-[#FF6700] hover:underline">Sign up for free</Link>
                </div>
            </div>

            <div className="flex flex-col w-full gap-2">
                <FormInputs />
                <div className="flex flex-col w-full gap-2">
                    <div className="grid grid-cols-4 gap-2">
                        <AppleButton />
                        <FacebookButton />
                        <SpotifyButton />
                        <GoogleButton />
                    </div>
                    <SSCOButton />
                </div>
            </div>
        </div>
    )
}