module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          "moduleName":"@env",
          "path":".env",
          "balcklist":null,
          "whitelist":null,
          "safe":false,
          "allowUndefined":true,
        },
      ],
    ],
  };
};
