import type { UserConfig } from 'vite'
import { configVitePlugin } from './config/plugin'
import {viteMockServe} from "vite-plugin-mock";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: configVitePlugin(),
//   resolve: {
//     alias: {
//       '@/': '/src/',
//     },
//   },
// })
export default (): UserConfig => {
  // console.log(command, mode)
  // const isBuild = command === 'build'
  return {
    plugins:[
        configVitePlugin(),
        //mock 注意mock的路径设置 如果index.js 不需要打印 项目根路径进行解析
      viteMockServe({
        supportTs:false,
        logger:false,
        mockPath:'./src/mock/'
      })
    ],
    resolve: {
      alias: [
        {
          find: '@/',
          replacement: '/src/',
        },
      ],
    },
  }
}
