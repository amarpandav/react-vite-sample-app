//PascalCasing
export default function Message() {

    const myName = 'Amar';
    //const myName = ''
    if(myName) {
        //JSX: java script xml: babeljs.io
        return <div><h6>Dear {myName}, This is first component</h6></div>
    }else {
        return <div><h6>Welcome Unknown</h6></div>
    }

}
