interface PillProps extends React.HTMLAttributes<HTMLDivElement> {
}

const Pill: React.FC<PillProps> = (props) => {
    return (
        <div {...props} className={`pill rounded border px-3 py-2 ${props.className}`}>
        </div>
    )
}

export default Pill;