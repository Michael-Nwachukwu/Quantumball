const Button1 = ({ bigText, smallText, toggle, isActive }) => {
    return (
        <button onClick={toggle} className={`text-black transition ease-in-out delay-150 duration-500 hover:-translate-y-1 hover:scale-110 hover:bg-[#2b2b2b] hover:text-white [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.9))] border border-[#2b2b2b] px-3 lg:w-72 lg:py-4 h-12 lg:h-14 rounded-xl lg:rounded-2xl ${ isActive ? 'bg-[#2b2b2b] text-white' : ''}`}>
            <span className="hidden sm:block">{bigText}</span>
            <span className="text-sm sm:hidden">{smallText}</span>
        </button> 
    );
}
 
export default Button1;