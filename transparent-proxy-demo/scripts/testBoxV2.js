const { ethers, upgrades } = require("hardhat");

async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  const proxyAddress = "YOUR_PROXY_ADDRESS_HERE";
  const boxV2 = await BoxV2.attach(proxyAddress);

  console.log("Testing BoxV2 contract...");

  console.log("Storing value 23...");
  const storeTx = await boxV2.store(23);
  await storeTx.wait();

  let value = await boxV2.retrieve();
  console.log("BoxV2 current value:", value.toString());

  console.log("Calling increment function...");
  const incrementTx = await boxV2.increment();
  await incrementTx.wait();

  value = await boxV2.retrieve();
  console.log("Value after increment:", value.toString());

  console.log("Calling increment function again...");
  const incrementTx2 = await boxV2.increment();
  await incrementTx2.wait();

  value = await boxV2.retrieve();
  console.log("Final value:", value.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });