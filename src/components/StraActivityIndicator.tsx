import React, {Component} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import LoadingSpinner from 'react-native-loading-spinner-overlay';
import {connect} from 'react-redux';
import {translate} from '../util/translate';
class StraActivityIndicator extends Component<any, any> {
  activityIndicator: ActivityIndicator;
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {loading} = this.props;
    return (
      <LoadingSpinner
        color={'#FA2A00'}
        visible={loading}
        textContent={`${translate('loading')}...`}
        animation={'fade'}
        textStyle={styles.title}
        overlayColor={'rgba(0, 0, 0, 0.7)'}
      />
    );
  }
}
const styles = StyleSheet.create({
  title: {
    fontFamily: 'roboto-slab-light',
    color: '#fff',
    fontSize: wp('5'),
  },
});
const mapStateFromProps = (state: any) => ({
  loading: state.system.loading,
});
export default connect(mapStateFromProps, null)(StraActivityIndicator);
