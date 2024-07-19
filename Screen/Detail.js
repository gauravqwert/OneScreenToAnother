import { StyleSheet, Text, View } from 'react-native'; 
import React from 'react'; 
import { useRoute } from '@react-navigation/native'; 

const Detail = () => { 
const route = useRoute(); 

return ( 
	<View style={styles.container}> 
	<Text style={styles.title}>{route.params.message}</Text> 
	</View> 
); 
}; 

export default Detail; 

const styles = StyleSheet.create({ 
container: { 
	flex: 1, 
	backgroundColor: '#fff', 
	alignItems: 'center', 
	justifyContent: 'center', 
}, 
title: { 
	fontSize: 25, 
	fontWeight: 'bold', 
	color: 'green', 
	marginTop: 50, 
}, 
});
