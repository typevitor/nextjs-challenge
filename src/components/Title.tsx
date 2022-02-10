type TitleProps = {

}

export const Title: React.FunctionComponent<TitleProps> = (props) => {
    return (
        <h1 className="text-3xl m-4 text-black text-left dark:text-white">
            {props.children}
        </h1>
    )
}