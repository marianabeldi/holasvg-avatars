// plugins/myPlugin.js
import Vue from 'vue'

const state = {
    valueBgColor: "#223300",
    avatarBgColor: "#223300",
    // valueFaceStroke: "#000000",
    // avatarFaceStroke: "#000000",
    valueEyeFill: "#000000",
    avatarEyeFill: "#000000",
    // valueEyesStroke: "#000000",
    // avatarEyesStroke: "#000000",
    valueMouthFill: "none",
    avatarMouthFill: "none",
    // valueMouthStroke: "#000000",
    // avatarMouthStroke: "#000000",
    valueFaceFill: "#CCCCCC",
    avatarFaceFill: "#CCCCCC",
    avatarFaceBorder: "#000000",
    valueFaceBorder: "#000000",
    avatarFaceSize: 25,
    valueFaceSize: 25,
    valueEyeFill: "#000000",
    avatarEyeFill: "#000000",
    valueEyeBorder: "#DDDDDD",
    avatarEyeBorder: "#DDDDDD",
    valueEyeBorderSize: 2,
    avatarEyeBorderSize: 2,
    valueEyeSize: 4,
    avatarEyeSize: 4,
    valueEyePositionLX: 35,
    avatarEyePositionLX: 35,
    valueEyePositionLY: 50,
    avatarEyePositionLY: 50,
    valueEyePositionRX: 65,
    avatarEyePositionRX: 65,
    valueEyePositionRY: 50,
    avatarEyePositionRY: 50,

}


export default ({ app }, inject) => {
    inject('state', Vue.observable(state))
}