<template>
  <section class="main-avatar">
    <svg id="avatar" :class="{ animationOn: $state.isChecked }" viewBox="0 0 100 100" width="640" height="640" :style="{ backgroundColor: $state.colorValues.bgColor }">
      <style>.animationOn { filter: url(#scribble); </style>
      <filter id="scribble">
        <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2">
          <animate
            attributeName="seed"
            dur="1s"
            repeatCount="indefinite"
            values="1;10"
          ></animate>
        </feTurbulence>
        <feDisplacementMap scale="3" in="SourceGraphic" />
      </filter>
      <g id="face" :fill="$state.colorValues.faceFill" :stroke="$state.colorValues.faceBorder">
        <circle :cx="$state.numberValues.facePositionX.value" :cy="$state.numberValues.facePositionY.value" :r="$state.numberValues.faceSize.value"/>
      </g>
      <g id="eyes" :fill="$state.colorValues.eyeFill" :stroke="$state.colorValues.eyeBorder" :stroke-width="$state.numberValues.eyeBorderSize.value">
        <circle :cx="$state.numberValues.eyePositionLX.value" :cy="$state.numberValues.eyePositionLY.value" :r="$state.numberValues.eyeSize.value"/>
        <circle :cx="$state.numberValues.eyePositionRX.value" :cy="$state.numberValues.eyePositionRY.value" :r="$state.numberValues.eyeSize.value"/>
      </g>
      <g id="mouth" :fill="$state.colorValues.mouthFill" :stroke="$state.colorValues.faceBorder">
        <line x1="40" :x2="$state.numberValues.mouthSize.value" :y1="$state.numberValues.mouthPositionY.value" :y2="$state.numberValues.mouthPositionY.value" :transform="`translate(${$state.numberValues.mouthPositionX.value} 0)`" />
      </g>
    </svg>
    <div class="btn-row">
      <button
        type="button"
        class="btn btn-copy"
        @click="clipboard()"
      >
        {{ $state.copyText }}
      </button>
      <button
        type="button"
        class="btn btn-download"
        @click="downloadSvg()"
      >
        Download
      </button>
      <form
        action="https://codepen.io/pen/define"
        method="POST"
        target="_blank"
      >
        <input type="hidden" name="data" :value="$state.codepenvalue" />
        <button
          tabindex="0"
          type="button"
          class="btn btn-codepen"
          @click="holacodepen()"
        >
          Create CodePen
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    clipboard() {

      var el = document.getElementById('avatar')
      var avatarCode = new XMLSerializer().serializeToString(el);


      // var animationOn = this.$state.isChecked
      // var avatarCode = '<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 100 100"' + ' ' + 'class="' + animationOn + '"' + ' ' + 'style="background-color:' + this.$state.colorValues.bgColor +
      //   '">' +
      //   precode +
      //   "</svg>";
  
      this.$state.copyText = "Copied!";
      setTimeout(() => (this.$state.copyText = "Copy"), 1000);
      this.copyToClipboard(avatarCode);
    },
    copyToClipboard(text) {
      if (window.clipboardData && window.clipboardData.setData) {
        // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text);
      } else if (
        document.queryCommandSupported &&
        document.queryCommandSupported("copy")
      ) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in Microsoft Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
          return document.execCommand("copy"); // Security exception may be thrown by some browsers.
        } catch (ex) {
          console.warn("Copy to clipboard failed.", ex);
          return false;
        } finally {
          document.body.removeChild(textarea);
        }
      }
    },

    downloadSvg() {
      const link = document.createElement("a");
      link.download = "my-avatar.svg";
      link.href = this.loaderURL();
      link.click();
    },
    holacodepen() {
      var pre = document.getElementById('avatar')
      var codepenhtml = new XMLSerializer().serializeToString(pre);
      var penArr = {
        title: "Hola SVG weird avatar",
        html: codepenhtml,
      };
      this.$state.codepenvalue = JSON.stringify(penArr);
      this.$nextTick(() => {
        event.target.parentElement.submit();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.main-avatar {
  background-color: var(--siteYellow);
  border: 1px solid var(--borderColor);
  display: grid;
  grid-template-rows: 1fr auto;
  flex: 1;
  min-width: 320px;
}
#avatar {
  max-height: 640px;
  object-fit: cover;
  width: 100%;
}
.animationOn {
  filter: url(#scribble);
}
.btn-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem;
  .btn {
    background-color: #ff5463;
    background-color: var(--siteOrange);
    flex-grow: 1;
    margin: 0;
    &:hover {
      background-color: var(--textColor);
      cursor: pointer;
    }
  }
}
</style>