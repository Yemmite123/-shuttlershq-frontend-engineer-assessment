interface ProgressBarProps {
    value: number;
}

const ProgressBar: React.FC<ProgressBarProps> = (props) => {
    return (
        <div className="w-full flex gap-2 items-center">
            <div className="bg-slate-100 relative w-full rounded-xl h-2">
                <div style={{ width: props.value + "%" }} className="h-2 absolute left-0 top-0 rounded-xl bg-primary"></div>
            </div>
            <div className="text-xs font-medium">
                {props.value}%
            </div>
        </div>
    )
}

export default ProgressBar;