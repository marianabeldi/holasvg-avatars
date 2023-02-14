<template>
  <aside class="main-aside">
    <button class="btn btn-lucky" @click="randomColors">
      I'm feeling lucky
    </button>
    <div>
      <div class="side-box">
        <h3>General</h3>
        <div class="side-box-option">
          <label for="bg">Background Color</label>
          <input
            type="color"
            id="bg"
            name="bg"
            v-model="$state.colorValues.bgColor"
          />
          <label class="checkmark-label" for="animation">Animation</label>
          <input
            class="checkmark-input"
            type="checkbox"
            id="animation"
            name="animation"
            @change="$state.isChecked = !$state.isChecked"
            :checked="$state.isChecked"
          />
          <svg
            class="checkmark-bg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            aria-hidden="true"
            focusable="false"
          >
            <rect
              x="1"
              y="1"
              width="30"
              height="30"
              stroke="#202640"
              fill="none"
              stroke-width="1"
              rx="3"
              ry="3"
            ></rect>
            <polyline
              points="8,17 14,23 25,8"
              stroke="transparent"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="4"
              fill="none"
              class="checkmark"
            ></polyline>
          </svg>
        </div>
      </div>
      <SidebarFace />
      <SidebarMouth />
    </div>
    <SidebarEyes />
  </aside>
</template>

<script>
export default {
  data() {
    return {
      colorsMabel: [
        "#F44336",
        "#FFEBEE",
        "#FFCDD2",
        "#EF9A9A",
        "#E57373",
        "#EF5350",
        "#E53935",
        "#D32F2F",
        "#C62828",
        "#B71C1C",
        "#FF8A80",
        "#FF5252",
        "#FF1744",
        "#D50000",
        "#FCE4EC",
        "#F8BBD0",
        "#F48FB1",
        "#F06292",
        "#EC407A",
        "#E91E63",
        "#D81B60",
        "#C2185B",
        "#AD1457",
        "#880E4F",
        "#FF80AB",
        "#FF4081",
        "#F50057",
        "#C51162",
        "#F3E5F5",
        "#E1BEE7",
        "#CE93D8",
        "#BA68C8",
        "#AB47BC",
        "#9C27B0",
        "#8E24AA",
        "#7B1FA2",
        "#6A1B9A",
        "#4A148C",
        "#EA80FC",
        "#E040FB",
        "#D500F9",
        "#AA00FF",
        "#EDE7F6",
        "#D1C4E9",
        "#B39DDB",
        "#9575CD",
        "#7E57C2",
        "#673AB7",
        "#5E35B1",
        "#512DA8",
        "#4527A0",
        "#311B92",
        "#B388FF",
        "#7C4DFF",
        "#651FFF",
        "#6200EA",
        "#E8EAF6",
        "#C5CAE9",
        "#9FA8DA",
        "#7986CB",
        "#5C6BC0",
        "#3F51B5",
        "#3949AB",
        "#303F9F",
        "#283593",
        "#1A237E",
        "#8C9EFF",
        "#536DFE",
        "#3D5AFE",
        "#304FFE",
        "#E3F2FD",
        "#BBDEFB",
        "#90CAF9",
        "#64B5F6",
        "#42A5F5",
        "#2196F3",
        "#1E88E5",
        "#1976D2",
        "#1565C0",
        "#0D47A1",
        "#82B1FF",
        "#448AFF",
        "#2979FF",
        "#2962FF",
        "#E1F5FE",
        "#B3E5FC",
        "#81D4FA",
        "#4FC3F7",
        "#29B6F6",
        "#03A9F4",
        "#039BE5",
        "#0288D1",
        "#0277BD",
        "#01579B",
        "#80D8FF",
        "#40C4FF",
        "#00B0FF",
        "#0091EA",
        "#E0F7FA",
        "#B2EBF2",
        "#80DEEA",
        "#4DD0E1",
        "#26C6DA",
        "#00BCD4",
        "#00ACC1",
        "#0097A7",
        "#00838F",
        "#006064",
        "#84FFFF",
        "#18FFFF",
        "#00E5FF",
        "#00B8D4",
        "#E0F2F1",
        "#B2DFDB",
        "#80CBC4",
        "#4DB6AC",
        "#26A69A",
        "#009688",
        "#00897B",
        "#00796B",
        "#00695C",
        "#004D40",
        "#A7FFEB",
        "#64FFDA",
        "#1DE9B6",
        "#00BFA5",
        "#E8F5E9",
        "#C8E6C9",
        "#A5D6A7",
        "#81C784",
        "#66BB6A",
        "#4CAF50",
        "#43A047",
        "#388E3C",
        "#2E7D32",
        "#1B5E20",
        "#B9F6CA",
        "#69F0AE",
        "#00E676",
        "#00C853",
        "#F1F8E9",
        "#DCEDC8",
        "#C5E1A5",
        "#AED581",
        "#9CCC65",
        "#8BC34A",
        "#7CB342",
        "#689F38",
        "#558B2F",
        "#33691E",
        "#CCFF90",
        "#B2FF59",
        "#76FF03",
        "#64DD17",
        "#F9FBE7",
        "#F0F4C3",
        "#E6EE9C",
        "#DCE775",
        "#D4E157",
        "#CDDC39",
        "#C0CA33",
        "#AFB42B",
        "#9E9D24",
        "#827717",
        "#F4FF81",
        "#EEFF41",
        "#C6FF00",
        "#AEEA00",
        "#FFFDE7",
        "#FFF9C4",
        "#FFF59D",
        "#FFF176",
        "#FFEE58",
        "#FFEB3B",
        "#FDD835",
        "#FBC02D",
        "#F9A825",
        "#F57F17",
        "#FFFF8D",
        "#FFFF00",
        "#FFEA00",
        "#FFD600",
        "#FFF8E1",
        "#FFECB3",
        "#FFE082",
        "#FFD54F",
        "#FFCA28",
        "#FFC107",
        "#FFB300",
        "#FFA000",
        "#FF8F00",
        "#FF6F00",
        "#FFE57F",
        "#FFD740",
        "#FFC400",
        "#FFAB00",
        "#FFF3E0",
        "#FFE0B2",
        "#FFCC80",
        "#FFB74D",
        "#FFA726",
        "#FF9800",
        "#FB8C00",
        "#F57C00",
        "#EF6C00",
        "#E65100",
        "#FFD180",
        "#FFAB40",
        "#FF9100",
        "#FF6D00",
        "#FBE9E7",
        "#FFCCBC",
        "#FFAB91",
        "#FF8A65",
        "#FF7043",
        "#FF5722",
        "#F4511E",
        "#E64A19",
        "#D84315",
        "#BF360C",
        "#FF9E80",
        "#FF6E40",
        "#FF3D00",
        "#DD2C00",
        "#EFEBE9",
        "#D7CCC8",
        "#BCAAA4",
        "#A1887F",
        "#8D6E63",
        "#795548",
        "#6D4C41",
        "#5D4037",
        "#4E342E",
        "#3E2723",
        "#FAFAFA",
        "#F5F5F5",
        "#EEEEEE",
        "#E0E0E0",
        "#BDBDBD",
        "#9E9E9E",
        "#757575",
        "#616161",
        "#424242",
        "#212121",
        "#ECEFF1",
        "#CFD8DC",
        "#B0BEC5",
        "#90A4AE",
        "#78909C",
        "#607D8B",
        "#546E7A",
        "#455A64",
        "#37474F",
        "#263238",
        "#000000",
      ],
    };
  },
  methods: {
    randomColors() {
      for (var i in this.$state.colorValues) {
        this.$state.colorValues[i] =
          this.colorsMabel[Math.floor(Math.random() * this.colorsMabel.length)];
      }
      for (var e in this.$state.numberValues) {
        this.$state.numberValues[e].value = this.randomNum(e);
      }
    },
    randomHex() {
      return (
        "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
      );
    },
    randomNum(e) {
      var min = this.$state.numberValues[e].min;
      var max = this.$state.numberValues[e].max;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
};
</script>

<style lang="scss">
.main-aside {
  background-color: var(--bgColor);
  border: 1px solid var(--borderColor);
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  padding: 1rem;
  text-align: left;
  @media (min-width: 40em) /* 640px */ {
    display: grid;
  }
}
.btn.btn-lucky {
  grid-column: 1 / 3;
  margin: 0;
  order: 2;
  width: 100%;
  @media (min-width: 56em) /* 896px */ {
    order: 0;
  }
}
.side-box {
  border: 1px solid var(--borderColor);
  background-color: var(--siteYellow);
  margin: 1rem 0;
  padding: 1rem;
  > h3 {
    background-color: var(--siteYellow);
    margin-top: -1.7rem;
    padding: 0 0.4rem;
    width: max-content;
  }
}
.side-box-option {
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-block-end: 1.5rem;
  &:last-child {
    margin-block-end: 0.5rem;
  }
  label {
    margin-right: 0.5rem;
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
  border: 1px solid var(--textColor);
  border-radius: 4px;
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
  border-radius: 10px;
  height: 12px;
  -webkit-appearance: none;
  outline: none;
  background: none;
}
input[type="range"]::-webkit-slider-runnable-track {
  background-color: var(--siteBlue);
  height: 12px;
  &:hover,
  &:focus {
    background: #465479;
  }
}

input[type="range"]::-webkit-slider-thumb {
  background: var(--siteOrange);
  border-radius: 2px;
  cursor: ew-resize;
  margin-top: -8px;
  width: 12px;
  height: 28px;
  -webkit-appearance: none;
  vertical-align: middle;
  &:hover,
  &:focus {
    background: #ff5463;
    background: #84c9d2;
  }
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
input[type="checkbox"]:checked * {
  transition: all 0.1s linear;
}
input[type="checkbox"]:checked + .checkmark-bg rect,
input[type="checkbox"]:hover + .checkmark-bg rect {
  fill: var(--siteOrange);
}
input[type="checkbox"]:checked + .checkmark-bg .checkmark {
  animation: checkdraw 0.2s ease forwards;
  stroke: var(--siteYellow);
}
.checkmark-bg .checkmark {
  stroke-dasharray: 28px;
  stroke-dashoffset: 28px;
}

@keyframes checkdraw {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
