<template>
  <div class="main-wrapper">
    <b class="top"></b>
    <h1><span class="home-link"><a href="https://holasvg.com/">hola svg</a></span>Free Open SVG <span class="highlight">Avatars</span></h1>
    <main class="main-container">
      <Sidebar/>
      <AvatarContainer/>
    </main>
    <Share/>
  <Footer/>
</div>
</template>

<script>
export default {
  name: 'IndexPage',
  head() {
    return {
      title: 'Hola SVG Avatars',
      meta: [
        { name: 'title', content: "Hola SVG Avatars" },
        { name: 'description', content: "Free Open SVG Avatars Generator" },
        { name: 'author', content: "Mariana Beldi" },
        { property: 'og:type', content: "website" },
        { property: 'og:url', content: "https://avatars.holasvg.com" },
        { property: 'og:title', content: "Hola SVG Avatars" },
        { property: 'og:description', content: "Free Open SVG Avatars" },
        { property: 'og:image', content: "/holasvg-avatars.gif" },
        { property: 'twitter:card', content: "summary_large_image" },
        { property: 'twitter:url', content: "https://avatars.holasvg.com" },
        { property: 'twitter:title', content: "Hola SVG Icons" },
        { property: 'twitter:description', content: "Free Open SVG Avatars Generator" },
        { property: 'twitter:image', content: "/holasvg-avatars.gif" },
      ],
    };
  },
  data() {
      return {
      }
  },
}
</script>


<style lang="scss">
:root {
  --bgLighter: #fffaf4;
  --borderColor: #3b4257;

  --bgColor: #202540;

  --stripedColor: rgba(255,255,255,.7);

  --siteRed: #293045;

  --siteOrange: #ffb000;
  --siteOrange: #ff9a8a;

  --siteYellow: #ffb000;
  --siteYellow: #161225;

  --siteLightblue: #84c9d2;

  --siteBlue: #8899c9;

  --siteGreen: #9EE6CF;

  --textColor: #ffeae1;

  --borderColor: #222831;
  --stripedColor: rgba(255,255,255,.7);
}
html {
  font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
button, input, textarea, select {
  font: inherit;
}
.top {
  background-color: var(--siteBlue);
  background-color: var(--siteOrange);
  border-bottom: 1px solid var(--borderColor);
  height: .5rem;
  width: 100%;
}
body {
  background-color: var(--siteYellow);
  background-image: linear-gradient(0deg,transparent 24%, var(--siteRed) 25%, var(--siteRed) 26%,transparent 27%,transparent 74%, var(--siteRed)  75%, var(--siteRed)  76%,transparent 77%,transparent),linear-gradient(90deg,transparent 24%, var(--siteRed)  25%, var(--siteRed)  26%,transparent 27%,transparent 74%, var(--siteRed)  75%, var(--siteRed)  76%,transparent 77%,transparent);
  background-size: 40px 40px;
  color: var(--textColor);
  height: 100%;
  margin: 0;
  text-align: center;
}
.main-wrapper {
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  min-height: 100vh;
}
h1 {
  font-weight: 900;
  letter-spacing: .05em;
  margin: 3rem 0 0;
  text-transform: uppercase;
}
a { transition: all .2s; }
.btn {
  background-color: var(--siteOrange);
  border: 0;
  border-radius: 4px;
  color: var(--siteYellow);
  font-family: inherit;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 1rem;
  padding: .8rem 1.6rem;
  transition: all ease .3s;
  &:hover {
    cursor: pointer;
    background-color: var(--textColor);
  }
}
.highlight {
  color: var(--siteOrange);
}
.home-link {
  display: block;
  font-size: 1rem;
  a {
    color: var(--siteBlue);
    transition: color .2s;
    text-decoration: none;
    &:hover {
      color: var(--siteLightblue);
    }
  }
}
// h2 { font-size: 1.2rem; font-weight: 400; }
// h2 a {
//   color: var(--siteBlue);
//   &:hover {
//     color: var(--siteOrange);
//     text-decoration: none;
//   }
// }
.main-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem;
}
</style>