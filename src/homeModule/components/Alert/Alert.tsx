interface Props{
    children: string;
}

export default function Alert (props: Props) {
    return (
        <>
            <div className="alert alert-primary" role="alert">
                {props.children}
            </div>
        </>
    )
}