import {Outlet, useNavigation} from "react-router-dom";
import TTTHeaderNav from "../tttHeader/TTTHeaderNav.tsx";

export default function TTTLayout() {
    // useNavigation is a hook that returns the current navigation state
    const navigation = useNavigation();

    return (
        <>
            <h2>TTT App</h2>
            <TTTHeaderNav></TTTHeaderNav>
            <main>
                {
                    //this will only work when we are loading data in App.tsx using loader()
                    navigation.state === 'loading' ? <p>Loading in TTT game...</p> : null
                }
                <Outlet></Outlet>
            </main>


        </>

    );
}