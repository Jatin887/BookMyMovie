const mongoose = require('mongoose');

const connect = async () => {
  // eslint-disable-next-line prettier/prettier
  const mongoConnectionString = 'mongodb+srv://murpss:welcome123@dev.0svjhbe.mongodb.net/?retryWrites=true&w=majority';
  try {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    };
    await mongoose.connect(mongoConnectionString, opts);
    // eslint-disable-next-line no-console
    console.log('Successfully Connected to Database');
    logger.debug({ mongoConnectionString });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Unable to establish connection to Database');
    logger.error(`Fail to connect with database ${mongoConnectionString}`);
  }
};
module.exports = { connect };
