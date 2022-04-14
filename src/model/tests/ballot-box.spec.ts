import { IVote } from '../ballot-box.interface';
import BallotBox from '../index';

describe('ballot-box', () => {
    it('should DEPUTADO_FEDERAL be 4 digits', () => {
        const instance = new BallotBox({ currentStep: 'DEPUTADO_FEDERAL', votes: [] });

        expect(instance.step).toBe('DEPUTADO_FEDERAL');
        expect(instance.quantityOfNumbers).toBe(4);
    });

    it('should DEPUTADO_ESTADUAL be 5 digits', () => {
        const instance = new BallotBox({ currentStep: 'DEPUTADO_ESTADUAL', votes: [] });

        expect(instance.step).toBe('DEPUTADO_ESTADUAL');
        expect(instance.quantityOfNumbers).toBe(5);
    });

    it('should SENADOR_1 be 3 digits', () => {
        const instance = new BallotBox({ currentStep: 'SENADOR_1', votes: [] });

        expect(instance.step).toBe('SENADOR_1');
        expect(instance.quantityOfNumbers).toBe(3);
    });

    it('should SENADOR_2 be 3 digits', () => {
        const instance = new BallotBox({ currentStep: 'SENADOR_2', votes: [] });

        expect(instance.step).toBe('SENADOR_2');
        expect(instance.quantityOfNumbers).toBe(3);
    });

    it('should GOVERNADOR be 2 digits', () => {
        const instance = new BallotBox({ currentStep: 'GOVERNADOR', votes: [] });

        expect(instance.step).toBe('GOVERNADOR');
        expect(instance.quantityOfNumbers).toBe(2);
    });

    it('should PRESIDENTE be 2 digits', () => {
        const instance = new BallotBox({ currentStep: 'PRESIDENTE', votes: [] });

        expect(instance.step).toBe('PRESIDENTE');
        expect(instance.quantityOfNumbers).toBe(2);
    });

    it('should get fake candidate if none exists', () => {
        const instance = new BallotBox({ currentStep: 'DEPUTADO_FEDERAL', votes: [] });
        expect(instance.getCandidateByNumber('2021')).toEqual({
            name: 'FULANO DE TAL',
            number: '2021',
            position: 'DEPUTADO_FEDERAL',
        });
    });

    it('should vote to DEPUTADO_FEDERAL with success', () => {
        const instance = new BallotBox({ currentStep: 'DEPUTADO_FEDERAL', votes: [] });

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
});
