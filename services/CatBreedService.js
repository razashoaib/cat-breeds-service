const CatBreedService = () => {
    const getTopFiveChildFriendlyBreeds = (breeds) => {
        const topChildFriendlyBreeds = breeds.filter((cat) => cat.child_friendly === 5);
        return topChildFriendlyBreeds.slice(0, 5);
    };

    const getTopFiveDogFriendlyBreeds = (breeds) => {
        const topChildFriendlyBreeds = breeds.filter((cat) => cat.dog_friendly === 5);
        return topChildFriendlyBreeds.slice(0, 5);
    };

    const getTopFiveStrangerFriendlyBreeds = (breeds) => {
        const topChildFriendlyBreeds = breeds.filter((cat) => cat.stranger_friendly === 5);
        return topChildFriendlyBreeds.slice(0, 5);
    };

    // Get top (numOfResults) records for child_friendly, dog_friendly and stranger_friendly breeds
    // with equal weighting
    const getTopFiveCombinedBreeds = (breeds, numOfResults) => {
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
        getTopFiveChildFriendlyBreeds,
        getTopFiveDogFriendlyBreeds,
        getTopFiveStrangerFriendlyBreeds,
        getTopFiveCombinedBreeds,
    };
};

module.exports = { CatBreedService };
