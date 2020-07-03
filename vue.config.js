module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          parser: {
            amd: false,
          },
        },
      ],
    },
  },
  chainWebpack: config => config.resolve.symlinks(false)
}
