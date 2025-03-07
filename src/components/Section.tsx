import {ReactNode} from "react";

/*If i use this i got error: property id does not exist.
This is simply because TypeScript doesn’t know that our component supports native HTML attributes like onClick, id, etc.
Hence we have to explicitly tell TypeScript what type of interface is this, in our case its a button
interface Props {
    title: string;
    children: ReactNode;
}*/

//Example: Forwarding Props With Destructuring
/*export function Section({title, children, ...props}: Props) {
    return <section {...props}>
        <h2>{title}</h2>
        {children}
    </section>
}*/

interface Props extends React.HTMLAttributes<HTMLElement> {
    title: string;
    children: ReactNode;
}

//Example: Forwarding Props Without Destructuring
export function Section(props: Props) {
    return <section {...props}>
        <h2>{props.title}</h2>
        {props.children}
    </section>
}