import DynamicComponentType from "./DynamicComponentType/DynamicComponentType.tsx";
import Message from "../sample1/Message.tsx";

export default function Sample8Page() {

    return (
        <>
            <h3>Sample 8: Setting Component Types dynamically</h3>
            {/*<DynamicComponentType BuiltInHtmlComponent="h3" CustomComponent={Message}></DynamicComponentType>*/}
            <DynamicComponentType BuiltInHtmlComponent="h3" CustomComponent={Message}></DynamicComponentType>
        </>
    );
}