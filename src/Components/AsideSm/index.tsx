import { useState } from "react";
import { getLogo, getSVGIcon } from "../../Utils"
import Container from "../Container";

interface NavlinkProps {
    title: string;
    icon: string;
    subLink: boolean;
};

const NavLink: React.FC<NavlinkProps> = (props) => {
    const [sublinkActive, setSubLinkActive] = useState(false);

    return (
        <div className={`ease-in-out duration-100 h-[38px] ${sublinkActive ? "!h-[200px]" : ""}`}>
            <div onClick={() => setSubLinkActive(!sublinkActive)} className={`  flex cursor-pointer justify-between py-2 px-4 rounded hover:bg-purple-50`}>
                <div className="flex gap-2 items-center">
                    <img src={getSVGIcon(props.icon)} alt="" />
                    <div className="text-sm font-medium">
                        {props.title}
                    </div>
                </div>
                {
                    props.subLink ? <div>
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-4 h-4 transition-transform ${sublinkActive ? "-rotate-180" : ""}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div> : <></>
                }
            </div>
            {sublinkActive && props.subLink ? <div className="flex flex-col gap-1">
                <div onClick={() => setSubLinkActive(false)} className="pl-12 py-2 rounded cursor-pointer hover:bg-purple-50">
                    <div className="text-sm font-medium">
                        Overview
                    </div>
                </div>
                <div className="pl-12 py-2 rounded cursor-pointer hover:bg-purple-50">
                    <div className="text-sm font-medium">
                        Notifications
                    </div>
                </div>
                <div className="pl-12 py-2 rounded cursor-pointer hover:bg-purple-50">
                    <div className="text-sm font-medium">
                        Analytics
                    </div>
                </div>
                <div className="pl-12 py-2 rounded cursor-pointer hover:bg-purple-50">
                    <div className="text-sm font-medium">
                        Reports
                    </div>
                </div>
            </div> : <></>
            }
        </div>
    )
}

interface AsideSmProps {
    isActive: boolean;
    onClose: (value: boolean) => void;
}

const AsideSm: React.FC<AsideSmProps> = (props) => {
    return (
        <section className={`${props.isActive ? "fixed" : "hidden"} top-0 left-0 z-10 h-screen w-screen bg-slate-200`}>
            <div className="flex w-full h-full">
                <div className="w-10/12 bg-white flex flex-col h-full justify-between">
                    <div className="">
                        <div className="px-4 pt-8">
                            <div className="flex gap-2 items-center">
                                <img src={getLogo("logo.png")} alt="" />
                                <span className="font-medium text-lg">
                                    Untitiled UI
                                </span>
                            </div>
                            <div className="mt-4">
                                <div className="relative">
                                    <input type="text" className="w-full border rounded-lg pl-8 outline-none pr-3 py-2 text-sm placeholder:text-slate-600" placeholder="Search" />
                                    <div className="absolute top-0 left-0 h-full flex items-center justify-center px-3">
                                        <img className="w-4" src={getSVGIcon("search.svg")} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 px-4 flex flex-col gap-1">
                            <NavLink title="Home" icon="home.svg" subLink={true} />
                            <NavLink title="Notifications" icon="bell.svg" subLink={true} />
                            <NavLink title="Projects" icon="stack.svg" subLink={true} />
                            <NavLink title="Tasks" icon="check.svg" subLink={true} />
                            <NavLink title="Reporting" icon="flag.svg" subLink={true} />
                            <NavLink title="Users" icon="users.svg" subLink={true} />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div>
                            <NavLink title="Support" icon="life-bouy.svg" subLink={false} />
                            <NavLink title="Settings" icon="settings.svg" subLink={false} />
                        </div>
                        <div className="flex justify-between py-8 border-t mt-5 pl-12 pr-4">
                            <div>
                                <div className="text-sm font-medium">
                                    Olivia
                                </div>
                                <div className="text-sm">
                                    olivia@untitledui.com
                                </div>
                            </div>
                            <div className="cursor-pointer">
                                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-6 h-6 stroke-slate-800">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center flex-1 pt-4">
                    <svg onClick={() => props.onClose(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>

        </section>
    )
}

export default AsideSm;