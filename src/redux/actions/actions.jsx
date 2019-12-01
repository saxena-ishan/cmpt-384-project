import * as types from './actionTypes';

export function updateYears(year, remove) {
    return (dispatch, getState) => {
        const { years } = getState();
    
        if (remove) {
            dispatch({ 
                type: types.UPDATE_YEARS,
                years: years.filter((y) => y !== year)
            });
        }
        else {
            dispatch({ 
                type: types.UPDATE_YEARS,
                years: years.map((y) => y).push(year)
            });
        }
    };
};

export const setSingleMax = (max) => {
    return { type: types.SET_SINGLE_MAX, max };
};

export const setTotalMax = (max) => {
    return { type: types.SET_TOTAL_MAX, max };
};

export const setMedalTally = (data) => {
    return { type: types.SET_MEDAL_TALLY, data };
};

export const setTopGames = (data) => {
    return { type: types.SET_TOP_GAMES, data };
};

