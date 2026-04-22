

export default function FormInputs() {

    return(
        <form action="POST" className="flex flex-col gap-2 w-full">
            <input type="email" placeholder="Email address*" className="w-full h-14.25 border-1 border-gray-400 rounded-sm px-[16px] py-[14px] text-gray-500" required/>
            <input type="password" placeholder="Password (8+ characters)*" className="w-full h-14.25 border-1 border-gray-400 rounded-sm px-[16px] py-[14px] text-gray-500" required />
        </form>
    )
}