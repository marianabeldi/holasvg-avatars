<template>
        <div class="side-box">
            <h3>Eyes</h3>
            <div class="side-box-option">
                <label for="eyeFill">Fill</label>
                <input type="color" id="eyeFill" name="eyeFill" v-model="$state.colorValues.eyeFill"/>
            </div>
            <div class="side-box-option">
                <label for="eyeBorder">Border</label>
                <input type="color" id="eyeBorder" name="eyeBorder" v-model="$state.colorValues.eyeBorder"/>
            </div>
            <div class="side-box-option">
                <label for="eyeSize">Size</label>
                <input type="range" id="eyeSize" name="eyeSize" min="0" max="100" v-model="$state.numberValues.eyeSize.value"/>
            </div>
            <div class="side-box-option">
                <label for="eyeBorderSize">Border Width</label>
                <input type="range" id="eyeBorderSize" name="eyeBorderSize" min="0" max="100" v-model="$state.numberValues.eyeBorderSize.value"/>
            </div>
            <div class="side-box-option">
                <label for="eyePositionLX">Position Left X</label>
                <input type="range" id="eyePositionLX" name="eyePositionLX" min="-50" max="150" v-model="$state.numberValues.eyePositionLX.value"/>
            </div>
            <div class="side-box-option">
                <label for="eyePositionLY">Position Left Y</label>
                <input type="range" id="eyePositionLY" name="eyePositionLY" min="-50" max="150" v-model="$state.numberValues.eyePositionLY.value"/>
            </div>
            <div class="side-box-option">
                <label for="eyePositionRX">Position Right X</label>
                <input type="range" id="eyePositionRX" name="eyePositionRX" min="-50" max="150" v-model="$state.numberValues.eyePositionRX.value"/>
            </div>
            <div class="side-box-option">
                <label for="eyePositionRY">Position Right Y</label>
                <input type="range" id="eyePositionRY" name="eyePositionRY" min="-50" max="150" v-model="$state.numberValues.eyePositionRY.value"/>
            </div>
        </div>
</template>


<script>
export default {
    methods: {
    }
}
</script>

<style lang="scss" scoped>


</style>