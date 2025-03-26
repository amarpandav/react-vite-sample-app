
/*
If i use this i got error: property onClick does not exist.
This is simply because TypeScript doesn’t know that our component supports native HTML attributes like onClick, id, etc.
Hence we have to explictiy tell TypeScript what type of interface is this, in our case its a button
interface Props{
    children: string;
    //onClick: () => void; instead using forwarding props
    isSelected: boolean;
}*/

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string;
    //onClick: () => void; instead using forwarding props
    isSelected: boolean;
}

//export default function TabButton({children, isSelected, onClick}: Props) {
export default function TabButton({children, isSelected, ...props}: Props) {

    /*const onClickMe = () => {
        console.log("clicked");
    }*/
    /*function onClickMe() {
        console.log("clicked");
    }*/

    /*
    * active class is inside coreConcept.css
    * */
    return (
        <li>
            {/*<button className={isSelected ? 'active' : ''} onClick={onClick}>{children}</button>*/}
            <button className={isSelected ? 'active' : ''} {...props}>{children}</button>
        </li>
    )

}