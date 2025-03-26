//Limitation: Looks like these styles are applied only to this component, but its not, its applied globally:(
import "./CoreConcept.css";
import CoreConcept from "./CoreConcept.tsx";
import {CORE_CONCEPT_TESTDATA} from "../../../testData/coreConceptsTestData.ts";

export default function CoreConcepts() {

    return (
        <section id="core-concepts">
            <h3>Core Concepts</h3>
            {
                [<p key={0}>Hello</p>, <p key={1}>World as an array of JSX elements</p>]
            }
            <ul>
                {CORE_CONCEPT_TESTDATA.map((item) => (
                    <CoreConcept key={item.id}
                                 title={item.title}
                                 description={item.description}
                                 image={item.image}></CoreConcept>

                    /*<CoreConcept {...CORE_CONCEPT_TESTDATA[1]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPT_TESTDATA[2]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPT_TESTDATA[3]}></CoreConcept>*/

                ))
                }


            </ul>

        </section>
    )

}