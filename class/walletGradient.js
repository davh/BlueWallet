import { LegacyWallet } from './legacy-wallet';
import { HDSegwitP2SHWallet } from './hd-segwit-p2sh-wallet';
import { LightningCustodianWallet } from './lightning-custodian-wallet';
import { HDLegacyBreadwalletWallet } from './hd-legacy-breadwallet-wallet';
import { HDLegacyP2PKHWallet } from './hd-legacy-p2pkh-wallet';
import { WatchOnlyWallet } from './watch-only-wallet';
import { HDSegwitBech32Wallet } from './hd-segwit-bech32-wallet';

export default class WalletGradient {
  static hdSegwitP2SHWallet = ['#2E2553', '#493580'];
  static hdSegwitBech32Wallet = ['#2E2553', '#493580'];
  static watchOnlyWallet = ['#7d7d7d', '#4a4a4a'];
  static legacyWallet = ['#2E2553', '#493580'];
  static hdLegacyP2PKHWallet = ['#2E2553', '#493580'];
  static hdLegacyBreadWallet = ['#2E2553', '#493580'];
  static defaultGradients = ['#2E2553', '#493580'];
  static lightningCustodianWallet = ['#3ca0f3', '#3ca0f3'];
  static createWallet = ['#eef0f4', '#eef0f4'];

  static gradientsFor(type) {
    let gradient;
    switch (type) {
      case WatchOnlyWallet.type:
        gradient = WalletGradient.watchOnlyWallet;
        break;
      case LegacyWallet.type:
        gradient = WalletGradient.legacyWallet;
        break;
      case HDLegacyP2PKHWallet.type:
        gradient = WalletGradient.hdLegacyP2PKHWallet;
        break;
      case HDLegacyBreadwalletWallet.type:
        gradient = WalletGradient.hdLegacyBreadWallet;
        break;
      case HDSegwitP2SHWallet.type:
        gradient = WalletGradient.hdSegwitP2SHWallet;
        break;
      case HDSegwitBech32Wallet.type:
        gradient = WalletGradient.hdSegwitBech32Wallet;
        break;
      case LightningCustodianWallet.type:
        gradient = WalletGradient.lightningCustodianWallet;
        break;
      case 'CreateWallet':
        gradient = WalletGradient.createWallet;
        break;
      default:
        gradient = WalletGradient.defaultGradients;
        break;
    }
    return gradient;
  }

  static headerColorFor(type) {
    let gradient;
    switch (type) {
      case WatchOnlyWallet.type:
        gradient = WalletGradient.watchOnlyWallet;
        break;
      case LegacyWallet.type:
        gradient = WalletGradient.legacyWallet;
        break;
      case HDLegacyP2PKHWallet.type:
        gradient = WalletGradient.hdLegacyP2PKHWallet;
        break;
      case HDLegacyBreadwalletWallet.type:
        gradient = WalletGradient.hdLegacyBreadWallet;
        break;
      case HDSegwitP2SHWallet.type:
        gradient = WalletGradient.hdSegwitP2SHWallet;
        break;
      case HDSegwitBech32Wallet.type:
        gradient = WalletGradient.hdSegwitBech32Wallet;
        break;
      case LightningCustodianWallet.type:
        gradient = WalletGradient.lightningCustodianWallet;
        break;
      case 'CreateWallet':
        gradient = WalletGradient.createWallet;
        break;
      default:
        gradient = WalletGradient.defaultGradients;
        break;
    }
    return gradient[0];
  }
}
