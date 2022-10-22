import { getLogo } from "../../Utils";

interface NavbarProps {
    toggleSideBar: (value: boolean) => void;
}
const Navbar: React.FC<NavbarProps> = (props) => {
    return (
        <header className="navbar md:hidden ">
            <div className="flex justify-between px-3 py-3 border-b items-center">
                <div className="flex gap-2 items-center">
                    <img src={getLogo("logo.png")} alt="" />
                    <span className="font-medium">
                        Untitiled UI
                    </span>
                </div>
                <svg onClick={() => props.toggleSideBar(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                </svg>
            </div>
        </header>
    )
}

export default Navbar;