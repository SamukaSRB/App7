import React from 'react';
import {View, TextInput,StyleSheet} from 'react-native';

export default props =>(
<View>
<TextInput style ={styles.visor}
placeholder='Resultado' editable={false}
value={props.resultado}
 />

</View>
)
const styles = StyleSheet.create({

visor:{
    fontSize:30,
 height:100,
 backgroundColor:'#FFF'

}


});