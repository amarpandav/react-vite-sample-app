import {Outlet, useNavigation} from "react-router-dom";

export default function TTTLayout() {
    // useNavigation is a hook that returns the current navigation state
    const navigation = useNavigation();

    return (
        <>
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