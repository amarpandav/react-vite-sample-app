import Button from "../sample5/Button.tsx";
import Alert3 from "../Alert3.tsx";
import {useState} from "react";

export default function Sample6Page() {

    //useState returns array,
    const [renderAlert3Component, setRenderAlert3Component] = useState(false);

    function toggleRenderAlert3Component() {
        setRenderAlert3Component(!renderAlert3Component);
    }

    return (
        <>
            <h2>Sample 6: Building a Dismissing Alert component</h2>
            <Button onClick={toggleRenderAlert3Component}
                    color="primary">
                {/*(renderAlert3Component && 'Hide Alert Component') || (!renderAlert3Component && 'Render Alert Component')*/
                    renderAlert3Component ? 'Hide Alert Component' : 'Render Alert Component'
                }
            </Button>
            {renderAlert3Component &&
                <Alert3 onClose={toggleRenderAlert3Component}>Rendered Dismissing Alert component!</Alert3>}

        </>
    );
}