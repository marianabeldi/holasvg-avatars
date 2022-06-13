<template>
    <section class="main-avatar">
        <svg id="avatar" viewBox="0 0 100 100" width="600" height="600" fill="" :style="{backgroundColor: $state.avatarBgColor}">
            <filter id="scribble">
            <feTurbulence type="fractalNoise"
                    baseFrequency="0.02"
                    numOctaves="2">
                <animate attributeName="seed" dur="1s" repeatCount="indefinite" values="1;10"></animate>
            </feTurbulence>
            <feDisplacementMap scale="3"
                        in="SourceGraphic" />
            </filter>
            <g id="face" :fill="$state.avatarFaceFill" :stroke="$state.avatarFaceBorder">
                <circle :cx="$state.avatarFacePositionX" :cy="$state.avatarFacePositionY" :r="$state.avatarFaceSize"/>
            </g>
            <g id="eyes" :fill="$state.avatarEyeFill" :stroke="$state.avatarEyeBorder" :stroke-width="$state.avatarEyeBorderSize">
                <circle :cx="$state.avatarEyePositionLX" :cy="$state.avatarEyePositionLY" :r="$state.avatarEyeSize" />
                <circle :cx="$state.avatarEyePositionRX" :cy="$state.avatarEyePositionRY" :r="$state.avatarEyeSize" />
            </g>
            <g id="mouth" :fill="$state.avatarMouthFill" :stroke="$state.avatarFaceBorder">
                <line x1="40" x2="60" y1="60" y2="60"/>
            </g>
        </svg>
        <div>
            <button>CSS</button>
            <button>SVG</button>
            <button>Codepen</button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.main-avatar {
    border: 1px solid;
    flex: 1;
}
#avatar {
    filter: url(#scribble);
}

</style>