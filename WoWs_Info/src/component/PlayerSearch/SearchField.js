import React from 'react';
import { TextInput, View } from 'react-native';
import { styles } from './SearchFieldStyles';

class SearchField extends React.PureComponent {
  render() {
    const { inputStyle, viewStyle } = styles;
    const { onEndEditing } = this.props;
    return (
      <View style={viewStyle}>
        <TextInput style={inputStyle} onEndEditing={onEndEditing} underlineColorAndroid='transparent'
          autoCorrect={false} autoFocus autoCapitalize='none' clearButtonMode='while-editing' returnKeyType='search'/>
      </View>
    )
  }
}

export {SearchField};