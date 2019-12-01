import * as types from './actionTypes';

export function updateYears(year, remove) {
    return (dispatch, getState) => {
        const { years, medalTally } = getState().delta;
        var newYears = [], 
            singleMax = Number.NEGATIVE_INFINITY,
            totalMax = Number.NEGATIVE_INFINITY;
        
        if (remove) {
            newYears = years.filter((y) => y !== year);
        }
        else {
            newYears = years.map((y) => y);
            newYears.push(year);
        }
        newYears.forEach((y) => {
            if (singleMax < medalTally[y]["max"]) {
                singleMax = medalTally[y]["max"];
            }

            if (totalMax < medalTally[y]["totalMedalMax"]) {
                totalMax = medalTally[y]["totalMedalMax"];
            }
        });

        dispatch(setYears(newYears));
        dispatch(setSingleMax(singleMax));
        dispatch(setTotalMax(totalMax));
    };
};

const setYears = (years) => {
    return { type: types.SET_SINGLE_MAX, years };
}

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

