import CoreConcepts from "./CoreConcept/CoreConcepts.tsx";
import CoreConceptExample from "./CoreConcept/CoreConceptExample.tsx";

export default function Sample7Page() {

    return (
        <>
            <h2>Sample 7.1: Making components reusable (CoreConcept component)</h2>
            <CoreConcepts ></CoreConcepts>
            <CoreConceptExample title="Sample 7.2: select a topic: children with click (TabButton component)"></CoreConceptExample>
        </>
    );
}