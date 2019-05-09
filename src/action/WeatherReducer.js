const CHANGELOADING = 'action/GETWEATHER'

export const isLoading = true

export const changeAction = () =>{
  return {
    type:CHANGELOADING
  }
}
export const isLoadingReducer = ( state = isLoading,action )=>{
  switch(action.type){
    case CHANGELOADING:{
      const newState = !state
      console.log("NewState  " +newState)
      return newState
    }
    default: return state
  }
}