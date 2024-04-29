module.exports.handler = async (event) => {

  console.log('in SERVICE-B...');
  console.log(`SHARED_VALUE:${process.env.SHARED_VALUE}`);
  console.log(`STAGE: ${process.env.STAGE}`);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v3.0! Your function executed successfully!',
        input: event,
        change:'change 1'
      },
      null,
      2
    ),
  };
};
