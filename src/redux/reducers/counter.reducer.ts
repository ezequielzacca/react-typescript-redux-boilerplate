import { INCREMENT, DECREMENT } from "../actions/action-types";
import { AnyAction } from "redux";

export interface ITodosState {
    allIds: Array<number>;
    byIds: {
        [id: number]: any;
    };
}

const initialState: number = 0;

export const counterReducer = (
    state: number = initialState,
    action: AnyAction
) => {
    switch (action.type) {
        case INCREMENT: {
            return state + 1;
        }
        case DECREMENT: {
            return state - 1;
        }
        default:
            return state;
    }
};
