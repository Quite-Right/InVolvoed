export const SAVE_CONFIGURATOR_ACTIONS_STATE = 'SAVE_CONFIGURATOR_ACTIONS_STATE';

export const saveConfiguratorActionsState = (newState) => (
    {
        type: SAVE_CONFIGURATOR_ACTIONS_STATE,
        payload: newState,
    }
)