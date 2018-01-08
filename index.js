function plugin (Vue, XEAjax) {
  Object.defineProperty(Vue.prototype, '$ajax', {
    get: function () {
      XEAjax.context = this
      return XEAjax
    }
  })
}

export default plugin
