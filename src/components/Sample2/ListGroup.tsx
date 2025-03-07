//PascalCasing
//import {Fragment} from "react";
import {MouseEvent, useState} from "react";

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
    //callback: () => string;
    //callback: () => void;
}
//function ListGroup({items, heading}}: Props) { //doing so no need to write props.items or props.heading
export default function ListGroup(props: Props) {


    //
    //let items: string[] = ['Zurich', 'Basel', 'Berlin'];
    //items = [];

    //if(items.length === 0 )
     //   return <div></div>

    //option 2
    //const message = items.length === 0 ? <p>No items found</p> : null;

    //option 3
    //const getMessage = () => {return items.length === 0 ? <p>No items found</p> : null;}

    const [selectedIndex, setSelectedIndex] = useState(-1);

    //Event handler
    //const handleClick = (item: string, event: React.MouseEvent<HTMLLIElement>)=> {
    const handleClick = (item: string, index: number, event: MouseEvent)=> {
        event.persist(); // Prevent event pooling
        //console.log(`${item} clicked`, event);
        console.log(item + " clicked with index "+index, event);
        setSelectedIndex(index);
       props.onSelectItem(item);
    }

    return (//to use code into multiple lines use brackets ()
        //use curley braces to render data dynamically {}

        //React has to return only 1 component, hence <>. We can also use Fragment tag

        <>
            {/*<h3>My cities:</h3>
            Wow! React you make our life so ugly, you sucks.
             // <h1>Welcome!</h1>  ❌ This will cause an error
             <!-- <h1>Welcome!</h1> -->  ❌ This will also cause an error
            */ }
            <h3>{props.heading}</h3>

            { //option 1
                //items.length === 0 ? <p>No items found</p> : null

                //option 2
                //message

                //option 3
                //getMessage()

                //option 4
                //items.length === 0 && <p>No items found</p>
                props.items.length === 0 && <p>No items found</p>

                //btw, if we do not use {} then it would render items.length === 0 && No items found

            }

            <ul className="list-group">
                {
                    //items.map( (item , index)=> (
                    props.items.map((item, index) => (
                        <li
                            //className="list-group-item"
                            className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                            key={item}
                            //onClick={(event ) => console.log(item + " clicked" + JSON.stringify(event))}
                            onClick={(event) => handleClick(item, index, event)}
                        >{item}</li>

                    ))
                }
            </ul>


        </>
    );

}
