type TitleProps = {

}

export const Title: React.FunctionComponent<TitleProps> = (props) => {
    return (
        <h1 className="text-5xl my-6 text-black text-center">{props.children}</h1>
    )
}