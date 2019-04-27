const key = {
  db: {
    uri: process.env.stage === 0 ? process.env.dockerDbURI : process.env.dbURI
  },
  secretOrKey: process.env.secretOrKey
};

module.exports = key;
