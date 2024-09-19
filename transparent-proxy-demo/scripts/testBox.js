const { ethers } = require("hardhat");

async function main() {
  const Box = await ethers.getContractFactory("Box");
  const box = Box.attach("YOUR_PROXY_ADDRESS_HERE");

  await box.store(23);
  const value = await box.retrieve();
  console.log("Box value:", value.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });