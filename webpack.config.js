const path = require('path');

module.exports = {
  mode: 'development', // Switch to 'production' as needed
  entry: './app/javascript/packs/application.tsx', // Ensure this is your entry point
  output: {
    path: path.resolve(__dirname, 'public/packs'),
    filename: 'application.js', // Output file
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  node: {
    global: true,
    __dirname: false,
    __filename: false,
  },
  
};
