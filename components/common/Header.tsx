import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/_images/logo.svg";

export default function Header() {

    return(
        <header className="hidden md:flex justify-between items-center bg-white p-4 h-23.75 fixed w-full z-10">
            <Link href="/">
                <Image src={logo} 
                        alt="Logo" 
                        width={221} 
                        height={48} />
            </Link>

            <div className="flex justify-center items-center">
                <nav className="text-[#5A6175] font-lgc tracking-[3px] text-[14px] text-sm flex justify-center items-center mr-4">
                    <Link href="/" className="mr-4">THE SCIENCE</Link>
                    <Link href="/" className="mr-4">BLOG</Link>
                    <Link href="/" className="mr-4">FOR WORK</Link>
                    <Link href="/" className="mr-4">HOW TO MEDITATE</Link>
                    <Link href="/" className="mr-4">HELP</Link>
                    <div className="w-px h-8 bg-[#5A6175] mr-4"></div>
                    <Link href="/" className="mr-4 font-bold">LOG IN</Link>
                </nav>

                <button className="px-8 font-bold h-12 min-h-12 bg-[#0069ff] rounded-3xl shadow-[rgba(0, 0, 0, 0.2) 0px 2px 0px;]">
                    Try for Free
                </button>
            </div>
        </header>
    )
}