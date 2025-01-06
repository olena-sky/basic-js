const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(/* value */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(/* position */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};
// const chainMaker = {
//   chain: [],

//   getLength() {
//     return this.chain.length;
//   },

//   addLink(value) {
//     if (value === undefined) {
//       this.chain.push('()');
//     } else {
//       this.chain.push(`(${value})`)
//     }
//     return this;
//   },

//   removeLink(position) {
//     if (
//       typeof position !== 'number' || position < 1 || position > this.chain.length
//       || !Number.isInteger(position)
//     ) {
//       this.chain = [];
//       throw new Error('You can\'t remove incorrect link!');
//     }
//     this.chain.splice(position - 1, 1)
//   },

//   reverseChain() {
//     this.chain.reverse();
//     return this;
//   },

//   finishChain() {
//     const result = this.chain.join('~~');
//     this.chain = [];
//     return result;
//   }
// };

module.exports = {
  chainMaker
};
