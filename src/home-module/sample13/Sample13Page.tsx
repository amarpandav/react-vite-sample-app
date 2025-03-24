import {LoaderFunctionArgs} from "react-router-dom";

import classes from '../sample13/Sample13.module.css'
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {atomDark} from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Sample13Page() {

    const code1 = `.container {
  position: relative; /* This becomes the reference for absolute children. The space it originally occupied is still reserved in the document */
  top: 20px; /*The .container will move 20px down and 30px right from where it would normally be.*/
  left: 30px;
  width: 300px;
  height: 300px;
  background-color: lightgray;
}

.box {
  position: absolute; /*.box will not take up space in the normal flow.. If .container did not have position: relative, then .box would position itself relative to the entire page (or nearest positioned ancestor).*/
  top: 50px; /*It will be placed 50px down and 50px right relative to .container.*/
  left: 50px;
  background-color: lightblue;
  width: 100px;
  height: 100px;
}`;

    return (

        <>
            <section>
                <h5>Sample 13: css relative vs absolute</h5>
                <div className={classes.container}>
                    {/* Container with position: relative */}
                    Container: relative
                    {/* Box with position: absolute */}
                    <div className={classes.box}>
                        Box: absolute
                    </div>
                </div>

                <p>
                    <SyntaxHighlighter language="javascript" style={atomDark}>
                        {code1}
                    </SyntaxHighlighter>
                </p>
            </section>
        </>
    );
}

export async function loader({request, params}: LoaderFunctionArgs) {
    console.log("Sample12Page.loader:", request, params);
}
