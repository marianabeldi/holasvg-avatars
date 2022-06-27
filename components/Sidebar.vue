<template>
    <aside class="main-aside">
        <button class="btn btn-lucky" @click="randomColors">I'm feeling lucky</button>
        <div><div class="side-box">
            <h3>General</h3>
            <div class="side-box-option">
                <label for="bg">Background Color</label>
                <input type="color" id="bg" name="bg" v-model="$state.colorValues.bgColor"/>
                <label class="checkmark-label" for="animation">Animation</label>
                <input class="checkmark-input" type="checkbox" id="animation" name="animation" @change="$state.isChecked = !$state.isChecked"  :checked="$state.isChecked"/>
                <svg class="checkmark-bg" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><rect x="1" y="1" width="30" height="30" stroke="currentColor" fill="none" stroke-width="1" rx="3" ry="3" ></rect><polyline points="8,17 14,23 25,8" stroke="transparent" stroke-linejoin="round" stroke-linecap="round" stroke-width="4" fill="none" class="checkmark"></polyline></svg>
            </div>
        </div>
        <SidebarFace/>
        <SidebarMouth/>
        </div>
        <SidebarEyes/>
    </aside>
</template>


<script>
export default {
    methods: {
        randomColors() {
            for (var i in this.$state.colorValues) {
                this.$state.colorValues[i]  = this.randomHex()
            };
            for (var e in this.$state.numberValues) {
                this.$state.numberValues[e].value  = this.randomNum(e)
            }
        },
        randomHex() {
            return '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)
        },
        randomNum(e) {
            var min = this.$state.numberValues[e].min;
            var max = this.$state.numberValues[e].max;
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
}
</script>

<style lang="scss">
.main-aside {
    background-color: var(--siteYellow);
    border: 1px solid;
    flex: 1;
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    padding: 1rem;
    text-align: left;
}
.btn.btn-lucky {
    grid-column: 1 / 3;
    margin: 0;
}
.side-box {
    border: 1px solid;
    background-color: rgba(255 255 255 / 15%);
    margin: 1rem 0;
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-block-end: 1rem;
    label {
        margin-right: .5rem;
        text-align: right;
        &:after {
            content: ":";
        }
    }
}

input[type="color"] {
    aspect-ratio: 1;
    background: transparent;
    border: none;
    height: 32px;
    padding: 0;
    width: 32px;
}
input[type="color"]::-webkit-color-swatch-wrapper {
	padding: 0;
}
input[type="color"]::-webkit-color-swatch {
	border-color: currentColor;
    border-radius: 3px;
}

input[type="range"] {
    // border: solid 1px currentColor;
    border-radius: 8px;
    height: 16px;
    -webkit-appearance: none;
    outline: none;
    background: none;
}
input[type="range"]::-webkit-slider-runnable-track {
  background-color: var(--siteBlue);
  height: 16px;
}

input[type="range"]::-webkit-slider-thumb {
    background: var(--textColor);
    border-radius: 50%;
    cursor: ew-resize;
    margin-top: -3px;
    width: 22px;
    height: 22px;
    -webkit-appearance: none;
    vertical-align: middle;
}

.checkmark-input {
    cursor: pointer;
    grid-area: 2 / 2;
    opacity: 0;
    height: 32px;
    width: 32px;
}
.checkmark-bg {
    grid-area: 2 / 2;
    pointer-events: none;
}
input[type="checkbox"]:checked * { transition: all 0.1s linear; }
input[type="checkbox"]:checked + .checkmark-bg rect, input[type="checkbox"]:hover + .checkmark-bg rect {
    fill: var(--siteBlue);
}
input[type="checkbox"]:checked + .checkmark-bg .checkmark {
    animation: checkdraw .2s ease forwards;
    stroke: #fff;
}
.checkmark-bg .checkmark {
    stroke-dasharray: 28px;
    stroke-dashoffset: 28px;
}

@keyframes checkdraw { to { stroke-dashoffset: 0; } }



</style>