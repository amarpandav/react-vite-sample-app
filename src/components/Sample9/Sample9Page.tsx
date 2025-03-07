import {useNavigate} from "react-router-dom";

export default function Sample9Page() {

    const navigate = useNavigate();

    function navigateManually() {
        navigate("/sample8");
    }

    return (
        <>
            <h2>Sample 9: Navigate Programmatically</h2>
            <button onClick={navigateManually}>Navigate to Sample 8</button>
        </>
    );
}