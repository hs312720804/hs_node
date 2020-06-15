
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

// 定义nodejs环境变量：决定使用browserslist的那个环境
process.env.NODE_ENV = 'production'

// 复用loader
const commonCssLoader = [
    // 'style-loader',
    // MiniCssExtractPlugin.loader,
    {
        loader: MiniCssExtractPlugin.loader,
        options: {
            // 解决css文件中的url路径问题
            publicPath: '../'
        }
    },
    'css-loader',
    {
        // 还需要在package.json中定义browserslist
        // 指定兼容哪些版本的浏览器
        loader: 'postcss-loader',
        options: {
            ident: 'postcss',
            plugins: () =>{
                require('postcss-preset-env')
            }
        }

    }
];

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build'),
        
    },
    module: {
        rules: [
            {
                // 处理样式文件
                test:/\.css$/,
                use: [...commonCssLoader]
                    
            },
            {
                // 处理less样式文件
                test:/\.less$/,
                use: [...commonCssLoader,'less-loader']
            },
            /*
                正常来讲，一个文件只能被一个loader处理.
                当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序：
                    先执行 eslint 在执行 babel
            */
            {
                // js语法检查
                // 在 package.json 中 eslintConfig --> airbnb
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                // 优先处理 先执行 eslint 在执行 babel
                enforce: 'pre',
                options: {
                    fix: true
                }
            },
            {
                // js兼容性处理
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    // 预设：指示babel做怎么样的兼容性处理
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                // 按需加载
                                useBuiltIns: 'usage',
                                // 指定core-js版本
                                corejs: {version: 3},
                                // 指定兼容性做到哪个版本浏览器
                                targets: {
                                    chrome: '60',
                                    firefox: '60',
                                    safari: '10',
                                    ie: '9',
                                    edge: '11'
                                }
                            }
                        ],

                    ]
                }
            },
            
            {
                // 处理图片资源
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 8*1024,
                    outputPath:'imgs',
                    name: '[hash:7].[ext]'
                }
            },
            {
                // 处理html中的图片资源
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                // 处理其他资源
                exclude: /\.(js|html|css|less|jpg|png|gif)/,
                // 原封不动输出文件
                loader: 'file-loader',
                options: {
                    name: 'media/[hash:7].[ext]'
                }
            }

        ]
    },
    plugins: [
        // 处理HTML
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            minify: {
                // 移除空格
                collapseWhitespace: true,
                // 移除注释
                removeComments: true
            }
        }),
        // 将css提取成单独文件
        new MiniCssExtractPlugin({
            filename: 'css/built.css'
        }),
        // 压缩css代码
        new optimizeCssAssetsWebpackPlugin()
    ],
    mode: 'production'
}