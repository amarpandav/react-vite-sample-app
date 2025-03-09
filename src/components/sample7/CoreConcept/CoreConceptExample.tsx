//Limitation: Looks like these styles are applied only to this component, but its not, its applied globally:(

import TabButton from "../Tab/TabButton.tsx";
import {useState} from "react";
import {CORE_CONCEPT_EXAMPLE_TESTDATA} from "../../../test-data/core-concept-example-testdata.ts";
import {Section} from "../../Section.tsx";
import Tabs from "../Tab/Tabs.tsx";

interface Props {
    title: string
}
export default function CoreConceptExample({title}: Props) {

    let selectedTopicMessage1 = "Message1: Please select a Topic";
    const [selectedTopicMessage2, setSelectedTopicMessage2] = useState("Message2: Please select a Topic");
    const [selectedTopic, setSelectedTopic] = useState("");

    function onClickSelectedTopic(selectedTopic: string) {
        console.log("Clicked Topic is: " + selectedTopic);
        selectedTopicMessage1 = "Message1: Clicked Topic is: " + selectedTopic;
        //But unfortunately react won't render newly updated message hence react introduced state
        setSelectedTopicMessage2("Message2: Clicked Topic is: " + selectedTopic)
        setSelectedTopic(selectedTopic);

        //this would print previously selected button on console but UI would display correct value, why?
        //because schedules update of usestate (so its not immediate) and new value is available inside onClickSelectedTopic only when App() function is re-executed.
        console.log("Message 2 is: " + selectedTopicMessage2);

    }

    return (
        <Section id="core-concepts-examples"
                 title={title}>
            <Tabs buttons={<>
                <TabButton isSelected={selectedTopic === 'components'}
                           onClick={() => onClickSelectedTopic('components')}>Components</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'}
                           onClick={() => onClickSelectedTopic('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'props'}
                           onClick={() => onClickSelectedTopic('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic === 'state'}
                           onClick={() => onClickSelectedTopic('state')}>State</TabButton></>
            }>

                selectedTopicMessage1: {selectedTopicMessage1}
                <br/>
                selectedTopicMessage2: {selectedTopicMessage2}
                <br/>
                selectedTopic: {selectedTopic}
                {/*You can also set jsx code into a variable. for e.g
                        let topic = <div>...</div>
                    */}
                {!selectedTopic && 'Please select a Topic'}
                {selectedTopic && <div id="selected-topic-content">

                    <h3>{
                        // @ts-expect-error suppresses reporting the error about implicit anys when indexing into objects
                        CORE_CONCEPT_EXAMPLE_TESTDATA[selectedTopic].title
                    }</h3>
                    <p>{
                        // @ts-expect-error suppresses reporting the error about implicit anys when indexing into objects
                        CORE_CONCEPT_EXAMPLE_TESTDATA[selectedTopic].description
                    }</p>
                    <pre>
                            <code>{
                                // @ts-expect-error suppresses reporting the error about implicit anys when indexing into objects
                                CORE_CONCEPT_EXAMPLE_TESTDATA[selectedTopic].code
                            }</code>
                        </pre>
                </div>

                }
            </Tabs>


        </Section>
    )

}