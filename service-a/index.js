
const dayjs = require('dayjs');


module.exports.handler = async (event) => {

  console.log('in SERVICE-A....');
  console.log(`SHARED_VALUE:${process.env.SHARED_VALUE}`);
  console.log(`STAGE: ${process.env.stage}`)
  console.log(`TRIGGER at ${dayjs().format('YYYY-MM-DD HH:mm:ss.SSSz')}`)
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Trigger @ ${dayjs().format('YYYY-MM-DD HH:mm:ss.SSS')} `,
        code: 'Hello World',
        input: event,
        test: 'test deployment service a again7',
      },
      null,
      2
    ),
  };
};
