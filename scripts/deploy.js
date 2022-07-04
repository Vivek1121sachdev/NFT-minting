async function main() {
  const MyNFT = await ethers.getContractFactory("myNft");

  // Start deployment, returning a promise that resolves to a contract object
  const myNft = await MyNFT.deploy();
  console.log("Contract deployed to address:", myNft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
//0x59C316D213cafDF04Fb18d39b94B18485Fef5A9E 