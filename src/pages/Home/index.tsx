import Container from "../../Components/Container";
import { Header } from "./Partials/Header";
import { Sidebar } from "./Partials/Sidebar";
import { SpendingOverview } from "./Partials/SpendingOverview";
import { BalanceOverview } from "./Partials/BalanceOvertime";
import { SpendingOverview2 } from "./Partials/SpendingOvertime2";
import { useState } from "react";

const Dashboard = () => {
    return (
        <Container className="!md:px-6 !px-4 relative">
            <Header />
            <Container className="!px-0 !py-8">
                <div className="flex md:flex-row flex-col gap-12">
                    <Sidebar />
                    <div className="flex-1 flex flex-col md:gap-8 gap-4">
                        <SpendingOverview />
                        <BalanceOverview />
                        <SpendingOverview2 />
                    </div>
                </div>
            </Container>
        </Container>
    )
}

export default Dashboard;