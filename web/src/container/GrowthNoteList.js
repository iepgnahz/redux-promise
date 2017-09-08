import {connect} from 'react-redux';

import  GrowthNoteList from '../component/GrowthNoteList';

const mapStateToProps = state => ({growthNotes: state.growthNotes});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(GrowthNoteList);