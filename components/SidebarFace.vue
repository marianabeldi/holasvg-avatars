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
                <label for="facePositionX">Position X</label>
                <input type="range" id="facePositionX" name="facePositionX" v-model="$state.valueFacePositionX" @input="changeFacePositionX"/>
            </div>
            <div class="side-box-option">
                <label for="facePositionX">Position Y</label>
                <input type="range" id="facePositionY" name="facePositionY" v-model="$state.valueFacePositionY" @input="changeFacePositionY"/>
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
        changeFacePositionX() {
            this.$state.avatarFacePositionX = this.$state.valueFacePositionX
        },
        changeFacePositionY() {
            this.$state.avatarFacePositionY = this.$state.valueFacePositionY
        },
    }
}
</script>

<style lang="scss" scoped>


</style>