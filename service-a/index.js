


module.exports.handler = async (event) => {

  console.log('in SERVICE-A....');
  console.log(`SHARED_VALUE:${process.env.SHARED_VALUE}`);
  console.log(`STAGE: ${process.env.stage}`)

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
