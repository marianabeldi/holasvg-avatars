<template>
    <aside class="main-aside">
        <button class="btn" @click="randomColors">I'm feeling lucky</button>
        <div class="side-box">
            <h3>General</h3>
            <div class="side-box-option">
                <label for="bg">Background Color</label>
                <input type="color" id="bg" name="bg" v-model="$state.valueBgColor" @input="changeBgColor"/>
                <!-- <label for="stroke">Borders</label>
                <input type="color" id="stroke" name="stroke" v-model="$state.valueFaceBorder" @input="changeBorderColor"/>
                <label for="face">Face</label>
                <input type="color" id="face" name="face" v-model="$state.valueFaceFill" @input="changeFaceFill"/>
                <label for="eyes">Eyes</label>
                <input type="color" id="eyes" name="eyes" v-model="$state.valueEyesFill" @input="changeEyeFill"/> -->
            </div>
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
            this.$state.avatarFaceBorder = this.$state.valueFaceBorder
        },
        changeEyeFill() {
            this.$state.avatarEyeFill = this.$state.valueEyeFill
        },
        changeFaceFill() {
            this.$state.avatarFaceFill = this.$state.valueFaceFill
        },
        randomColors() {
            const propsarray = ['valueBgColor', 'avatarBgColor', 'avatarFaceBorder', 'avatarFaceFill', 'avatarEyeFill', 'avatarEyeBorder', 'avatarMouthFill' ]
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

<style lang="scss">
.main-aside {
    background-color: var(--siteYellow);
    border: 1px solid;
    flex: 1;
    text-align: left;
}
.side-box {
    border: 1px solid;
    background-color: rgba(255 255 255 / 15%);
    margin: 1rem 1rem 2rem;
    padding: 1rem;
    > h3 {
        background-color: var(--siteYellow);
        margin-top: -1.7rem; 
        padding: 0 .4rem;
        width: max-content;
    }
}
.side-box-option {
    align-items: center;
    display: flex;
    margin-block-end: .5rem;
    label {
        margin-right: .5rem;
    }
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

input[type="range"] {
  border: solid 2px #82CFD0;
  border-radius: 8px;
  height: 7px;
  transition: background 450ms ease-in;
}
input[type="range"]::-webkit-slider-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  -webkit-appearance: none;
  cursor: ew-resize;
  background: var(--textColor);
}

</style>