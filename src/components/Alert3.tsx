interface Props{
    children: string;
    //render?: false | true;
    onClose: () => void;

}

function Alert3 ({children/*, render = true*/, onClose}: Props) {
    return (
        <>
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                {children}
                <button type="button" className="btn-close" data-dismiss="alert" aria-label="Close" onClick={onClose}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </>
    )
}

export default Alert3;