import { useState } from "react";
import { getLogo, getSVGIcon } from "../../Utils"
import Container from "../Container";

const navLinks = [
    { title: "Overview", icon: "activity.svg" },
    { title: "Notification", icon: "bell.svg", notifications: 23 },
    { title: "Analytics", icon: "stack.svg" },
    { title: "Saved reports", icon: "star.svg" },
    { title: "Scheduled reports", icon: "clock.svg" },
    { title: "User reports", icon: "users.svg" },
    { title: "Manage notifications", icon: "settings.svg" },

]

interface SideBarProps {
    isActive: boolean;
    toggleIsActive: (value: boolean) => void;
}

const Sidebar: React.FC<SideBarProps> = (props) => {

    return (
        <div onMouseEnter={() => props.toggleIsActive(true)} onMouseLeave={() => props.toggleIsActive(false)} className={`h-full bg-dark ${props.isActive ? "" : "hidden"}`}>
            <Container className="py-10 px-4 h-[95vh]">
                <div className="text-white ">
                    <h3 className="">
                        Dashboard
                    </h3>
                </div>
                <div className="flex flex-col justify-between h-full">
                    <div className="mt-4">
                        <div className="flex flex-col gap-1 text-white">
                            {navLinks.map((link, index) => {
                                return (
                                    <div key={index} className={`flex cursor-pointer justify-between py-2 px-4 w-[240px] rounded bg-primary hover:bg-[#9E77ED]`}>
                                        <div className="flex gap-2">
                                            <img src={getSVGIcon(link.icon)} alt="" />
                                            <div className="text-sm font-normal">
                                                {link.title}
                                            </div>
                                        </div>
                                        {link.notifications ? <div className="flex">
                                            <div className="rounded-xl bg-white text-primary font-medium text-xs px-2 py-1">
                                                {link.notifications}
                                            </div>
                                        </div> : <div></div>
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <div className="text-sm font-medium text-white">
                                Olivia
                            </div>
                            <div className="text-sm  text-white">
                                olivia@untitledui.com
                            </div>
                        </div>
                        <div className="cursor-pointer">
                            <img className="w-6" src={getSVGIcon("logout.svg")} alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>)
}

const topNavIcons = ["home", "bell", "stack", "check", "flag", "users"]
const bottomNavIcons = ["life-bouy", "settings"]

const Aside = () => {

    const [sideNavActive, setSideNavActive] = useState(false);
    const [activeTab, setActiveTab] = useState("home");

    return (
        <section className={`aside h-screen bg-primary md:flex hidden`}>
            <div className="px-4 pt-8">
                <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col gap-8">
                        <div>
                            <img className="mx-auto" src={getLogo("logo.png")} alt="" />
                        </div>
                        <div onMouseEnter={() => setSideNavActive(true)} className="flex flex-col gap-2">
                            {topNavIcons.map((iconName, index) => {
                                return <div key={index} onClick={() => setActiveTab(iconName)} className={`p-3 cursor-pointer rounded-lg  ${activeTab == iconName ? "bg-[#7F56D9]" : ""}`}>
                                    <img className="mx-auto" src={getSVGIcon(iconName + ".svg")} alt="" />
                                </div>
                            })}
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col gap-2 pb-12">
                            {bottomNavIcons.map((iconName, index) => {
                                return <div key={index} className={`p-3 cursor-pointer rounded-lg`}>
                                    <img className="mx-auto" src={getSVGIcon(iconName + ".svg")} alt="" />
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Sidebar isActive={sideNavActive} toggleIsActive={setSideNavActive} />
        </section>
    )
}

export default Aside;