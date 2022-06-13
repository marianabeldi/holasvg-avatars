export const AvatarContainer = () => import('../../components/AvatarContainer.vue' /* webpackChunkName: "components/avatar-container" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const NuxtLogo = () => import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const Sidebar = () => import('../../components/Sidebar.vue' /* webpackChunkName: "components/sidebar" */).then(c => wrapFunctional(c.default || c))
export const SidebarEyes = () => import('../../components/SidebarEyes.vue' /* webpackChunkName: "components/sidebar-eyes" */).then(c => wrapFunctional(c.default || c))
export const SidebarFace = () => import('../../components/SidebarFace.vue' /* webpackChunkName: "components/sidebar-face" */).then(c => wrapFunctional(c.default || c))
export const Tutorial = () => import('../../components/Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))

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
