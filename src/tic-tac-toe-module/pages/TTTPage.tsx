import Player from "../components/Player.tsx";

export default function TTTPage() {

    return (
        <main>
            <div id="game-container">
                <ol id="players">
                    <Player name="Rian" symbol="X"/>
                    <Player name="Amar" symbol="X"/>
                </ol>
            </div>
        </main>

    );
}