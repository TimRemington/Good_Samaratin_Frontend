import React, { Component } from 'react'
import { TouchableHighlight, View, StyleSheet } from 'react-native'
import call from 'react-native-phone-call'
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base'


const args = {
    number: '2036133326', // String value with the number to call
    prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
}


export default class CallForHelpButton extends Component {

    callForHelp = () => {
        call(args).catch(console.error)
    }
    
    render() {
        return (
            <FooterTab onPress={this.callForHelp}>
                <Button vertical onPress={this.callForHelp}>
                    <Icon ios='ios-medkit' name='Call For Help' style={{color:'red'}}/>
                    <Text>Call For Help</Text>
                </Button>
            </FooterTab>  
        )
    }
}




// export default class CallForHelpButton extends React.Component {



//     render() {
//         return (
//             <Container>
//                 <Button onPress={this.callForHelp} />
//                     <Text>
//                          Button
//                     </Text>
//                 <Button />
//             </Container>
//         )
//     }
// }
