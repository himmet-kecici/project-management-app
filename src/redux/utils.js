const editMission = (state, payload) => (
    state.missions.map((mission) => {
        if (mission.id === payload.id) {
            return Object.assign({}, mission, payload.params)
        }
        return mission;
    })

)

export default editMission;