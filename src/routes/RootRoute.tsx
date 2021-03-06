import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import App from './index';
import {connect} from 'react-redux';
import StraActivityIndicator from '../components/StraActivityIndicator';
const RootRoute = (props) => {
  const {loading} = props;
  if (!String.prototype.format) {
    String.prototype.format = function () {
      var args = arguments;
      return this.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != 'undefined' ? args[number] : match;
      });
    };
  }
  return (
    <View style={styles.mainContainer}>
      {loading && <StraActivityIndicator />}
      <StatusBar
        backgroundColor={'#ffffff'}
        barStyle={'dark-content'}
        animated={true}
      />
      <App />
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
const mapStateFromProps = (state: any) => {
  return {
    loading: state.system.loading,
  };
};
export default connect(mapStateFromProps, null)(RootRoute);
