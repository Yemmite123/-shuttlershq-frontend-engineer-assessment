interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
}

const Container: React.FC<ContainerProps> = (props) => {
    return (
        <div {...props} className={`container md:p-3 p-2 ${props.className}`}>
            {props.children}
        </div>
    )
}

export default Container;