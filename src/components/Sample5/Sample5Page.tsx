import Button from "./Button.tsx";

export default function Sample5Page() {


    function handleClick() {
        console.log("button clicked");
    }


    return (
        <>
            <h2>Sample 5: Building a button component</h2>
            <Button onClick={handleClick} color="primary">My Button</Button>
        </>
    );
}