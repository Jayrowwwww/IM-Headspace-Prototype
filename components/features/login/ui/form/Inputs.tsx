import Link from "next/link"

export default function FormInputs() {

    return (
        <form action="POST" className="flex flex-col gap-4 w-full">
            <input type="email" placeholder="Email address*" className="w-full h-14 border border-gray-300 rounded-xl px-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#0050FF] focus:ring-1 focus:ring-[#0050FF] transition-all bg-white" required />
            <input type="password" placeholder="Password (8+ characters)*" className="w-full h-14 border border-gray-300 rounded-xl px-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#0050FF] focus:ring-1 focus:ring-[#0050FF] transition-all bg-white" required />
            <Link href="/" className="text-[#FF6700] hover:underline">Forgot password?</Link>

            <div className="flex text-[14px] gap-3">
                <input type="checkbox" name="agree" id="agree" />
                <p className="text-black">I agree to Headspace&apos;s
                    <span className="ml-1 mr-1"><Link href="/" className="text-[#0C6ff9] hover:underline">Terms & Conditions</Link></span>
                    and acknowledge the
                    <span className="ml-1 mr-1"><Link href="/" className="text-[#0C6FF9] hover:underline">Privacy Policy</Link></span>.
                </p>
            </div>

            <input type="submit" value="Log In" className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition duration-300" />
        </form>
    )
}