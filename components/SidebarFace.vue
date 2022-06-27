<template>
        <div class="side-box">
            <h3>Face</h3>
            <div class="side-box-option">
                <label for="faceFill">Fill</label>
                <input type="color" id="faceFill" name="faceFill" v-model="$state.colorValues.faceFill"/>
            </div>
            <div class="side-box-option">
                <label for="faceBorder">Border</label>
                <input type="color" id="faceBorder" name="faceBorder" v-model="$state.colorValues.faceBorder"/>
            </div>
            <div class="side-box-option">
                <label for="faceSize">Size</label>
                <input type="range" id="faceSize" name="faceSize" min="0" max="100" v-model="$state.numberValues.faceSize.value"/>
            </div>
            <div class="side-box-option">
                <label for="facePositionX">Position X</label>
                <input type="range" id="facePositionX" name="facePositionX" min="-50" max="150" v-model="$state.numberValues.facePositionX.value"/>
            </div>
            <div class="side-box-option">
                <label for="facePositionX">Position Y</label>
                <input type="range" id="facePositionY" name="facePositionY" min="-50" max="150" v-model="$state.numberValues.facePositionY.value"/>
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