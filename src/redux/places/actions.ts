export const types = {
    GET_MOUNTAIN_PROVINCES: 'GET_MOUNTAIN_PROVINCES',
    GET_MOUTAIN_PROVINCES_SUCCESS: 'GET_MOUTAIN_PROVINCES_SUCCESS',
    GET_MOUTAIN_PROVINCES_FAIL: 'GET_MOUTAIN_PROVINCES_FAIL',
    GET_OFFER_PROVINCES: 'GET_OFFER_PROVINCES',
    GET_OFFER_PROVINCES_SUCCESS: 'GET_OFFER_PROVINCES_SUCCESS',
    GET_OFFER_PROVINCES_FAIL: 'GET_OFFER_PROVINCES_FAIL',
    GET_FAMOUS_PROVINCES: 'GET_FAMOUS_PROVINCES',
    GET_FAMOUS_PROVINCES_SUCCESS: 'GET_FAMOUS_PROVINCES_SUCCESS',
    GET_FAMOUS_PROVINCES_FAIL: 'GET_FAMOUS_PROVINCES_FAIL',
}
const action = (type: string, payload?: any) => ({type, payload});

export const placesActions = {
    getMountainProvinces: (payload: any) => action(types.GET_MOUNTAIN_PROVINCES, payload),
    getMountainProvincesSuccess: (payload: any) => action(types.GET_MOUTAIN_PROVINCES_SUCCESS, payload),
    getMountainProvincesFail: (payload: any) => action(types.GET_MOUTAIN_PROVINCES_FAIL, payload),
    getOfferProvinces: (payload: any) => action(types.GET_OFFER_PROVINCES, payload),
    getOfferProvincesSuccess: (payload: any) => action(types.GET_OFFER_PROVINCES_SUCCESS, payload),
    getOfferProvincesFail: (payload: any) => action(types.GET_OFFER_PROVINCES_FAIL, payload),
    getFamousProvinces: (payload: any) => action(types.GET_FAMOUS_PROVINCES, payload),
    getFamousProvincesSuccess: (payload: any) => action(types.GET_FAMOUS_PROVINCES_SUCCESS, payload),
    getFamousProvincesFail: (payload: any) => action(types.GET_FAMOUS_PROVINCES_FAIL, payload),
}