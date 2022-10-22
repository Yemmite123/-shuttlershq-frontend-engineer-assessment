import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
import Pill from "../../../../Components/Pill";

export const BalanceOverview = () => {
    const series: ApexAxisChartSeries = [
        {
            name: 'series1',
            data: [21, 35, 38, 31, 42, 49, 40, 44, 52, 53, 58, 72]
        },
        {
            name: 'series2',
            data: [11, 16, 20, 21, 27, 34, 30, 24, 42, 43, 48, 62]

        },
        {
            name: 'series3',
            data: [1, 5, 8, 5, 12, 19, 10, 14, 22, 23, 28, 42]

        }
    ]
    const options: ApexOptions = {
        chart: {
            type: 'area',
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },

        stroke: {
            width: 2,
            curve: 'smooth',
            colors: ["#53389E", "#7F56D9"]
        },
        legend: {
            show: false
        },
        xaxis: {
            labels: {
                style: {
                    fontFamily: "Inter"
                }
            },
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        yaxis: {
            show: false
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 0.05,
                colorStops: [

                    [
                        {
                            offset: 0,
                            color: '#53389E',
                            opacity: 0.1
                        },
                        {
                            offset: 100,
                            color: '#53389E',
                            opacity: 0
                        },
                    ],
                    [
                        {
                            offset: 0,
                            color: '#53389E',
                            opacity: 0.1

                        },
                        {
                            offset: 100,
                            color: '#53389E',
                            opacity: 0
                        },
                    ],

                    [
                        {
                            offset: 0,
                            color: '#53389E',
                            opacity: 0.1

                        },
                        {
                            offset: 100,
                            color: '#53389E',
                            opacity: 0
                        },
                    ],
                ]

            },

            // colors: ["#53389E", "#7F56D9"]
        },
        // labels: ['1', "2"],
    };


    return (
        <div className="w-full mb-5">
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
                                This month
                            </div>
                        </Pill>
                        <Pill className="!rounded-lg !rounded-l-none !border-l-0 cursor-pointer">
                            <div className="flex gap-2 items-center text-sm font-medium">
                                <div className="md:block hidden"> This month</div>
                                <div className="md:hidden block border border-slate-700 w-5 h-5 rounded-full">
                                </div>
                            </div>
                        </Pill>
                    </div>
                </div>
            </div>

            <div className="w-full justify-center h-[200px]">
                <Chart
                    options={options}
                    series={series}
                    type="area"
                    width="100%"
                    height={240}
                />
            </div>


        </div>

    )
}