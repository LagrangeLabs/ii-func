import { defineConfig } from 'dumi'

export default defineConfig({
  title: 'ii-func',
  favicon: 'https://avatars.githubusercontent.com/u/62231931?s=200&v=4',
  logo: 'https://avatars.githubusercontent.com/u/62231931?s=200&v=4',
  outputPath: 'docs-dist',
  publicPath: '/ii-func/',
  base: '/ii-func/',
  mode: 'site',
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'GitHub',
      path: 'https://github.com/LagrangeLabs/ii-func',
    },
  ],
  resolve: {
    includes: ['docs', 'src'],
  },
  // more config: https://d.umijs.org/config
})
