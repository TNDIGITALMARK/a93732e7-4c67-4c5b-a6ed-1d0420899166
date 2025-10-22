'use client';

import { useState } from 'react';

export default function WalletButton() {
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  const handleConnect = () => {
    // Mock wallet connection - in production, integrate @solana/wallet-adapter
    const mockAddress = `${Math.random().toString(36).substring(2, 8)}...${Math.random().toString(36).substring(2, 6)}`;
    setWalletAddress(mockAddress);
    setConnected(true);
  };

  const handleDisconnect = () => {
    setWalletAddress('');
    setConnected(false);
  };

  if (connected) {
    return (
      <button
        onClick={handleDisconnect}
        className="gradient-button h-[44px] px-6 rounded-[8px] text-sm font-bold uppercase tracking-wide"
      >
        {walletAddress}
      </button>
    );
  }

  return (
    <button
      onClick={handleConnect}
      className="gradient-button h-[44px] px-6 rounded-[8px] text-sm font-bold uppercase tracking-wide"
    >
      Connect Wallet
    </button>
  );
}
