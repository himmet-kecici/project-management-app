const initialState = [
    {
        id: 1,
        title: "practice react",
        description: 'sdf',
        status: 'In Progress'
    },
    {
        id: 2,
        title: "practice react",
        description: 'sdf',
        status: 'Completed'
    },
    {
        id: 3,
        title: "practice react",
        description: 'sdf',
        status: 'Unstarted'
    }

]

const missions = (state = { missions: initialState }, action) => {
    const { payload } = action;
    switch (action.type) {
        case "EDIT_MISSION": {
            return {
                missions: state.missions.map((mission) => {
                    if (mission.id === payload.id) {
                        return Object.assign({}, mission, payload.params)
                    }
                    return mission;
                })
            }
        }
        default: return state
    }
}


export default missions;
