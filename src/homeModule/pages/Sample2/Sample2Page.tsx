import ListGroup from "../../components/ListGroup/ListGroup.tsx";

export default function Sample2Page() {
    const items: string[] = ['Zurich', 'Basel', 'Berlin']; //we can't reassign the values hence use let

    const handleSelectItem = (item: string) => {
        console.log(item + " is selected and received in parent component");
    }

    return (
        <>
            <h3>Sample 2: props vs state</h3>
            <ListGroup items={items} heading="My Cities" onSelectItem={handleSelectItem}></ListGroup>
        </>
    );
}