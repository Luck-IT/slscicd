/**
 * @file
 * @author Wenjun Wu <wenjun.wu@lotusflare.com>
 * create on 2024-04-16
 */
module.exports = {
  counter: () => {
    let cn = 0;
    return () => ++cn;
  },
  handler: () => this.counter(),
};
