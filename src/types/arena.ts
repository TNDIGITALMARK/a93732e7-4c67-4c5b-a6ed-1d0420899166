export interface Submission {
  id: string;
  artworkUrl: string;
  walletAddress: string;
  likes: number;
  timestamp: Date;
  roundId: string;
  likedBy: string[]; // wallet addresses that liked this
}

export interface Round {
  id: string;
  prompt: string;
  startTime: Date;
  endTime: Date;
  status: 'active' | 'completed' | 'upcoming';
  submissions: Submission[];
}

export interface User {
  walletAddress: string;
  connected: boolean;
  submissions: Submission[];
  totalLikes: number;
}

export interface LeaderboardEntry {
  walletAddress: string;
  totalLikes: number;
  wins: number;
  rank: number;
}
