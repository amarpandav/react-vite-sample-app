//PascalCasing
export default function Message() {

    const myName = 'Amar';
    //const myName = ''
    if(myName) {
        //JSX: java script xml: babeljs.io
        return <div><h1>Welcome {myName}</h1></div>
    }else {
        return <div><h1>Welcome Unknown</h1></div>
    }

}
