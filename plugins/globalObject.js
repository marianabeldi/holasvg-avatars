// plugins/myPlugin.js
import Vue from 'vue'

const state = {
    isChecked: true,
    mouthFill: "none",
    colorValues: {
        bgColor: "#202640",
        // mouthBorder: "#000000",
        faceFill: "#BBBBBB",
        faceBorder: "#161125",
        eyeFill: "#161125",
        eyeBorder: "#DDDDDD",
    },
    numberValues: {
        mouthPositionX: {
            value: 0,
            min: 0,
            max: 10,
        },
        mouthSize: {
            value: 60,
            min: 50,
            max: 70,
        },
        mouthPositionY: {
            value: 60,
            min: 50,
            max: 70,
        },
        faceSize: {
            value: 25,
            min: 20,
            max: 80,
        },
        facePositionX: {
            value: 50,
            min: 20,
            max: 80,
        },
        facePositionY: {
            value: 50,
            min: 20,
            max: 70,
        },
        eyeBorderSize: {
            value: 2,
            min: 0,
            max: 10,
        },
        eyeSize: {
            value: 4,
            min: 0,
            max: 10,
        },
        eyePositionLX: {
            value: 35,
            min: 25,
            max: 45,
        },
        eyePositionLY: {
            value: 50,
            min: 40,
            max: 60,
        },
        eyePositionRX: {
            value: 65,
            min: 55,
            max: 75,
        },
        eyePositionRY: {
            value: 50,
            min: 40,
            max: 60,
        },
    }
}


export default ({ app }, inject) => {
    inject('state', Vue.observable(state))
}