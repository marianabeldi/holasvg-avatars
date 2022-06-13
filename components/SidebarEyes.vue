<template>
        <div class="side-box">
            <input type="checkbox"/>
            <h3>Eyes</h3>
            <div class="side-box-option">
                <label for="eyeFill">Fill</label>
                <input type="color" id="eyeFill" name="eyeFill" v-model="$state.valueEyeFill" @input="changeEyeFill"/>
            </div>
            <div class="side-box-option">
                <label for="eyeBorder">Border</label>
                <input type="color" id="eyeBorder" name="eyeBorder" v-model="$state.valueEyeBorder" @input="changeEyeBorder"/>
            </div>
            <div class="side-box-option">
                <label for="eyeBorderSize">Border Width</label>
                <input type="range" id="eyeBorderSize" name="eyeBorderSize" v-model="$state.valueEyeBorderSize" @input="changeEyeBorderSize"/>
            </div>
            <div class="side-box-option">
                <label for="eyeSize">Size</label>
                <input type="range" id="eyeSize" name="eyeSize" v-model="$state.valueEyeSize" @input="changeEyeSize"/>
            </div>
            <div class="side-box-option">
                <label for="eyePositionLX">Position Left X</label>
                <input type="range" id="eyePositionLX" name="eyePositionLX" v-model="$state.valueEyePositionLX" @input="changeEyePositionLX"/>
            </div>
            <div class="side-box-option">
                <label for="eyePositionLY">Position Left Y</label>
                <input type="range" id="eyePositionLY" name="eyePositionLY" v-model="$state.valueEyePositionLY" @input="changeEyePositionLY"/>
            </div>
            <div class="side-box-option">
                <label for="eyePositionRX">Position Right X</label>
                <input type="range" id="eyePositionRX" name="eyePositionRX" v-model="$state.valueEyePositionRX" @input="changeEyePositionRX"/>
            </div>
            <div class="side-box-option">
                <label for="eyePositionRY">Position Right Y</label>
                <input type="range" id="eyePositionRY" name="eyePositionRY" v-model="$state.valueEyePositionRY" @input="changeEyePositionRY"/>
            </div>
        </div>
</template>


<script>
export default {
    methods: {
        changeEyeFill() {
            this.$state.avatarEyeFill = this.$state.valueEyeFill
        },
        changeEyeBorder() {
            this.$state.avatarEyeBorder = this.$state.valueEyeBorder
        },
        changeEyeBorderSize() {
            this.$state.avatarEyeBorderSize = this.$state.valueEyeBorderSize
        },
        changeEyeSize() {
            this.$state.avatarEyeSize = this.$state.valueEyeSize
        },
        changeEyePositionLX() {
            this.$state.avatarEyePositionLX = this.$state.valueEyePositionLX
        },
        changeEyePositionLY() {
            this.$state.avatarEyePositionLY = this.$state.valueEyePositionLY
        },
        changeEyePositionRX() {
            this.$state.avatarEyePositionRX = this.$state.valueEyePositionRX
        },
        changeEyePositionRY() {
            this.$state.avatarEyePositionRY = this.$state.valueEyePositionRY
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