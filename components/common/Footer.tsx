import Link from "next/link"
import Image from "next/image"
import AppStore from "@/assets/_images/app-store.png"
import GooglePlay from "@/assets/_images/google-play.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faInstagram, faTwitter, faLinkedin, faFacebook, faYoutube} from "@fortawesome/free-brands-svg-icons"

export default function Footer(){

    return(
        <footer className="flex flex-col min-h-[87vh] h-full font-lgc tracking-wider bg-white text-[#5A6175] p-8 justify-center items-center">
            <div className="flex justify-between items-start w-full max-w-7xl">
                <div className="flex-col flex">
                    <h1 className="font-bold">
                        GET SOME HEADSPACE
                    </h1>

                    <nav className="flex flex-col gap-4 text-[14px] mt-3.5">
                        <Link href="/">SUBSCRIBE</Link>
                        <Link href="/">REDEEM A CODE</Link>
                        <Link href="/">STUDENT PLAN</Link>
                        <Link href="/">SEND A GIFT</Link>
                        <Link href="/">GUIDED MEDITATION</Link>
                        <Link href="/">MEDITATION FOR WORK</Link>
                        <Link href="/">MEDITATION FOR KIDS</Link>
                        <Link href="/">MEDITATION ON SLEEP</Link>
                        <Link href="/">MEDITATION ON FOCUS</Link>
                        <Link href="/">MEDITATION ON STRESS</Link>
                        <Link href="/">MEDITATION ON ANXIETY</Link>
                    </nav>
                </div>
                <div>
                    <div>
                        <h1 className="font-bold">
                            OUR COMMUNITY
                        </h1>

                        <nav className="flex flex-col gap-4 text-[14px] mt-3.5">
                            <Link href="/">BLOG</Link>
                            <Link href="/">JOIN OUR FB GROUP</Link>
                        </nav>
                    </div>
                    <div>
                        <h1 className="font-bold mt-3.5">
                            ABOUT US
                        </h1>

                        <nav className="flex flex-col gap-4 text-[14px] mt-3.5">
                            <Link href="/">ABOUT HEADSPACE</Link>
                            <Link href="/">ABOUT ANDY PUDDICOME</Link>
                            <Link href="/">ANDY&apos;S BOOKS</Link>
                            <Link href="/">PRESS AND MEDIA</Link>
                            <Link href="/">CAREERS</Link>
                            <Link href="/">SITE MAP</Link>
                        </nav>
                    </div>
                </div>
                <div>
                    <div>
                        <h1 className="font-bold">
                            SUPPORT
                        </h1>

                        <nav className="flex flex-col gap-4 text-[14px] mt-3.5">
                            <Link href="/">HELP CENTER</Link>
                            <Link href="/">CONTACT US</Link>
                        </nav>
                    </div>

                    <div>
                        <h1 className="font-bold mt-3.5">
                            PARTNERSHIP
                        </h1>

                        <nav className="flex flex-col gap-4 text-[14px] mt-3.5">
                            <Link href="/">RESEARCH PARTNERS</Link>
                            <Link href="/">BRAND PARTNERS</Link>
                            <Link href="/">PHILANTROPY</Link>
                            <Link href="/">PARTNERSHIP REQUEST</Link>
                        </nav>
                    </div>
                </div>
                <div>
                    <h1 className="font-bold">
                        GET THE APP
                    </h1>

                    <nav className="flex flex-col gap-4 text-[14px] mt-3.5">
                        <Link href="/">
                            <Image src={AppStore} alt="App Store" width={150} height={50} />
                        </Link>
                        <Link href="/">
                            <Image src={GooglePlay} alt="Google Play" width={150} height={50} />
                        </Link>
                    </nav>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex justify-center items-center gap-8 mt-8 mb-4">
                    <div className="content-center h-6 w-6">
                        <FontAwesomeIcon icon={faInstagram}/>
                    </div>
                    <div className="content-center h-6 w-6">
                        <FontAwesomeIcon icon={faTwitter}/>
                    </div>
                    <div className="content-center h-6 w-6">
                        <FontAwesomeIcon icon={faFacebook}/>
                    </div>
                    <div className="content-center h-6 w-6">
                        <FontAwesomeIcon icon={faYoutube}/>
                    </div>
                    <div className="content-center h-6 w-6">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </div>
                </div>
                <div className="flex gap-5 tracking-widest">
                    <h1>
                        © 2026 HEADSPACE INC.
                    </h1>
                    <Link href="/">TERMS & CONDITIONS</Link>
                    <Link href="/">PRIVACY POLICY</Link>
                    <Link href="/">COOKIE POLICY</Link>
                    <Link href="/">SECURITY</Link>
                    <Link href="/">CONSUMER HEALTH DATA</Link>
                    <Image src="https://static.headspace.com/legal/privacyoptions.svg" alt="App Store" 
                        width={30} 
                        height={14} />
                    <Link href="/">CA CCPA NOTICE</Link>
                </div>
                <div className="flex justify-center items-center font-[16px]">
                    <select value="language" className="flex justify-center items-center outline-none w-32.5 h-13.5 p-4 bg-[#FAF7F2]">
                        <option value="en" className="border-none p-4">ENGLISH</option>
                        <option value="de" className="border-none p-4">DEUTSCH</option>
                        <option value="es" className="border-none p-4">ESPAÑOL</option>
                        <option value="fr" className="border-none p-4">FRANÇAIS</option>
                        <option value="pt" className="border-none p-4">PORTUGUÊS</option>
                    </select>
                </div>
            </div>
        </footer>
    )
}