type TitleProps = {

}

export const Title: React.FunctionComponent<TitleProps> = (props) => {
    return (
        <h1 className="text-5xl text-yellow-500">{props.children}</h1>
    )
}