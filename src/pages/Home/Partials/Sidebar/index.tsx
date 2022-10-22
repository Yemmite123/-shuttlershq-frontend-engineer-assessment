import Container from "../../../../Components/Container"
import { getSVGIcon } from "../../../../Utils"
import ProgressBar from "../../Components/ProgressBar"

const activeUserStats = [
    { country: "United States", icon: "usa.svg" },
    { country: "India", icon: "india.svg" },
    { country: "United Kingdom", icon: "uk.svg" },
    { country: "Australia", icon: "australia.svg" },
    { country: "Canada", icon: "canada.svg" },
]

const ActiveUsers = () => {
    return (
        <Container className="border rounded !py-4 md:w-[348px] w-full">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="font-semibold">
                        Active users right now!
                    </h3>
                </div>
                <div>
                    <img src={getSVGIcon("ellipsis-vertical.svg")} alt="" className="w-5 cursor-pointer" />
                </div>
            </div>
            <div className="mt-6">
                <h2 className="text-4xl font-semibold">
                    10.8k
                </h2>
            </div>
            <div className="mt-4">
                <div className="flex flex-col gap-3">
                    {
                        activeUserStats.map((user, index) => {
                            return <div key={index} className="flex gap-3">
                                <div>
                                    <img className="w-6" src={getSVGIcon(user.icon)} alt="" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-sm text-slate-800">
                                            {user.country}
                                        </span>
                                        <ProgressBar value={Math.ceil(Math.random() * 100)} />
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </Container>
    )
}

const transactionNames = ["Spotify", "A Coffee", "Stripe", "Figma", "TBF Bakery", "Rosso Antico", "Cherry Moon"]

const RecentTransaction = () => {
    return (
        <Container className="!p-0 md:w-[348px] w-full">
            <div className="flex justify-between items-center pb-6 border-b">
                <div>
                    <h3 className="font-semibold">
                        Recent transactions
                    </h3>
                </div>
                <div>
                    <img src={getSVGIcon("ellipsis-vertical.svg")} alt="" className="w-5 cursor-pointer" />
                </div>
            </div>
            <div className="flex flex-col">

                {
                    transactionNames.map((name, index) => {
                        return <div key={index} className="py-3 border-b flex justify-between items-center">
                            <div>
                                <div className="font-medium text-sm">{name}</div>
                                <div className="text-slate-700 text-sm">-${(Math.random() * 90).toFixed(2)}</div>
                            </div>
                            <div className="flex gap-12">
                                <div className="text-slate-500 text-sm">
                                    Wednesday 1:00pm
                                </div>
                                <div>
                                    <img src={getSVGIcon("edit.svg")} alt="" />
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </Container>
    )
}

export const Sidebar = () => {
    return (
        <div className="flex flex-col gap-10">
            <ActiveUsers />
            <RecentTransaction />
        </div>
    )
}
