import HeaderNav from "../header/HeaderNav.tsx";
import PageContent from "../pageContent/PageContent.tsx";

interface ErrorDto {
    title: string;
    status: number;
    message?: string;
    stack?: string;
}

export default function Error(errorDto: ErrorDto) {
    return (

        <>
            <HeaderNav></HeaderNav>
            {
                /*
                * <main>
                <h1>An error occurred (custom page)</h1>
                <p>errorStatus: {errorStatus}</p>
            </main>
                * */
            }
            <PageContent title={errorDto.title}>
                <p>status code: {errorDto.status}</p>
                <p>{errorDto.message}</p>
                <p>stack: {errorDto.stack}</p>
            </PageContent>
        </>

    );
}

