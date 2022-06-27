<template>
        <div class="side-box">
            <h3>Mouth</h3>
            <!-- <div class="side-box-option">
                <label for="mouthBorder">Color</label>
                <input type="color" id="mouthBorder" name="mouthBorder" v-model="$state.mouthBorder"/>
            </div> -->
            <div class="side-box-option">
                <label for="mouthSize">Size</label>
                <input type="range" id="mouthSize" name="mouthSize" min="0" max="100" v-model="$state.numberValues.mouthSize.value"/>
            </div>
            <div class="side-box-option">
                <label for="mouthPositionX">Position X</label>
                <input type="range" id="mouthPositionX" name="mouthPositionX" min="-100" max="100" v-model="$state.numberValues.mouthPositionX.value"/>
            </div>
            <div class="side-box-option">
                <label for="mouthPositionX">Position Y</label>
                <input type="range" id="mouthPositionY" name="mouthPositionY" min="-50" max="150" v-model="$state.numberValues.mouthPositionY.value"/>
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