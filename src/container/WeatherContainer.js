import { connect } from 'react-redux'
import Weather from '../component'
import {changeAction} from '../action/WeatherReducer'
import { dispatch } from '../../../../Library/Caches/typescript/3.4.3/node_modules/rxjs/internal/observable/range';

const mapStateToProps = (state) => {
  const { isLoading, isLoadingReducer } = state
  return {
    isLoading:isLoadingReducer
  }
}
const mapDispatchTpProps = (dispatch) => {
  return {
    change : function(){
      const action = changeAction()
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps,mapDispatchTpProps)(Weather)