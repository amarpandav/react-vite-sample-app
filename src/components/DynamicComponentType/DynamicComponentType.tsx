/*interface Props {
    builtInHtmlComponent: keyof JSX.IntrinsicElements; // Ensures it's a valid HTML tag like 'div', 'p', etc.
    customComponent: React.ElementType; // Allows passing custom React components
}
export default function DynamicComponentType({builtInHtmlComponent, customComponent} : Props) {
    const BuiltInHtmlComponent = builtInHtmlComponent;
    const CustomComponent = customComponent;
    //To avoid above mapping to const, we can directly name variables as    BuiltInHtmlComponent, CustomComponent, thats a shortcut
//    export default function DynamicComponentType({BuiltInHtmlComponent, CustomComponent} : Props) {


    return (
        <>
            <BuiltInHtmlComponent>BuiltInHtmlComponent like H3</BuiltInHtmlComponent>
            <CustomComponent></CustomComponent>
        </>
    );
}*/

interface Props {
    BuiltInHtmlComponent?: keyof JSX.IntrinsicElements; // Ensures it's a valid HTML tag like 'div', 'p', etc.
    CustomComponent: React.ElementType; // Allows passing custom React components
}
//default value of BuiltInHtmlComponent is div element
export default function DynamicComponentType({BuiltInHtmlComponent = "div", CustomComponent} : Props) {

    return (
        <>
            <BuiltInHtmlComponent>BuiltInHtmlComponent like H3</BuiltInHtmlComponent>
            <CustomComponent></CustomComponent>
        </>
    );
}