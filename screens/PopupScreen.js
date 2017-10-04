// import React from 'react';
// import {
//     View,
//     Text,

// } from 'react-native';
// import PopupDialog, { SlideAnimation, DialogTitle, ScaleAnimation } from 'react-native-popup-dialog';

// const scaleAnimation = new ScaleAnimation();

// export default class PopupScreen extends React.Component {
//     constructor(props) {
//         super(props);
    
//         this.state = {
//           dialogShow: false,
//         };

//         this.showScaleAnimationDialog = this.showScaleAnimationDialog.bind(this);
//     }

//     showScaleAnimationDialog() {
//         this.scaleAnimationDialog.show();
//     }

//     render(){
//         return(
//             <View style={styles.container}>
//             <PopupDialog
//               ref={(popupDialog) => { this.popupDialog = popupDialog; }}
//               dialogAnimation = { new SlideAnimation({ slideFrom: 'bottom' }) }
//             >
//               <View>
//                 <Text>Hello</Text>
//               </View>
//             </PopupDialog>
//           </View>   
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     dialogContentView: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     navigationBar: {
//       borderBottomColor: '#b5b5b5',
//       borderBottomWidth: 0.5,
//       backgroundColor: '#ffffff',
//     },
//     navigationTitle: {
//       padding: 10,
//     },
//     navigationButton: {
//       padding: 10,
//     },
//     navigationLeftButton: {
//       paddingLeft: 20,
//       paddingRight: 40,
//     },
//     navigator: {
//       flex: 1,
//       // backgroundColor: '#000000',
//     },
//   });