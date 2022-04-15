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
    candidates: ICandidate[];
}

export class BallotBox implements IBallotBox {
    #votes: IVote[];

    #currentStep: IPosition;

    #steps: Map<number, IPosition>;

    #candidates: ICandidate[] = [];

    #quantityOfNumbers: number;

    constructor(props: IProps) {
	    this.#votes = props.votes;
	    const steps: Map<number, IPosition> = new Map();
	    Object.keys(IPositions).forEach((key, index) => {
	        steps.set(index, key as IPosition);
	    });

        this.#steps = steps;
        if (this.hasNextStep()) {
            this.#currentStep = this.#steps.get(this.#votes.length) as IPosition;
        } else {
            this.#currentStep = this.#steps.get(this.#votes.length - 1) as IPosition;
        }
        this.#quantityOfNumbers = IQuantityNumbers[this.#currentStep as IPosition];
        this.#candidates = props.candidates;
    }

    hasNextStep(): boolean {
        return this.#votes.length < this.#steps.size;
    }

    get votes(): IVote[] {
        return this.#votes;
    }

    get quantityOfNumbers(): number {
	    return this.#quantityOfNumbers;
    }

    get step(): IPosition {
	    return this.#currentStep;
    }

    getCandidateByNumber(number: string): ICandidate {
	    const candidateFound = this.#candidates.find(
	        (candidate): boolean => candidate.number === number,
	    ) ?? {
	        name: 'FULANO DE TAL',
	        number,
	        position: this.#currentStep,
	    };

	    return candidateFound as ICandidate;
    }

    getNextStep(): IPosition {
        if (!this.hasNextStep()) return this.#currentStep;
        const nextStep = this.#steps.get(this.#votes.length + 1);
        return nextStep as unknown as IPosition;
    }

    alreadyVoteForPosition(position: IPosition): boolean {
        const notFound = -1;
        const index = this.#votes.findIndex(
            (vote) => vote.candidate.position === position,
        );
        return index !== notFound;
    }

    confirm(vote: IVote): IBallotBox {
        if (this.alreadyVoteForPosition(vote.candidate.position)) return this;
	    const votes = [...this.#votes, vote];

	    return new BallotBox({
            votes,
            candidates: this.#candidates,
	    });
    }

    clear(): IBallotBox {
        const votes = [...this.#votes];

	    votes.pop();

	    return new BallotBox({
            votes,
            candidates: this.#candidates,
	    });
    }
}

export default BallotBox;
