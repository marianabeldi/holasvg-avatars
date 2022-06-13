<template>
    <aside class="main-aside">
        <button class="btn">I'm feeling lucky</button>
        <div class="side-box">
            <div class="side-box-colors">
                <h3>Colors</h3>
                <label for="bg">Background Color</label>
                <input type="color" id="bg" name="bg" v-model="$state.valueBgColor" @input="changeBgColor"/>
                <label for="stroke">Borders</label>
                <input type="color" id="stroke" name="stroke" v-model="$state.valueBorderColor" @input="changeBorderColor"/>
                <label for="face">Face</label>
                <input type="color" id="face" name="face" v-model="$state.valueFaceFill" @input="changeFaceColor"/>
                <label for="eyes">Eyes</label>
                <input type="color" id="eyes" name="eyes" v-model="$state.valueEyesFill" @input="changeEyesColor"/>
                <label for="stroke">Mouth</label>
                <input type="color" id="mouth" name="mouth" v-model="$state.valueMouthFill" @input="changeMouthColor"/>
                <button @click="randomColors">Random palette</button>
            </div>

            <label>Move face</label>

        </div>
        <SidebarFace/>
        <SidebarEyes/>
    </aside>
</template>


<script>
export default {
    methods: {
        changeBgColor() {
            this.$state.avatarBgColor = this.$state.valueBgColor
        },
        changeBorderColor() {
            this.$state.avatarBorderColor = this.$state.valueBorderColor
        },
        changeMouthColor() {
            this.$state.avatarMouthFill = this.$state.valueMouthFill
        },
        randomColors() {
            const propsarray = ['valueBgColor', 'avatarBgColor', 'avatarFaceStroke', 'avatarFaceFill', 'avatarEyeFill', 'avatarEyeBorder', 'avatarMouthFill' ]
            for (let i = 0; i < propsarray.length; i++) {
               this.randomItem(propsarray[i])
            }
        },
        randomItem(prop) {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            this.$state[prop] = `#${randomColor}`;
        }
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