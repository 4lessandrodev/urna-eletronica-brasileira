import { ICandidate, IPosition, IVote } from '../ballot-box.interface';
import BallotBox from '../index';

describe('ballot-box', () => {
    const candidates: ICandidate[] = [];
    const makeVoteForPosition = (position: IPosition): IVote => ({
        isWhite: true,
        candidate: {
            position,
        },
    });

    it('should DEPUTADO_FEDERAL number to be 4 digits', () => {
        const instance = new BallotBox({ votes: [], candidates });

        expect(instance.step).toBe('DEPUTADO_FEDERAL');
        expect(instance.quantityOfNumbers).toBe(4);
    });

    it('should DEPUTADO_ESTADUAL number to be 5 digits', () => {
        const instance = new BallotBox({
            votes: [makeVoteForPosition('DEPUTADO_FEDERAL')],
            candidates,
        });

        expect(instance.step).toBe('DEPUTADO_ESTADUAL');
        expect(instance.quantityOfNumbers).toBe(5);
    });

    it('should SENADOR_1 number to be 3 digits', () => {
        const instance = new BallotBox({
            votes: [
                makeVoteForPosition('DEPUTADO_FEDERAL'),
                makeVoteForPosition('DEPUTADO_ESTADUAL'),
            ],
            candidates,
        });

        expect(instance.step).toBe('SENADOR_1');
        expect(instance.quantityOfNumbers).toBe(3);
    });

    it('should SENADOR_2 number to be 3 digits', () => {
        const instance = new BallotBox({
            votes: [
                makeVoteForPosition('DEPUTADO_FEDERAL'),
                makeVoteForPosition('DEPUTADO_ESTADUAL'),
                makeVoteForPosition('SENADOR_1'),
            ],
            candidates,
        });

        expect(instance.step).toBe('SENADOR_2');
        expect(instance.quantityOfNumbers).toBe(3);
    });

    it('should GOVERNADOR number to be 2 digits', () => {
        const instance = new BallotBox({
            votes: [
                makeVoteForPosition('DEPUTADO_FEDERAL'),
                makeVoteForPosition('DEPUTADO_ESTADUAL'),
                makeVoteForPosition('SENADOR_1'),
                makeVoteForPosition('SENADOR_2'),
            ],
            candidates,
        });

        expect(instance.step).toBe('GOVERNADOR');
        expect(instance.getNextStep()).toBe('PRESIDENTE');
        expect(instance.quantityOfNumbers).toBe(2);
    });

    it('should PRESIDENTE number to be 2 digits', () => {
        const instance = new BallotBox({
            votes: [
                makeVoteForPosition('DEPUTADO_FEDERAL'),
                makeVoteForPosition('DEPUTADO_ESTADUAL'),
                makeVoteForPosition('SENADOR_1'),
                makeVoteForPosition('SENADOR_2'),
                makeVoteForPosition('GOVERNADOR'),
            ],
            candidates,
        });

        expect(instance.step).toBe('PRESIDENTE');
        expect(instance.quantityOfNumbers).toBe(2);
    });

    it('should get PRESIDENTE step if does not have next step', () => {
        const instance = new BallotBox({
            votes: [
                makeVoteForPosition('DEPUTADO_FEDERAL'),
                makeVoteForPosition('DEPUTADO_ESTADUAL'),
                makeVoteForPosition('SENADOR_1'),
                makeVoteForPosition('SENADOR_2'),
                makeVoteForPosition('GOVERNADOR'),
                makeVoteForPosition('PRESIDENTE'),
            ],
            candidates,
        });

        expect(instance.step).toBe('PRESIDENTE');
        expect(instance.getNextStep()).toBe('PRESIDENTE');
        expect(instance.quantityOfNumbers).toBe(2);
        expect(instance.votes.length).toBe(6);
        expect(instance.hasNextStep()).toBeFalsy();
    });

    it('should clear and remove my last vote', () => {
        const instance = new BallotBox({
            votes: [
                makeVoteForPosition('DEPUTADO_FEDERAL'),
                makeVoteForPosition('DEPUTADO_ESTADUAL'),
                makeVoteForPosition('SENADOR_1'),
                makeVoteForPosition('SENADOR_2'),
                makeVoteForPosition('GOVERNADOR'),
                makeVoteForPosition('PRESIDENTE'),
            ],
            candidates,
        });

        expect(instance.step).toBe('PRESIDENTE');
        expect(instance.votes.length).toBe(6);
        expect(instance.hasNextStep()).toBeFalsy();

        const newInstance = instance.clear();

        expect(newInstance.step).toBe('PRESIDENTE');
        expect(newInstance.votes.length).toBe(5);
        expect(newInstance.hasNextStep()).toBeTruthy();
    });

    it('should get fake candidate if none exists', () => {
        const instance = new BallotBox({ votes: [], candidates });
        expect(instance.getCandidateByNumber('2021')).toEqual({
            name: 'FULANO DE TAL',
            number: '2021',
            position: 'DEPUTADO_FEDERAL',
        });
    });

    it('should return the same instance if try to vote 2 times for the same candidate', () => {
        const instance = new BallotBox({ votes: [], candidates });
        const vote = makeVoteForPosition('GOVERNADOR');

        const instance1 = instance.confirm(vote);
        const instance2 = instance1.confirm(vote);

        expect(instance1).toEqual(instance2);
    });

    it('should vote to DEPUTADO_FEDERAL with success', () => {
        const instance = new BallotBox({ votes: [], candidates });

        const vote: IVote = {
            candidate: {
                name: 'FULANO DE TAL',
                number: '1990',
                position: 'DEPUTADO_FEDERAL',
            },
            isWhite: false,
        };

        const result = instance.confirm(vote);
        expect(result.votes).toEqual([vote]);
        expect(result.step).toBe('DEPUTADO_ESTADUAL');
    });

    it('should not to have voted for position', () => {
        const instance = new BallotBox({ votes: [], candidates });

        const alreadyVoted = instance.alreadyVoteForPosition('PRESIDENTE');
        expect(alreadyVoted).toBeFalsy();
    });

    it('should get the candidate by number', () => {
        const candidatesList: ICandidate[] = [{
            name: 'FULANO DE TAL 1',
            number: '01',
            position: 'GOVERNADOR',
            image: 'image.jpg',
            group: 'none',
        }, {
            name: 'FULANO DE TAL 2',
            number: '02',
            position: 'GOVERNADOR',
            image: 'image.jpg',
            group: 'none',
        }];
        const instance = new BallotBox({ votes: [], candidates: candidatesList });
        const result = instance.getCandidateByNumber('01');

        expect(result).toEqual(candidatesList[0]);
    });
});
