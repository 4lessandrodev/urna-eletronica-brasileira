import {
    IBallotBox,
    ICandidate,
    IPosition,
    IPositions,
    IVote,
    IQuantityNumbers,
} from './ballot-box.interface';

interface IProps {
	votes: IVote[];
	currentStep: IPosition;
}

export class BallotBox implements IBallotBox {
    #votes: IVote[];

    #currentStep: IPosition | null;

    #steps: Map<number, IPosition>;

    #candidates: ICandidate[] = [];

    #quantityOfNumbers: number;

    constructor(props: IProps) {
	    this.#votes = props.votes;
	    const steps: Map<number, IPosition> = new Map();
	    Object.keys(IPositions).forEach((key, index) => {
	        steps.set(index, key as IPosition);
	    });

	    const lastStep = null;
	    steps.set(steps.size + 1, lastStep as unknown as IPosition);
        this.#steps = steps;
        const index = [...this.#steps.values()].findIndex((pos) => pos === props.currentStep);
	    this.#currentStep = this.#steps.get(index) ?? null;
	    this.#quantityOfNumbers = IQuantityNumbers[this.#currentStep as IPosition];
    }

    hasNextStep(): boolean {
        return this.getNextStep(this.#currentStep as unknown as IPosition) !== null;
    }

    get votes(): IVote[] {
        return this.#votes;
    }

    get quantityOfNumbers(): number {
	    return this.#quantityOfNumbers;
    }

    get step(): IPosition | null {
	    return this.#currentStep;
    }

    getCandidateByNumber(number: string): ICandidate {
	    const candidateFound = this.#candidates.find(
	        (candidate) => candidate.number === number,
	    ) ?? {
	        name: 'FULANO DE TAL',
	        number,
	        position: this.#currentStep,
	    };

	    return candidateFound as ICandidate;
    }

    private getNextStep(position: IPosition): IPosition {
        const steps = [...this.#steps.values()];
        const currentIndex = steps.findIndex((value): boolean => value === position);
        const nextStep = this.#steps.get(currentIndex + 1) ?? null;
        return nextStep as unknown as IPosition;
    }

    confirm(vote: IVote): IBallotBox {
	    const votes = [...this.#votes, vote];
        const nextStep = this.getNextStep(vote.candidate.position!);

	    return new BallotBox({
	        currentStep: nextStep,
	        votes,
	    });
    }

    clear(): IBallotBox {
	    const votes = [...this.#votes];
	    votes.pop();
	    return new BallotBox({
	        currentStep: this.#currentStep as unknown as IPosition,
	        votes,
	    });
    }
}

export default BallotBox;
