/* eslint-disable no-unused-vars */

/**
 * @description vote order
 * @step 1 - DEPUTADO_FEDERAL
 * @step 2 - DEPUTADO_ESTADUAL
 * @step 3 - SENADOR_1
 * @step 4 - SENADOR_2
 * @step 5 - GOVERNADOR
 * @step 6 - PRESIDENTE
 */
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
    image: string;
    group: string;
}

export interface IVote {
	candidate: Partial<ICandidate> & Pick<ICandidate, 'position'>;
	isWhite: boolean;
}

export interface IBallotBox {
	get quantityOfNumbers(): number;
	get step(): IPosition;
    get votes(): Array<IVote>;
	confirm(vote: IVote): IBallotBox;
    clear(): IBallotBox;
    getNextStep(): IPosition;
    getCandidateByNumber(number: string): ICandidate;
    hasNextStep(): boolean;
    alreadyVoteForPosition(position: IPosition): boolean;
}

export default IBallotBox;
