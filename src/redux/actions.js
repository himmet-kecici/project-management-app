export const editMission = (id, params = {}) => ({
    type: 'EDIT_MISSION',
    payload: {
        id,
        params
    }
})

