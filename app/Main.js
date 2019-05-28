import React from 'react';
import {
	View,
  Text,
  ActivityIndicator,
  Image,
	TouchableOpacity,
  ToastAndroid,
  FlatList,
  ScrollView,
  StyleSheet,
} from 'react-native';

import { getStatusBarHeight } from 'react-native-status-bar-height';


const statusbar=getStatusBarHeight();

export default class Main extends React.Component {

  constructor(props) {

     super(props);

     this.state = {
          isLoading: true

        }

    }

			touchDemo=()=>{
				ToastAndroid.show('CARD CLICKED!', ToastAndroid.SHORT);
								}

 							webCall=()=>{
								return fetch('https://reactnativecode.000webhostapp.com/FlowersList.php')
     						.then((response) => response.json())
     						.then((responseJson) => {
								 this.setState({
         				 isLoading: false,
         				 dataSource: responseJson
       						}, function() {
       											});
     								})

     						.catch((error) => {
       						console.error(error);
     							});

									}



									componentDidMount(){
										this.webCall();
										}

  									render() {
    									if (this.state.isLoading) {
    									return (
     									<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        							<ActivityIndicator size="large" />
										  </View>
    										);
  										}

    							return(

<View style={styles.container}>

       				<View style={styles.header}>
         			<Text style={styles.headerText}>THE TECH BRIDGE</Text>
       				</View>

<ScrollView>

			 	<Text> Gallery </Text>

			 		<FlatList horizontal={"true"}
        	data={ this.state.dataSource }
            renderItem={ ({item}) =>
            <View style={{flex:1, flexDirection: 'row'}}>
            <Image source = {{ uri: item.flower_image_url  }} style={styles.imageDimensions} />
						</View>
          	}

 					keyExtractor={(item, index) => index.toString()}
        		/>

						<TouchableOpacity activeOpacity={0.7} onPress={this.touchDemo}>
						<View style={{ width: 390, height: 100, flexDirection: 'row', marginLeft: 10 }}>
		        <View  style={styles.innerCard}>
						<Image style={styles.firsticon}
				  		source={require('./images/research.png')}/ >
				  	<Image style={styles.secondicon}
					  	source={require('./images/arrow.png')}/ >
			      <Text style={styles.mainText}>{'Admission Enquiry?'}</Text>
				    <Text style={styles.subText}>{'Make an Enquiry here'}</Text>
						</View>
				    </View>
						</TouchableOpacity>


						<TouchableOpacity activeOpacity={0.7} onPress={this.touchDemo}>
						<View style={styles.MainCard}>
						<View  style={styles.innerCard}>
						<Image style={ styles.firsticon}
							source={require('./images/megaphone.png')}/ >
						<Image style={styles.secondicon}
							source={require('./images/arrow.png')}/ >
						<Text style={styles.mainText}>{'News & Updates'}</Text>
				    <Text style={styles.subText}>{'Read latest news & updates'}</Text>
						</View>
						</View>
						</TouchableOpacity>


						<TouchableOpacity activeOpacity={0.7} onPress={this.touchDemo}>
						<View style={styles.MainCard}>
						<View  style={styles.innerCard}>
						<Image style={styles.firsticon}
							source={require('./images/login.png')}/ >
						<Image style={styles.secondicon}
							source={require('./images/arrow.png')}/ >
						<Text style={styles.mainText}>{'Registered User?'}</Text>
				    <Text style={styles.subText}>{'Login with your credentials'}</Text>
						</View>
						</View>
						</TouchableOpacity>


						<TouchableOpacity activeOpacity={0.7} onPress={this.touchDemo}>
						<View style={styles.MainCard}>
						<View  style={styles.innerCard}>
						<Image style={styles.firsticon}
							source={require('./images/contact.png')}/ >
						<Image style={styles.secondicon}
							source={require('./images/arrow.png')}/ >
						<Text style={styles.mainText}>{'Contact Us'}</Text>
		    		<Text style={styles.subText}>{'Get your contact details here'}</Text>
						</View>
						</View>
						</TouchableOpacity>


						<TouchableOpacity  activeOpacity={0.7}onPress={this.touchDemo}>
						<View style={styles.MainCard}>
						<View  style={styles.innerCard}>
						<Image style={styles.firsticon}
							source={require('./images/group.png')}/ >
						<Image style={styles.secondicon}
							source={require('./images/arrow.png')}/ >
						<Text style={styles.mainText}>{'About Us'}</Text>
			   	  <Text style={styles.subText}>{'Get to know'}</Text>
						</View>
						</View>
						</TouchableOpacity>


</ScrollView>
</View>
    )
  }
}

//STYLES
const styles = StyleSheet.create({
 container: {
   flex:1,
   backgroundColor: "#f8f8ff",
 		},


MainCard:{
	width: 390,
	height: 100,
	flexDirection: 'row',
	marginLeft: 10 ,
	marginTop:-18
},

innerCard:{
	flex: 1,
	backgroundColor: '#00B98D',
	alignSelf: 'flex-end',
	borderRadius: 10
},

firsticon:
{
	width: 30,
	height: 30,
	position: 'absolute' ,
	margin: 12
},

secondicon:{
	width: 30,
	height: 30,
	position: 'absolute' ,
	marginLeft:345,
	marginTop:12
},

mainText:{
	color: 'white',
	fontSize: 15,
	fontWeight: 'bold',
	marginLeft:120,
	marginTop:5
},

subText:
{ color: 'white',
fontSize: 12,
marginLeft: 120 ,
marginTop: 10,
marginBottom:5 },

 MainContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

 header: {
   backgroundColor: "#00B98D",
   height:54 +statusbar ,
   paddingTop:statusbar
 },

 headerText: {
   color: "#fff",
   fontSize: 20,
	 marginTop: 4,
	 textAlign:'center',
   fontWeight:'bold'
  },
 content: {
   backgroundColor: "white",
   padding: 20,
 },
 imagePadding: {
   padding : 1

 },
 imageDimensions : {
   marginLeft:15,
   width:330,
   height:250
 },
 loader:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
   },

});
