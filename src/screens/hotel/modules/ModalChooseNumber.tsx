import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Text, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
class ModalChooseNumber extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {key: 1},
        {key: 2},
        {key: 3},
        {key: 4},
        {key: 5},
        {key: 6},
        {key: 7},
        {key: 8},
        {key: 9},
        {key: 10},
      ],
    };
  }
  onPressItem = (value: number) => {
    this.props.onItemChange(value);
  };
  renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => this.onPressItem(item.key)}>
        <Text style={styles.itemText}>{item.key}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={styles.viewBottom}>
          <FlatList
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.key + ''}
            ItemSeparatorComponent={() => {
              return <View style={styles.viewLine} />;
            }}
            initialNumToRender={4}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  viewBottom: {
    backgroundColor: '#fff',
    borderRadius: wp('3'),
    height: hp('30'),
  },
  viewLine: {
    width: '100%',
    height: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.301961)',
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp('1.5'),
  },
  itemText: {
    color: '#000',
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('6'),
  },
});
export default ModalChooseNumber;
