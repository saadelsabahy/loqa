import React, { Component } from 'react';
import {Alert , View} from 'react-native';
import {connect} from 'react-redux';
import {handleAlertPressing} from "../actions";

class AlertComponent extends Component {
    render() {
        return (
            <View>
                {
                    Alert.alert(this.props.title,this.props.message,
                        [
                            {text: 'Ask me later', onPress: (ask) =>
                                {
                                    const pressed='ask';
                                    this.props.handleAlertPressing(pressed)
                                }
                            },
                            {
                                text: 'Cancel',
                                onPress: (cancel) =>{
                                    const pressed='cancel';
                                    this.props.handleAlertPressing(pressed)
                                },
                                style: 'cancel',
                            },
                            {text: 'OK', onPress: () =>{
                                    const pressed='ok';
                                    this.props.handleAlertPressing(pressed)
                                }},
                        ],
                        {cancelable: false},
                    )
                }
            </View>
        );
    }
}
const mapStateToProps=(state)=>{
    return(
        {
            title:state.Auth.title,
            message:state.Auth.message
        }
    )
};
export default connect(mapStateToProps,{handleAlertPressing}) (AlertComponent);