import React, {Component, useState} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ButtonCustom from '../../../components/ButtonCustom';
import ButtonFBCustom from '../../../components/ButtonFBCustom';
import {translate} from '../../../util/translate';
import { withPages } from '../../../util/withPages';
import { AccessToken, GraphRequest,
  GraphRequestManager, LoginManager } from "react-native-fbsdk"
import { ShareDialog } from 'react-native-fbsdk';
//const [loggedIn, setLoggedIn] = useState(false);
      //if(loggedIn)
class SignIn extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      imageUrl: '',
      phone: '',
      email: '',
      userInfo: {}
    };

  }

 
    getInfoFromToken = token => {
      const PROFILE_REQUEST_PARAMS = {
        fields: {
          string: 'id, name,  first_name, last_name',
        },
      };
      const profileRequest = new GraphRequest(
        '/me',
        {token, parameters: PROFILE_REQUEST_PARAMS},
        (error, result) => {
          if (error) {
            console.log('login info has error: ' + error);
          } else {
            this.setState({userInfo: result});
            console.log('result:', result);
          }
        },
      );
      //new GraphRequestManager().addRequest(profileRequest).start();
    };
  logout=()=>{
    LoginManager.logOut();
    //setLoggedIn(false);
    console.log('logOut');
    
  }
  SignInFB = () =>{
    //signin
    LoginManager.logInWithPermissions(["public_profile, name"]).then(
      function(result) {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          console.log(
            "Login success with permissions: " +
              result.grantedPermissions.toString()
              
          );
          this.getInfoFromToken()
          //setLoggedIn(true);
          // let token = result.credential.accessToken;

          // token.getCurrentAccessToken().then(data =>{
          //   const { accessToken } = data;
          //   console.log(data.accessToken.toString())
          // })
        }
      },
      function(error) {
        console.log("Login fail with error: " + error);
      }
    );
    
//       // sharelink
//     const shareLinkContent = {
//       contentType: 'link',
//       contentUrl: "https://facebook.com",
//       contentDescription: 'Wow, check out this great site!',
//     };
//     var tmp = this;
//   ShareDialog.canShow(this.state.shareLinkContent).then(
//     function(canShow) {
//       if (canShow) {
//         return ShareDialog.show(tmp.state.shareLinkContent);
//       }
//     }
//   ).then(
//     function(result) {
//       if (result.isCancelled) {
//         console.log('Share cancelled');
//       } else {
//         console.log('Share success with postId: '
//           + result.postId);
//       }
//     },
//     function(error) {
//       console.log('Share fail with error: ' + error);
//     }
//   );
//     // share image
//     const FBSDK = require('react-native-fbsdk');
//     const {
//       ShareApi,
//     } = FBSDK;
//     const photoUri = 'file://' + '/path/of/photo.png'
// const sharePhotoContent =  contentType = 'photo',
//   photos: [{ imageUrl: photoUri }],
// }
// ShareDialog.show(tmp.state.sharePhotoContent);
  }

  render() {
    
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.welcomeText}>{translate('welcome')}</Text>
        <Text style={styles.title}> new amazing countries</Text>
        <View style={styles.viewContent}>
          <Text style={styles.signinText}>{translate('signin')}</Text>
          <View style={styles.textInput}>
            <FontAwesome name={'user'} size={wp('4')} color={'#A8B6C8'} />
            <TextInput
              style={styles.textInputStyle}
              placeholderTextColor={'#A8B6C8'}
              placeholder={translate('signin')}
            />
          </View>
          <View style={styles.textInput}>
            <FontAwesome name={'lock'} size={20} style={styles.icon} />
            <TextInput placeholder={'Mật khẩu'} secureTextEntry={true} />
          </View>
          <ButtonCustom
            titleStyle={styles.buttonText}
            title={translate('signin')}
            style={styles.buttonCustom}
          />
        </View>
        <Text
          style={styles.dontHaveAccount}
          onPress={this.props.onPressDontAccount}>
          {translate('dont_have_an_account')}
        </Text>
        <View style={styles.dash}>
          <View style={styles.dash1}></View>
          <Text style={styles.orText}>{translate('or')}</Text>
          <View style={styles.dash1}></View>
        </View>
        <ButtonFBCustom
          titleStyle={styles.buttonText}
          title={translate('facebock')}
          onPress={this.SignInFB}
        />
        <ButtonFBCustom
          titleStyle={styles.buttonText}
          title={translate('facebock')}
          onPress={this.logout}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingHorizontal: wp('4.5'),
  },
  welcomeText: {
    fontFamily: 'roboto-slab-bold',
    color: '#FFFFFF',
    fontSize: wp('5.5'),
    marginTop: hp('5'),
  },
  title: {
    color: '#FFFFFF',
    fontFamily: 'roboto-slab-light',
    fontSize: wp('5'),
  },
  viewContent: {
    backgroundColor: '#FFFFFF',
    marginTop: hp('7'),
    borderRadius: wp('2'),
    paddingHorizontal: wp('5'),
    paddingVertical: hp('3'),
  },
  signinText: {
    textTransform: 'uppercase',
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('4'),
    color: '#323B45',
    textAlign: 'center',
  },
  textInput: {
    marginTop: hp('2'),
    borderWidth: 2,
    borderRadius: wp('2'),
    borderColor: ' rgba(168, 182, 200, 0.196078)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('4'),
  },
  icon: {
    marginRight: wp('2'),
  },
  buttonCustom: {
    marginTop: hp('2'),
    paddingVertical: hp('2.5'),
  },
  dash: {
    marginVertical: hp('2'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.4,
  },
  dash1: {
    height: hp('0.1'),
    width: wp('37'),
    backgroundColor: '#FFFFFF',
  },
  orText: {
    fontSize: wp('3.8'),
    color: '#FFFFFF',
    marginHorizontal: wp('2'),
    fontFamily: 'roboto-slab.regular',
  },
  textInputStyle: {
    fontFamily: 'roboto-slab.regular',
    width: '95%',
    marginLeft: wp('2'),
    fontSize: wp('3.8'),
  },
  buttonText: {
    fontSize: wp('4'),
  },
  dontHaveAccount: {
    color: '#fff',
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('4'),
    alignSelf: 'center',
    marginTop: hp('2'),
  },
});
export default withPages(SignIn);
