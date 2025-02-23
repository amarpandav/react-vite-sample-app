interface Props{
    children: string;
    color?: 'primary' | 'secondary' | 'success' | 'warning'; //optional
    onClick: () => void;
}

export default function Button ({children, color = 'secondary', onClick}: Props) {

    return (
        <>
            <button type="button" className={"btn btn-"+color} onClick={onClick}>{children}</button>
        </>
    )
}