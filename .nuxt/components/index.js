export { default as AvatarContainer } from '../../components/AvatarContainer.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as Sidebar } from '../../components/Sidebar.vue'
export { default as SidebarEyes } from '../../components/SidebarEyes.vue'
export { default as SidebarFace } from '../../components/SidebarFace.vue'
export { default as SidebarMouth } from '../../components/SidebarMouth.vue'
export { default as Tutorial } from '../../components/Tutorial.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
