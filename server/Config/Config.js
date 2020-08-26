const config = {
  production: {
    SECRET: process.env.SECRET,
    DATABASE: process.env.MONGODB_URI,
  },
  default: {
    SECRET: 'helloworld',
    DATABASE: 'mongodb://localhost/college',
  },
};

exports.get = function (env) {
  return config[env] || config.default;
};
