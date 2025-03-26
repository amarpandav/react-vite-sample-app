export class TurnDto {

    constructor(public activePlayerSymbol: string,
                public square: SquareDto) {
    }

}

export class SquareDto {

    constructor(public rowIndex: number,
                public colIndex: number) {
    }

}
