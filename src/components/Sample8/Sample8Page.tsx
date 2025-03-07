import DynamicComponentType from "./DynamicComponentType/DynamicComponentType.tsx";
import Message from "../Sample1/Message.tsx";

export default function Sample8Page() {

    return (
        <>
            <h2>Sample 8: Setting Component Types dynamically</h2>
            {/*<DynamicComponentType BuiltInHtmlComponent="h3" CustomComponent={Message}></DynamicComponentType>*/}
            <DynamicComponentType BuiltInHtmlComponent="h3" CustomComponent={Message}></DynamicComponentType>
        </>
    );
}