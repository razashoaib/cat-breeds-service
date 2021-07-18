const { CatBreedServiceAgent } = require('../../serviceAgents/CatBreedServiceAgent');
const { CatBreedService } = require('../../services/CatBreedService');
const { REQUEST_TYPES } = require('../common/constants');

const CatBreedRoutes = ({ logger }) => {
    const getTopFiveCatBreeds = async (req, res) => {
        const { type } = req.query;
        const breeds = await CatBreedServiceAgent({ logger }).getCatBreeds();
        let response;
        switch (type.toLowerCase()) {
        case REQUEST_TYPES.CHILD_FRIENDLY:
            response = CatBreedService().getTopFiveChildFriendlyBreeds(breeds);
            break;
        case REQUEST_TYPES.DOG_FRIENDLY:
            response = CatBreedService().getTopFiveDogFriendlyBreeds(breeds);
            break;
        case REQUEST_TYPES.STRANGER_FRIENDLY:
            response = CatBreedService().getTopFiveStrangerFriendlyBreeds(breeds);
            break;
        default:
            response = CatBreedService().getTopFiveCombinedBreeds(breeds, 5);
        }

        res.send(response);
    };

    return { getTopFiveCatBreeds };
};

module.exports = { CatBreedRoutes };
