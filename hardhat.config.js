/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("dotenv").config();
 require("@nomiclabs/hardhat-ethers");
 const { API_URI, PRIVATE_KEY } = process.env;
 
 module.exports = {
   solidity: "0.8.7",
   defaultNetwork: "rinkeby",
   networks: {
     hardhat: {},
     rinkeby: {
       url: API_URI,
       accounts: [`0x${PRIVATE_KEY}`],
     },
   },
 };