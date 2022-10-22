import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
import Pill from "../../../../Components/Pill";

export const SpendingOverview2 = () => {
    const series: ApexAxisChartSeries = [
        {
            name: 'series1',
            data: [81, 55, 58, 51, 72, 74, 60, 84, 72, 53, 58, 72]
        },
        {
            name: 'series2',
            data: [71, 55, 88, 71, 62, 79, 60, 84, 42, 53, 58, 72]

        },
        {
            name: 'series3',
            data: [81, 55, 68, 41, 92, 49, 60, 74, 52, 53, 58, 72]
        }
    ]
    const options: ApexOptions = {
        chart: {
            type: 'bar',
            stacked: true,
            toolbar: {
                show: false
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "42px",
                borderRadius: 7,
            },
        },
        dataLabels: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },

        stroke: {
            width: 0,
            curve: 'smooth',
            // colors: ["#53389E", "#7F56D9"]
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
            colors: ["#53389E", "#7F56D9", "#D6BBFB"]
        },
        // labels: ['1', "2"],
    };


    return (
        <div className="w-full" >
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
                    type="bar"
                    width="100%"
                    height={240}
                />
            </div>


        </div >

    )
}