const CatBreedService = () => {
    const getTopFiveChildFriendlyBreed = (breeds) => {
        const topFiveChildFriendlyBreeds = breeds.filter((cat) => cat.child_friendly === 5);
        return topFiveChildFriendlyBreeds;
    };

    const getTopFiveDogFriendlyBreed = (breeds) => {
        const topFiveChildFriendlyBreeds = breeds.filter((cat) => cat.dog_friendly === 5);
        return topFiveChildFriendlyBreeds;
    };

    const getTopFiveStrangerFriendlyBreed = (breeds) => {
        const topFiveChildFriendlyBreeds = breeds.filter((cat) => cat.stranger_friendly === 5);
        return topFiveChildFriendlyBreeds;
    };

    // Get top (numOfResults) records for child_friendly, dog_friendly and stranger_friendly breeds
    // with equal weighting
    const getTopCombinedBreed = (breeds, numOfResults) => {
        const topCombinedBreeds = [];
        let rating = 5;
        do {
            topCombinedBreeds.push(breeds.filter(
                (cat) => cat.child_friendly === rating
            && cat.dog_friendly === rating
            && cat.stranger_friendly === rating,
            ));
            rating -= 1;
        } while (rating > 0 || topCombinedBreeds.length < numOfResults);

        return topCombinedBreeds.flat().slice(0, numOfResults);
    };

    return {
        getTopFiveChildFriendlyBreed,
        getTopFiveDogFriendlyBreed,
        getTopFiveStrangerFriendlyBreed,
        getTopCombinedBreed,
    };
};

module.exports = { CatBreedService };
