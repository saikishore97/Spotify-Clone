export const INITIAL_STATE = {
    user:null,
    // token: 'BQAET4ZkbJ1xmvGCECi6FsQ8vw6CjakPMiRmCEudMpAmFTQoWvpVzjqqHpf2qfDfniP3KDrsKEvB-fgkqdAEE-Mp7CPuLfhpr2sS-iE19n9mtIckRzCIc95AseS83O88PvaYqqZdmKQgl1Uf5HOhZPYtw2AF',
    playlists:[],
    playing:false,
    item:null,
    token:null,
}

const reducer =(state,action)=>{

    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user:action.payload,
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token:action.payload,
            }
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists:action.payload,
            }
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly:action.payload,
            }
        default:
            return state
    }

}

export default reducer;