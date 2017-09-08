import {connect} from 'react-redux';

import  GrowthNote from '../component/GrowthNote';
import  actions from '../action/index';

const mapStateToProps = state => ({growthNotes: state.growthNotes});
const mapDispatchToProps = dispatch => ({
    deleteGrowthNote: rawId => dispatch(actions.deleteGrowthNote(rawId)),
    updateGrowthNote: (rawId,growthNote) => dispatch(actions.updateGrowthNote(rawId,growthNote))
});

export default connect(mapStateToProps, mapDispatchToProps)(GrowthNote);
