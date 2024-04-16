
const service1 = require('service/server1');

module.exports.handler = async (event) => {

  console.log('in beta 3');
  service1();
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v3.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};
