import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  CheckBox,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TraTe from '../components/TraTe';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import InputComponent from './modules/InputComponent';
import ButtonCustom from '../components/CustomButton';

class Profilecustomer extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      nameError:'',
      lastname:'',
      lastnameError:'',
      email:'',
      emailError:'',
      phone:'',
      phoneError:'',
      isNameValid: true,
    };
  }

  phoneValidator(){
    const regexp = /^\d{10,11}$/;
      if(this.state.phone !== regexp){
          this.setState({phoneError:"Số điện thoại phải có 10 - 11 chữ số."});    
      }else{
          this.setState({phoneError: ""});
      }
  }
  lastnameValidator(){
    const regexp = /^[a-zA-Z]+$/;

    // if(!isNameValid){
    //   this.setState({lastnameError: "Tên chỉ được có chữ"});
    // }else{
    //   this.setState({lastnameError: ""});
    // }
    if(this.state.lastname == ""){
      this.setState({lastnameError:"Không được để trống"})
    }
    else if(this.state.lastname !== regexp){
      this.setState({lastnameError:"Tên chỉ được chứa chữ cái", isNameValid: true,})
      
    }
    else if(this.state.lastname == regexp){
      this.setState({lastnameError:"hợp lệ!", isNameValid: false,})
    }
    else{
      this.setState({isNameValid: false,})
    }
  }
  nameValidator(){
    const regexp = /^[a-z,A-Z]+$/;
    if(this.state.name !== regexp){
      this.setState({nameError:"Tên chỉ được chứa chữ cái"})
    }
    else{
      this.setState({nameError:""})
    }
  }
  emailValidator(){
    const regexp = /^[A-Za-z0-9]+([_\.\-]?[A-Za-z0-9])*@[A-Za-z0-9]+([\.\-]?[A-Za-z0-9]+)*(\.[A-Za-z]+)+$/;
    if(this.state.email == regexp){
      this.setState({emailError:"Không được để trống"})
    }
    else{
      this.setState({emailError:""})
    }
  }
  render() {
    const {titleStyle, onPress} = this.props;
    return (
      <TouchableOpacity
        style={[styles.MainContainer, this.props.style]}
        >
          <View style={[styles.header]}>
          <View style={[styles.arrowleft]}>
          <Icon name="arrowleft" size={27} color="#000" />
        </View>
          <TraTe
            style={[styles.title]}
            i18nKey="yourinformation"/>
          </View>
          <View style={{backgroundColor: '#000', height: hp('0.1')}}/>
          <View style={styles.content}>
          <TraTe
            style={[styles.titles]}
            i18nKey="yourinformation"/>
              <InputComponent
                nkey="customername"
                onChangeText={(text)=>{this.setState({name: text})}}
                onBlur={() => {this.nameValidator()}}
              />
              
             <Text style={{color: '#ff0000'}}>{this.state.nameError}</Text>
              <InputComponent
                nkey="customersurname"
                onChangeText={(text)=>{this.setState({lastname: text})}}
                onBlur={() => {this.lastnameValidator()}}
              />
              <Text style={{color: '#ff0000'}}>{this.state.lastnameError}</Text>
              <TraTe
            style={[styles.titlename]}
            i18nKey="textname"/>
              <InputComponent
                nkey="emailaddress"
                onChangeText={(text)=>{this.setState({email: text})}}
                onBlur={() => {this.emailValidator()}}
              />
               <Text style={{color: '#ff0000'}}>{this.state.emailError}</Text>
              <TraTe
            style={[styles.titleemail]}
            i18nKey="textemail"/>
              <InputComponent
                // maxLength={11}
                nkey="phone"
                keyboardType="numeric"
                onChangeText={(Number)=>{this.setState({phone: Number})}}
                onBlur={() => {this.phoneValidator()}}
              />
              <Text style={{color: '#ff0000'}}>{this.state.phoneError}</Text>
              <View>
              <CheckBox
                style={styles.checkbox}
              />
              <TraTe
            style={[styles.titlecheckbox]}
            i18nKey="saveyourinfoforlater"/>
            </View>
          </View>
          <View style={[styles.image]}>

          </View>
          <View style={[styles.footer]}>
              <Text style={{top: wp('2'), fontSize: wp('3.5'), fontFamily: 'roboto-slab-bold', }}>đ1.000.000</Text>
              <TraTe
            style={[styles.titlefooter]}
            i18nKey="includingtaxesandfees"/>
            <View style={{position: "absolute"}}>
            <ButtonCustom
            title="nextstep"
            style={{height: hp('7'), width: wp('50'), top: wp('2'), left: wp('40')}}
            titleStyle={{fontSize: wp('5')}}
          />
          </View>
          </View>
          
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  titlename:{
    color: '#ff0',
    fontSize: wp('3'),
    fontFamily: 'roboto-slab-light'
  },
  titleemail:{
    color: '#ff0',
    fontSize: wp('3'),
    fontFamily: 'roboto-slab-light'
  },
  title:{
    position: "absolute",
    fontFamily: "roboto-slab-bold",
    color: "#00162b",
    fontSize: wp('5'),
    textAlign: "center",
    alignSelf: "center"
  },
  titles:{
    fontSize: wp('4'),
    fontFamily: 'roboto-slab-bold',
    color: '#323b45',
    top: wp('2')
  },
  header:{
    width: "100%",
    height: hp('8'),
    justifyContent: "center",
    
  },
  arrowleft: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.396078)',
    left: wp('8'),
  },
  content:{
    width: "90%",
    height: hp('65'),
    alignSelf: "center",
    top: wp('1')
  },
  image:{
    width: "100%",
    height: hp('13'),
    backgroundColor: '#0003',
    top: wp('1')
  },
  footer:{
    width: "90%",
    height: hp('10'),
    alignSelf: "center",
    top: wp('1')
  },
  checkbox:{

  },
  titlecheckbox:{
    position: "absolute",
    left: wp('10'),
    top: wp('1'),
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('4'),
  },
  titlefooter:{
    top: wp('2'),
    color: '#585858',
    fontSize: wp('3.5'),
    fontFamily: 'roboto-slab-bold',
  },
});
export default Profilecustomer;
