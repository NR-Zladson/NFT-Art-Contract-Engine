import NftContractProvider from '../lib/NftContractProvider';

async function main() {
  if (undefined === process.env.COLLECTION_URI_PREFIX || process.env.COLLECTION_URI_PREFIX === 'ipfs://__CID___/') {
    throw '\x1b[31merror\x1b[0m ' + 'Please add the URI prefix to the ENV configuration before running this command.';
  }

  // Attach to deployed contract
  const contract = await NftContractProvider.getContract();

  console.log('Withdrawing the funds...');

    await (await contract.withdraw()).wait();

  console.log('Done!');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
