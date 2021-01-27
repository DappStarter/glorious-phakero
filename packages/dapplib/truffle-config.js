require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remind artist gesture forest frame taste'; 
let testAccounts = [
"0x2b24ca3b3301861ac5de4e7f3ccd2be01cc405680abd7294e09ca3967c348f20",
"0xa49058284e08e8c45d8df4700cb7f1bf49e55e6639fc6193f2b947a2238b3c21",
"0xcc585050f3f20ad434487eb3f93711557e1b05ee22f75c839c5338793d0c820a",
"0x21d887edfa782d941d14b5dc2c870f820359dcee303bfd390dae35a0f601a9f7",
"0xcc33a8d2be4db73ab5b7d7d654cfcb20887830c6012e2bf666f335459ebbec89",
"0x56d5f860ca6c581de1ec7afffb89de9a3635e8aac7b4644e415bdf6bff90b3df",
"0x4f4f0d806e33c85c4757d7d0ed9420624a14fa57f6dfc4f2cc28020771752eb1",
"0xd1fc00e83491672134f8c0d7d1c3b3a49de882fdc3e5df489ca74a08fa04fd81",
"0x68fba6115ff9b346e1f59c89363c5963514fbdc315edff81179a64fc364e847d",
"0xa4a0e73277e87190e1e714036a6366c141467310dd145874a658988b67c2ce74"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
