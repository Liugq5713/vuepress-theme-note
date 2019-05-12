/* eslint-disable no-unused-vars */
/* eslint-disable vue/require-render-return */

import Iconfont from './components/Iconfont.vue'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

export default ({ Vue }) => {
  Vue.component('Iconfont', {
    functional: true,
    // eslint-disable-next-line vue/require-render-return
    // eslint-disable-next-line space-before-function-paren
    render(h, { parent }) {
      if (parent._isMounted) {
        return h(Iconfont)
      } else {
        parent.$once('hook:mounted', () => {
          parent.$forceUpdate()
        })
      }
    },
  })
}
