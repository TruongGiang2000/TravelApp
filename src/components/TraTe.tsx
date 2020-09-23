import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import I18n from '../constants/languages/i18n';
class TraTe extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      i18n: I18n,
    };
  }
  componentDidMount() {
    const {language} = this.props;
    if (language) this.setMainLocaleLanguage(language);
  }

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    const {language} = nextProps;
    if (language) this.setMainLocaleLanguage(language);
  };

  setMainLocaleLanguage = (language) => {
    let i18n = this.state.i18n;
    i18n.locale = language;
    this.setState({i18n});
  };
  render() {
    const {i18nKey, style, onPress} = this.props;
    const {i18n} = this.state;
    return (
      <Text onPress={onPress} style={style}>
        {i18nKey && this.props.children
          ? i18n.t(i18nKey) + this.props.children
          : i18nKey
          ? i18n.t(i18nKey)
          : this.props.children}
      </Text>
    );
  }
}
const mapStateFromProps = (state: any) => {
  return {
    language: state.system.language,
  };
};

export default connect(mapStateFromProps, null)(TraTe);
