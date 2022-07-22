// const { defineConfig } = require('@vue/cli-service')
module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set('vue', '@vue/compat');
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => ({
        ...options,
        compilerOptions: {
          compatConfig: {
            MODE: 2,
            COMPILER_V_ON_NATIVE: false,
            COMPILER_NATIVE_TEMPLATE: false,
            COMPILER_V_BIND_SYNC: false,
            ATTR_FALSE_VALUE: false,
            ATTR_ENUMERATED_COERCION: false,
            COMPILER_V_IF_V_FOR_PRECEDENCE: false,
            COMPILER_V_BIND_OBJECT_ORDER: false
          }
        }
      }));
  }
}