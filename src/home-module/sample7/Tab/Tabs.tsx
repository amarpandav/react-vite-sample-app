interface Props {
    children: React.ReactNode;
    buttons: React.ReactNode;
}

export default function Tabs({children, buttons}: Props) {

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
        <>
            <menu>
                {buttons}
            </menu>
            {children}
        </>
    )

}