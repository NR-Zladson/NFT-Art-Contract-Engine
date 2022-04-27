import { utils } from 'ethers';
import CollectionConfig from './../config/CollectionConfig';
import NftContractProvider from '../lib/NftContractProvider';

async function main() {
  // Attach to deployed contract
  const contract = await NftContractProvider.getContract();

  // Update sale price
  const publicSalePrice = utils.parseEther(CollectionConfig.publicSale.price.toString());
  if (!await (await contract.cost()).eq(publicSalePrice)) {
    console.log(`Updating the token price to ${CollectionConfig.publicSale.price} ${CollectionConfig.mainnet.symbol}...`);

    await (await contract.setCost(publicSalePrice)).wait();
  }

  // Update max amount per TX
  if (!await (await contract.maxMintAmountPerTx()).eq(CollectionConfig.publicSale.maxMintAmountPerTx)) {
    console.log(`Updating the max mint amount per TX to ${CollectionConfig.publicSale.maxMintAmountPerTx}...`);

    await (await contract.setMaxMintAmountPerTx(CollectionConfig.publicSale.maxMintAmountPerTx)).wait();
  }
  
  // Unpause the contract
  if (await contract.paused()) {
    console.log('Unpausing the contract...');

    await (await contract.setPaused(false)).wait();
  }

  console.log('Public sale is now open!');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
