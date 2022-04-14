/* eslint-disable no-unused-vars */

export const IPositions = {
    DEPUTADO_FEDERAL: 'DEPUTADO_FEDERAL',
    DEPUTADO_ESTADUAL: 'DEPUTADO_ESTADUAL',
    SENADOR_1: 'SENADOR_1',
    SENADOR_2: 'SENADOR_2',
    GOVERNADOR: 'GOVERNADOR',
    PRESIDENTE: 'PRESIDENTE',
};

export const IQuantityNumbers = {
    DEPUTADO_FEDERAL: 4,
    DEPUTADO_ESTADUAL: 5,
    SENADOR_1: 3,
    SENADOR_2: 3,
    GOVERNADOR: 2,
    PRESIDENTE: 2,
};

export type IPosition = keyof typeof IPositions;

export interface ICandidate {
	name: string;
	number: string;
	position: IPosition;
}

export interface IVote {
	candidate: Partial<ICandidate>;
	isWhite: boolean;
}

export interface IBallotBox {
	get quantityOfNumbers(): number;
	get step(): IPosition | null;
	confirm(vote: IVote): IBallotBox;
	clear(): IBallotBox;
    getCandidateByNumber(number: string): ICandidate;
    get votes(): Array<IVote>;
    hasNextStep(): boolean;
}

export default IBallotBox;
