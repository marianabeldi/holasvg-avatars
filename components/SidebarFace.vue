<template>
        <div class="side-box">
            <h3>Face</h3>
            <div class="side-box-option">
                <label for="faceFill">Fill</label>
                <input type="color" id="faceFill" name="faceFill" v-model="$state.valueFaceFill" @input="changeFaceFill"/>
            </div>
            <div class="side-box-option">
                <label for="faceBorder">Border</label>
                <input type="color" id="faceBorder" name="faceBorder" v-model="$state.valueFaceBorder" @input="changeFaceBorder"/>
            </div>
            <div class="side-box-option">
                <label for="faceSize">Size</label>
                <input type="range" id="faceSize" name="faceSize" v-model="$state.valueFaceSize" @input="changeFaceSize"/>
            </div>
            <div class="side-box-option">
                <label for="eyePositionLX">Position Left X</label>
                <input type="range" id="eyePositionLX" name="eyePositionLX" v-model="$state.valueEyePositionLX" @input="changeEyePositionLX"/>
            </div>
        </div>
</template>


<script>
export default {
    methods: {
        changeFaceFill() {
            this.$state.avatarFaceFill = this.$state.valueFaceFill
        },
        changeFaceBorder() {
            this.$state.avatarFaceBorder = this.$state.valueFaceBorder
        },
        changeFaceSize() {
            this.$state.avatarFaceSize = this.$state.valueFaceSize
        },
    }
}
</script>

<style lang="scss" scoped>
.main-aside {
    background-color: var(--siteYellow);
    border: 1px solid;
    flex: 1;
    text-align: left;
}
.side-box {
    border: 1px solid;
    background-color: rgba(255 255 255 / 15%);
    margin: 1rem;
    padding: 1rem;
    h3 {margin-top: 0; }
}
input[type="color"] {
    aspect-ratio: 1;
    background: transparent;
    border: none;
    height: 1.8rem;
    padding: 0;
    width: 1.8rem;
}
input[type="color"]::-webkit-color-swatch-wrapper {
	padding: 0;
}
input[type="color"]::-webkit-color-swatch {
	border: none;
}
.side-box-colors {}

</style>