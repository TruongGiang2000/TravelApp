import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import TraTe from './src/components/TraTe';
import * as actions from './src/redux/actions/index';
import {connect} from 'react-redux';
class index extends Component<any, any> {
  setLanguage = (language: any) => {
    this.setState({language});
    this.props.setLanguage(language);
  }
  render() {
    const {language} = this.props;
    const isVNLang = language === 'vi' ? true: false;
    return (
        <View style={styles.container}>
          <TraTe i18nKey={'school'}/>
          <TouchableOpacity onPress={() => this.setLanguage('vi')}>
            <Text>Việt Nam</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setLanguage('en')}>
            <Text>English</Text>
          </TouchableOpacity>
        </View>
    );
  }
}
const mapStateToProps = state => {
	return {
		language: state.languageReducer.language
	};
};

const mapDispatchToProps = dispatch => {
    return {
        setLanguage: language => {
            dispatch(actions.changeLanguage(language));
        }
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
