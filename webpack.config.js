import { resolve } from 'path';
export const entry = './src/index.js';
export const output = {
    path: resolve('public'),
    filename: 'bundle.js',
};
export const module = {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            },
        },
    ],
};