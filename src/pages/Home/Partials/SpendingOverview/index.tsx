import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
import Pill from "../../../../Components/Pill";

const spendingNames = [
    "Subscription",
    "Mortgage",
    "Investing",
    "Food and dining",
    "Groceries",
    "Other"
];

const colors = ["orange", "blue", "purple", "green", "purple", "yellow"]

export const SpendingOverview = () => {
    const series: ApexNonAxisChartSeries = [80, 86]
    const options: ApexOptions = {
        chart: {
            height: 350,
            width: 350,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '55%',
                },
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontFamily: "Inter",
                        fontSize: '30px',
                        fontWeight: "600",
                        color: "#101828"
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        color: "#667085",
                        fontSize: "14px",
                        fontFamily: "Inter",
                        formatter: function (w: string) {
                            return '$23,230'
                        }
                    }
                }
            }
        },
        stroke: {
            lineCap: 'round'
        },
        fill: {
            colors: ["#53389E", "#7F56D9"]
        },
        labels: ['1', "2"],
    };


    return (
        <div className="w-full">
            <div className="pt-4 pb-4 border-b">
                <div className="flex md:flex-row flex-col md:gap-0 gap-3 justify-between">
                    <h3 className="font-medium">
                        Monthly Spending
                    </h3>
                    <div className="flex">
                        <Pill className="!rounded-lg !rounded-r-none border-r-0 cursor-pointer bg-slate-50">
                            <div className="flex gap-2 items-center text-sm font-medium">
                                <div className="bg-green-500 rounded-full w-2 h-2"></div>
                                <span> This month</span>
                            </div>
                        </Pill>
                        <Pill className="!rounded-none cursor-pointer">
                            <div className="flex gap-2 items-center text-sm font-medium">
                                Last month
                            </div>
                        </Pill>
                        <Pill className="!rounded-lg !rounded-l-none !border-l-0 cursor-pointer">
                            <div className="flex gap-2 items-center text-sm font-medium">
                                <svg className="md:block hidden" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M7.00008 1.16675V12.8334M1.16675 7.00008H12.8334" stroke="#667085" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <div className="md:block hidden"> Custom</div>
                                <div className="md:hidden block border border-slate-700 w-5 h-5 rounded-full">
                                </div>
                            </div>
                        </Pill>
                    </div>
                </div>
            </div >
            <div className="flex md:flex-row flex-col items-center">
                <div className="md:w-[300px] md:flex justify-center">
                    <Chart
                        options={options}
                        series={series}
                        type="radialBar"
                        width="400"
                    />
                </div>
                <div className="flex-1 w-full">
                    <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
                        {
                            spendingNames.map((name, index) => {
                                return (
                                    <div key={index}>
                                        <div className="flex gap-2 items-center">
                                            <div style={{ backgroundColor: colors[index] }} className="w-[8px] h-[8px] rounded-full">
                                            </div>
                                            <div className="font-medium text-sm text-slate-600">
                                                {name}
                                            </div>
                                        </div>
                                        <div className="text mt-1">
                                            <span className="text-2xl font-semibold">
                                                ${(Math.random() * 200).toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div >

    )
}