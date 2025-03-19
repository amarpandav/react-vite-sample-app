import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {atomDark} from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Sample11Page() {

    const code1 = `
    async function getData() {
        console.log("Start fetching...");
        const response = await fetch('http://localhost:8080/events');
        console.log("Response received...");
        const data = await response.json();
        console.log("Data parsed...");
        return data;
    }
    getData();
    console.log("This runs after function is called but before data is fetched!");

    output:
        Start fetching...
        This runs after function is called but before data is fetched!
        Response received...
        Data parsed...
    `;

    const code2 = `
    function getData() {
        console.log("Start fetching...");
        fetch('http://localhost:8080/events')
            .then(response => {
                console.log("Response received...");
                return response.json();
            })
            .then(data => {
                console.log("Data parsed...");
                return data;
            });
    }
    getData();
    console.log("This runs immediately after function is called! It doesn't wait for data fetching.");
    
    output:
        Start fetching...
        This runs immediately after function is called! It doesn't wait for data fetching.
        Response received...
        Data parsed...        
    \`;
    `;
    return (

        <>

        {getData1()}


            <section>
                <h5>await (Used in async functions):</h5>
                <ol>
                    <li>await pauses execution until the promise resolves.</li>
                    <li>It makes asynchronous code look synchronous, improving readability.</li>
                    <li>It can only be used inside an async function.</li>
                    <li>For most modern code, await is preferred because it makes async code look cleaner and easier to debug.</li>
                </ol>


                <SyntaxHighlighter language="javascript" style={atomDark}>
                    {code1}
                </SyntaxHighlighter>

                <h6>Key behavior:</h6>

                <ol>
                    <li>The execution stops at each await until the promise resolves.</li>
                    <li>If the promise is rejected, you need to handle errors using try...catch.</li>
                </ol>


                <h5>.then() (Chaining Promises):</h5>
                <ol>
                    <li>.then() is a method on promises that allows chaining.</li>
                    <li>It does not pause execution but schedules the next step when the previous promise resolves.</li>
                    <li>Works in non-async functions.</li>
                </ol>

                <SyntaxHighlighter language="javascript" style={atomDark}>
                    {code2}
                </SyntaxHighlighter>

                <h6>Key behavior:</h6>

                <ol>
                    <li>Each .then() is called after the previous promise resolves.</li>
                    <li>The function does not wait for each step; it schedules them to execute later.</li>
                </ol>
            </section>
        </>
    );
}

function getData1(){
    async function getData() {
        console.log("Start fetching...");
        const response = await fetch('http://localhost:8080/events');
        console.log("Response received...");
        const data = await response.json();
        console.log("Data parsed...");
        return data;
    }
    getData();
    console.log("This runs after function is called but before data is fetched!");
}


function getData2() {
    function getData() {
        console.log("Start fetching...");
        fetch('http://localhost:8080/events')
            .then(response => {
                console.log("Response received...");
                return response.json();
            })
            .then(data => {
                console.log("Data parsed...");
                return data;
            });
    }

    getData();
    console.log("This runs immediately after function is called!");
}