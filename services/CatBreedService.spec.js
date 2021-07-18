const { describe, it } = require('mocha');
const { expect } = require('chai');
const { CatBreedService } = require('./CatBreedService');

const breeds = [{
    name: 'Breed 1',
    child_friendly: 5,
    dog_friendly: 5,
    stranger_friendly: 5,
}, {
    name: 'Breed 2',
    child_friendly: 5,
    dog_friendly: 5,
    stranger_friendly: 5,
}, {
    name: 'Breed 3',
    child_friendly: 4,
    dog_friendly: 5,
    stranger_friendly: 5,
}, {
    name: 'Breed 4',
    child_friendly: 4,
    dog_friendly: 5,
    stranger_friendly: 5,
}, {
    name: 'Breed 5',
    child_friendly: 4,
    dog_friendly: 5,
    stranger_friendly: 5,
}, {
    name: 'Breed 6',
    child_friendly: 4,
    dog_friendly: 5,
    stranger_friendly: 5,
}, {
    name: 'Breed 7',
    child_friendly: 4,
    dog_friendly: 5,
    stranger_friendly: 4,
}];

const catBreedService = CatBreedService();
describe('CatBreedService', () => {
    describe('getTopFiveChildFriendlyBreeds', () => {
        it('should return 2 breeds', () => {
            expect(catBreedService.getTopFiveChildFriendlyBreeds(breeds).length).to.equal(2);
        });
    });

    describe('getTopFiveDogFriendlyBreeds', () => {
        it('should return 5 breeds', () => {
            expect(catBreedService.getTopFiveDogFriendlyBreeds(breeds).length).to.equal(5);
        });
    });

    describe('getTopFiveStrangerFriendlyBreeds', () => {
        it('should return 5 breeds', () => {
            expect(catBreedService.getTopFiveStrangerFriendlyBreeds(breeds).length).to.equal(5);
        });
    });

    describe('getTopFiveCombinedBreeds', () => {
        it('should return only top 2 breeds since the other breeds have unequal weightings', () => {
            expect(catBreedService.getTopFiveCombinedBreeds(breeds, 5).length).to.equal(2);
        });
    });
});
