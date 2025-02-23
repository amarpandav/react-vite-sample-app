/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css'
import Message from "./components/Message.tsx";
import ListGroup from "./components/ListGroup.tsx";
import Alert from "./components/Alert.tsx";
import Alert2 from "./components/Alert2.tsx";
import Button from "./components/Button.tsx";
import Alert3 from "./components/Alert3.tsx";
import {useState} from "react";
import reactImg from './assets/react.svg';
import CoreConcepts from "./components/CoreConcept/CoreConcepts.tsx";
import CoreConceptExample from "./components/CoreConcept/CoreConceptExample.tsx";
import DynamicComponentType from "./components/DynamicComponentType/DynamicComponentType.tsx";

export default function App() {
    const items: string[] = ['Zurich', 'Basel', 'Berlin']; //we can't reassign the values hence use let

    //useState returns array,
    const [renderAlert3Component, setRenderAlert3Component] = useState(false);

    const handleSelectItem = (item: string) => {
        console.log(item + " is selected and received in parent component");
    }

    function handleClick() {
        console.log("button clicked");
    }



    function toggleRenderAlert3Component() {
        setRenderAlert3Component(!renderAlert3Component);
    }

    return (
        <div>
            <main>
                <h1>Welcome to React</h1>
                {/*<img src="src/assets/react.svg" alt="title"/>*/}

                <img src={reactImg} alt="title"/>

                <Message></Message>
                <h2>Sample 1: props vs state</h2>
                <ListGroup items={items} heading="My Cities" onSelectItem={handleSelectItem}></ListGroup>

                <hr/>
                <h2>Sample 2: passing children of type string</h2>
                <Alert>Hello World</Alert>

                <hr/>
                <h2>Sample 3: passing children of type HTML (using ReactNode)</h2>
                <Alert2>Hello <b>World</b></Alert2>

                {/*Install React Dev tools plugin*/}

                <hr/>
                <h2>Sample 4: Building a button component</h2>
                <Button onClick={handleClick} color="primary">My Button</Button>

                <hr/>
                <h2>Sample 5: Building a Dismissing Alert component</h2>
                <Button onClick={toggleRenderAlert3Component}
                        color="primary">{(renderAlert3Component && 'Hide Alert Component') || (!renderAlert3Component && 'Render Alert Component')}</Button>
                {renderAlert3Component &&
                    <Alert3 onClose={toggleRenderAlert3Component}>Rendered Dismissing Alert component!</Alert3>}

                <hr/>
                <h2>Sample 6: Making components reusable (CoreConcept component)</h2>
                <CoreConcepts ></CoreConcepts>
                <CoreConceptExample ></CoreConceptExample>

                <h2>Sample 7: Setting Component Types dynamically</h2>
                {/*<DynamicComponentType BuiltInHtmlComponent="h3" CustomComponent={Message}></DynamicComponentType>*/}
                <DynamicComponentType BuiltInHtmlComponent="h3" CustomComponent={Message}></DynamicComponentType>


            </main>
        </div>

    );


}