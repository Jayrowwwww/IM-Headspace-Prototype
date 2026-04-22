import Link from "next/link";
import FormInputs from "./Inputs";
import LoginButton from "../button/LoginButton";
import AppleButton from "../button/AppleButton";
import FacebookButton from "../button/FacebookButton";
import GoogleButton from "../button/GoogleButton";
import SpotifyButton from "../button/SpotifyButton";
import SSCOButton from "../button/SSCOButton";

export default function LoginForm(){

    return(
        <div className="h-[610px] w-[600px] font-brother bg-white rounded-md shadow-lg flex flex-col items-center justify-center gap-8 p-[16px]">
            <h1 className="text-[40px] font-extrabold text-[#3A3938]">Log In</h1>
            <div className="flex font-[16px]">
                <p className="text-gray-500">New to Headspace? </p>
                <Link href="/" className="text-[#FF6700] hover:underline">Sign up for free</Link>
            </div>
            
            <div className="flex flex-col w-full gap-3">
                <FormInputs/>       
                <Link href="/" className="text-[#FF6700] hover:underline">Forgot password?</Link>
            </div>

           <div className="flex text-[14px] gap-3">
                <input type="checkbox" name="agree" id="agree" />
                <p className="text-black">I agree to Headspace’s <span><Link href="/" className="text-[#0C6ff9] hover:underline">Terms & Conditions</Link></span> and acknowledge the <span><Link href="/" className="text-[#0C6FF9] hover:underline">Privacy Policy</Link></span>.</p>
           </div>

            <div className="flex flex-col w-full gap-2">
                <LoginButton/>
                <div className="flex h-[48px] gap-2">
                    <AppleButton/>
                    <FacebookButton/>
                    <GoogleButton/>
                    <SpotifyButton/>
                </div>
                <SSCOButton/>
            </div>
        </div>
    )
}