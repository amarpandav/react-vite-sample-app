import Button from "../../components/Button/Button.tsx";

export default function Sample5Page() {


    function handleClick() {
        console.log("button clicked");
    }


    return (
        <>
            <h3>Sample 5: Building a button component</h3>
            <Button onClick={handleClick} color="primary">My Button</Button>
        </>
    );
}