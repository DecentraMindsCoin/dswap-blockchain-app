require("@nomiclabs/hardhat-waffle");
require("dotenv")
/*
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: ALCHEMY_KEY,
      accounts: [
        process.env.ACCOUNT_KEY,
      ]
    }
  }
};
