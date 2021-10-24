import {SAVE_CONFIGURATOR_ACTIONS_STATE} from "../actions/configurator-actions";

const initialState = {
   actionsState: {
   }
};

const configuratorReducer = (state = initialState, action) => {
   switch (action.type) {
      case SAVE_CONFIGURATOR_ACTIONS_STATE:
         return {
            ...state,
            actionsState: {...action.payload},
         }
      default:
         return state;
   }
};

export default configuratorReducer;