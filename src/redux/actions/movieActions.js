import api from '../../utils/api';
import { ActionTypes } from './../actionTypes';

//api'dan popüler filmleri alıp reducera aktaran async thunk aksiyonu
export const getPopular = () => (dispatch) => {
    dispatch({
        type: ActionTypes.MOVIES_LOADING
    });

    const params = {
        region: ' TUR',
    };

    api.get('/movie/popular', { params })
        .then((res) =>
            dispatch({
                type: ActionTypes.MOVIES_SUCCESS,
                payload: res.data
            })
        )
        .catch((err) =>
            dispatch({
                type: ActionTypes.MOVIES_ERROR,
                payload: err.message
            })
        );
};