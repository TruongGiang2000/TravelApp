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
import { GraphRequest,
  GraphRequestManager, LoginManager } from "react-native-fbsdk"
import FBSDK  from 'react-native-fbsdk';
  const {
    AccessToken,
  } = FBSDK;
  import {
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin';
GoogleSignin.configure(); 
class SignIn extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      imageUrl: '',
      id: '',
      userInfo: {}
    };

  }
     
  SignInFB = () =>{
    //signin
    //const [loggedIn, setLoggedIn] = useState(false);
    //const [avatar, setAvatar] = useState(null);
    //const [name, setName] = useState('');
    
    LoginManager.logInWithPermissions(["public_profile"]).then(
      function(result) {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          console.log(
            "Login success with permissions: " +
              result.grantedPermissions.toString()
              
          );
         // this.props.navigation.navigate('User');
          //this.getInfoFromToken()
          //setLoggedIn(true);
          //let token = result.credential.accessToken;
          AccessToken.getCurrentAccessToken().then(data =>{
            const { accessToken } = data;
            console.log("data" + data)
            let graphRequest = new GraphRequest('/me', {
              accessToken,
              parameters: {
                  fields: {
                      string: 'picture.type(large),name',
                  }
              }
          }, (error, result): void => {
              const {
                  picture: {
                      data
                  },
                  name,
              } = result;
              console.log(result);
              this.setState({
                userName: result.name,
                id: result.id,
                imageUrl: result.url
            })
              
              //console.log(userName);
              
              if (error) {
                  console.log('error'+ error);
              } else {
                  console.log('result'+result);
                  //setAvatar(data);
                  //setName(name);
              }
          });
  
          const graphRequestManager = new GraphRequestManager();
          graphRequestManager.addRequest(graphRequest).start();
      });
            
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
  logout=()=>{
    LoginManager.logOut();
    //setLoggedIn(false);
    console.log('logOut');
    
  }
  //login google
  signIngg = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log("error: "+ error);
        
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log("errorcode: " + error);
        
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log("errorcodes: " + error);
      } else {
        // some other error happened
        console.log("code: " + error);
      }
    }
  };
  getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // user has not signed in yet
      } else {
        // some other error
      }
    }
  };
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
          title={translate('google')}
          onPress={this.signIngg}
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
