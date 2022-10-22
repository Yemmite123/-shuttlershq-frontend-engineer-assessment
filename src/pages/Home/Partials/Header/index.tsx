import Container from "../../../../Components/Container"
import Pill from "../../../../Components/Pill"
import { getSVGIcon } from "../../../../Utils"

export const Header = () => {
    return (
        <Container className="!px-0 border-b !py-6">
            <div className="flex md:flex-row flex-col md:gap-0 gap-3 justify-between">
                <div>
                    <h2 className="text-3xl font-semibold">
                        Your cards
                    </h2>
                    <span className="text-slate-600">
                        Welcome back, Olivia!
                    </span>
                </div>
                <div>
                    <div className="flex gap-2">
                        <Pill className="!rounded-lg cursor-pointer">
                            <div className="flex items-center gap-2">
                                <img src={getSVGIcon("refresh.svg")} alt="" />
                                <span className="md:text-sm font-medium">
                                    Sync accounts
                                </span>
                            </div>
                        </Pill>
                        <Pill className="!rounded-lg bg-primary text-white !px-4 cursor-pointer">
                            <div className="flex items-center gap-2">
                                <span className="md:text-sm">
                                    Add card
                                </span>
                            </div>
                        </Pill>
                    </div>
                </div>
            </div>

        </Container>
    )
}
