<template>
    <section class="main-avatar">
        <svg id="avatar" :class="{ 'animationOn' : $state.isChecked }" viewBox="0 0 100 100" fill="" :style="{backgroundColor: $state.colorValues.bgColor}">
            <filter id="scribble">
            <feTurbulence type="fractalNoise"
                    baseFrequency="0.02"
                    numOctaves="2">
                <animate attributeName="seed" dur="1s" repeatCount="indefinite" values="1;10"></animate>
            </feTurbulence>
            <feDisplacementMap scale="3"
                        in="SourceGraphic" />
            </filter>
            <g id="face" :fill="$state.colorValues.faceFill" :stroke="$state.colorValues.faceBorder">
                <circle :cx="$state.numberValues.facePositionX.value" :cy="$state.numberValues.facePositionY.value" :r="$state.numberValues.faceSize.value"/>
            </g>
            <g id="eyes" :fill="$state.colorValues.eyeFill" :stroke="$state.colorValues.eyeBorder" :stroke-width="$state.numberValues.eyeBorderSize.value">
                <circle :cx="$state.numberValues.eyePositionLX.value" :cy="$state.numberValues.eyePositionLY.value" :r="$state.numberValues.eyeSize.value" />
                <circle :cx="$state.numberValues.eyePositionRX.value" :cy="$state.numberValues.eyePositionRY.value" :r="$state.numberValues.eyeSize.value" />
            </g>
            <g id="mouth" :fill="$state.colorValues.mouthFill" :stroke="$state.colorValues.faceBorder">
                <line x1="40" :x2="$state.numberValues.mouthSize.value" :y1="$state.numberValues.mouthPositionY.value" :y2="$state.numberValues.mouthPositionY.value" :transform="`translate(${$state.numberValues.mouthPositionX.value} 0)`"/>
            </g>
        </svg>
        <div class="btn-row">
            <button class="btn">CSS</button>
            <button class="btn">SVG</button>
            <button class="btn">Codepen</button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.main-avatar {
    background-color: var(--siteYellow);
    border: 1px solid;
    display: grid;
    grid-template-rows: 1fr auto;
    flex: 1;
}
#avatar {
    max-height: 610px;
    object-fit: cover;
    width: 100%;
}
.animationOn {
    filter: url(#scribble);
}
.btn-row {
    display: flex;
    .btn {
        background-color: #FF5463;
        width: 100%;
        &:hover {
            background-color: var(--textColor);
            cursor: pointer;
        }
    }
}

</style>