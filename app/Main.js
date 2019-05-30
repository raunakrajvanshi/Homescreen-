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

import axios from 'axios';
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

  	async	componentDidMount(){
		fetch('http://demo.schoolbridge.in/mobile/get_show_on_app_photos/1')
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


    render() {
    			if (this.state.isLoading) {
    			  return (
     		            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  			    <ActivityIndicator size="large" />
		            </View>
    		             );
  			    }


		return(
          <View style={styles.container}> //Main Parent
           <View style={styles.header}> //Header
             <Text style={styles.headerText}>THE TECH BRIDGE</Text> // Header Text
       	   </View>

	   <Text> Gallery </Text>

					//FlatList to display API Images
	   <FlatList horizontal={"true"}
             style={{flex:1}}
             data={ this.state.dataSource.data }
             renderItem={ ({item}) => //renders each item
               <View style={{flex:1,flexDirection: 'row'}}>
               <Image source = {{ uri: item.image  }} style={styles.imageDimensions} />
               </View>
                }

               keyExtractor={(item, index) => index.toString()}
            />

// Second Container That holds entire Card Flex 2 since it occupies 2/3 of screen

<View style={{flex:2,backgroundColor: 'rgba(52, 52, 52, alpha', padding:10,flexDirection:'column'}}>

  <TouchableOpacity style={styles.TouchableStyle}>
	//First part of card that holds Icon and both Text
    <View style={styles.FirstCardPart}>
    <Image style={styles.icon}
     source={require('./images/contact.png')}/ >
      <View style={{flex:1,flexDirection:'column',marginLeft:30}}>
        <Text style={styles.mainText}> Admission Enquiry? </Text>
        <Text style={styles.subText}> Make an enquiry here </Text>
      </View>
    </View>

    	<View style={{flex:1,padding:20}}>
      	<Image style={styles.icon}
      	source={require('./images/arrow.png')}/ >
      </View>

 	</TouchableOpacity>



 	<TouchableOpacity style={styles.TouchableStyle}>
     		<View style={styles.FirstCardPart}>
     		 <Image style={styles.icon}
      		  source={require('./images/megaphone.png')}/ >
                 <View style={{flex:1,flexDirection:'column',marginLeft:30}}>
         	  <Text style={styles.mainText}> News & Updates' </Text>
         	  <Text style={styles.subText}> Read latest news & updates </Text>
                 </View>
               </View>

    <View style={{flex:1,padding:20}}>
      <Image style={styles.icon}
      source={require('./images/arrow.png')}/ >
    </View>

  	</TouchableOpacity>


    <TouchableOpacity style={styles.TouchableStyle}>
      <View style={styles.FirstCardPart}>
        <Image style={styles.icon}
        source={require('./images/login.png')}/ >

        <View style={{flex:1,flexDirection:'column',marginLeft:30}}>
          <Text style={styles.mainText}> Registered User? </Text>
          <Text style={styles.subText}> Login with your credentials</Text>
        </View>
     </View>

     <View style={{flex:1,padding:20}}>
      <Image style={styles.icon}
      source={require('./images/arrow.png')}/ >
     </View>

  </TouchableOpacity>

    <TouchableOpacity style={styles.TouchableStyle}>
      <View style={styles.FirstCardPart}>
        <Image style={styles.icon}
        source={require('./images/contact.png')}/ >

      	<View style={{flex:1,flexDirection:'column',marginLeft:30}}>
           <Text style={styles.mainText}> Contact Us </Text>
           <Text style={styles.subText}> Get your contact details here</Text>
        </View>

      </View>

      <View style={{flex:1,padding:20}}>
        <Image style={styles.icon}
        source={require('./images/arrow.png')}/ >
      </View>

   </TouchableOpacity>


    <TouchableOpacity style={styles.TouchableStyle}>
      <View style={styles.FirstCardPart}>
        <Image style={styles.icon}
        source={require('./images/group.png')}/ >

         <View style={{flex:1,flexDirection:'column',marginLeft:30}}>
          <Text style={styles.mainText}> About us. </Text>
          <Text style={styles.subText}> Get to know </Text>
         </View>
      </View>

      <View style={{flex:1,padding:20}}>
        <Image style={styles.icon}
        source={require('./images/arrow.png')}/ >
      </View>

    </TouchableOpacity>
 </View>
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
icon:
{
	width: 30,
	height: 30
	},
	icon2:
	{
		width: 30,
		height: 30,
		alignItems: 'center',
		},
mainText:{
	color: 'white',
	fontSize: 17,
	fontWeight: 'bold',
},
subText:
{ color: 'white',
fontSize: 15,
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

  TouchableStyle:
    {
      flex: 1,
      backgroundColor: '#00B98D',
      borderRadius: 10 ,
      margin: 5,
      flexDirection:'row',
      alignItems: 'center'},

		FirstCardPart:
		{
			flex:8,
			padding:20,
			flexDirection: 'row',
			alignItems: 'center'
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
