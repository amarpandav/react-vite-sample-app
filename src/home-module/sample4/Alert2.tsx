import {ReactNode} from "react";

interface Props{
    children: ReactNode;
}

export default function Alert2 (props: Props) {
    return (
        <>
            <div className="alert alert-primary" role="alert">
                {props.children}
            </div>
        </>
    )
}
