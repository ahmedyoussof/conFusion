import * as ActionTypes from './ActionTypes';

export const Comments = (state = {
    errMess: null,
    commnets: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return { ...state, isLoading: false, errMess: null, comments: action.payload }

        case ActionTypes.COMMENTS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, comments: [] }

        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            console.log("Comment: ", comment);
            return { ...state, commnets: state.commnets.concat(comment) };

        default:
            return state;
    }
};