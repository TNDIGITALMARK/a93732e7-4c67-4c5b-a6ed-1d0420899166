import { Submission, Round, LeaderboardEntry } from '@/types/arena';

// Mock wallet addresses
export const mockWallets = [
  '7xK2mN...8pQr',
  '9vB4hL...2wXz',
  '3nR8fM...5kYt',
  '6pL9sC...7mVn',
  '4hT8nK...3rWp',
  '8vM2pL...6qYz',
  '2nF5kR...9sVt',
  '5tP9hM...4wXn',
  '1rK6fL...7pQm'
];

// Mock submissions with generated artwork
export const mockSubmissions: Submission[] = [
  {
    id: '1',
    artworkUrl: '/generated/artwork-1.png',
    walletAddress: mockWallets[0],
    likes: 31,
    timestamp: new Date(Date.now() - 300000),
    roundId: 'current',
    likedBy: []
  },
  {
    id: '2',
    artworkUrl: '/generated/artwork-2.png',
    walletAddress: mockWallets[1],
    likes: 23,
    timestamp: new Date(Date.now() - 420000),
    roundId: 'current',
    likedBy: []
  },
  {
    id: '3',
    artworkUrl: '/generated/artwork-3.png',
    walletAddress: mockWallets[2],
    likes: 18,
    timestamp: new Date(Date.now() - 180000),
    roundId: 'current',
    likedBy: []
  },
  {
    id: '4',
    artworkUrl: '/generated/rocket-icon.png',
    walletAddress: mockWallets[3],
    likes: 27,
    timestamp: new Date(Date.now() - 240000),
    roundId: 'current',
    likedBy: []
  },
  {
    id: '5',
    artworkUrl: '/generated/artwork-1.png',
    walletAddress: mockWallets[4],
    likes: 15,
    timestamp: new Date(Date.now() - 360000),
    roundId: 'current',
    likedBy: []
  },
  {
    id: '6',
    artworkUrl: '/generated/artwork-2.png',
    walletAddress: mockWallets[5],
    likes: 19,
    timestamp: new Date(Date.now() - 480000),
    roundId: 'current',
    likedBy: []
  },
  {
    id: '7',
    artworkUrl: '/generated/artwork-3.png',
    walletAddress: mockWallets[6],
    likes: 22,
    timestamp: new Date(Date.now() - 120000),
    roundId: 'current',
    likedBy: []
  },
  {
    id: '8',
    artworkUrl: '/generated/rocket-icon.png',
    walletAddress: mockWallets[7],
    likes: 29,
    timestamp: new Date(Date.now() - 540000),
    roundId: 'current',
    likedBy: []
  },
  {
    id: '9',
    artworkUrl: '/generated/artwork-1.png',
    walletAddress: mockWallets[8],
    likes: 12,
    timestamp: new Date(Date.now() - 600000),
    roundId: 'current',
    likedBy: []
  }
];

// Current active round
export const currentRound: Round = {
  id: 'current',
  prompt: 'DRAW A ROCKET',
  startTime: new Date(Date.now() - 900000), // Started 15 mins ago
  endTime: new Date(Date.now() + 900000), // Ends in 15 mins (for demo, set to 12:45)
  status: 'active',
  submissions: mockSubmissions
};

// Mock leaderboard
export const mockLeaderboard: LeaderboardEntry[] = [
  {
    walletAddress: mockWallets[0],
    totalLikes: 150,
    wins: 3,
    rank: 1
  },
  {
    walletAddress: mockWallets[1],
    totalLikes: 120,
    wins: 2,
    rank: 2
  },
  {
    walletAddress: mockWallets[2],
    totalLikes: 90,
    wins: 1,
    rank: 3
  }
];

// Active participants count
export const activeParticipants = 47;
