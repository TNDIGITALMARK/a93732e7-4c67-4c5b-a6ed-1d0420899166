import { Submission, LeaderboardEntry } from '@/types/arena';

/**
 * Calculate leaderboard from submissions
 * Only includes artists who have drawings with likes > 0
 * @param submissions - Array of all submissions
 * @returns Sorted leaderboard entries (artists with likes only)
 */
export function calculateLeaderboard(submissions: Submission[]): LeaderboardEntry[] {
  // Group submissions by wallet address and calculate total likes
  const artistStats = new Map<string, { totalLikes: number; submissions: number }>();

  submissions.forEach((submission) => {
    const current = artistStats.get(submission.walletAddress) || { totalLikes: 0, submissions: 0 };
    artistStats.set(submission.walletAddress, {
      totalLikes: current.totalLikes + submission.likes,
      submissions: current.submissions + 1
    });
  });

  // Convert to leaderboard entries and filter artists with likes > 0
  const entries: LeaderboardEntry[] = [];

  artistStats.forEach((stats, walletAddress) => {
    // Only include artists who have at least 1 like across their drawings
    if (stats.totalLikes > 0) {
      entries.push({
        walletAddress,
        totalLikes: stats.totalLikes,
        wins: 0, // This would be calculated from round history in production
        rank: 0 // Will be set after sorting
      });
    }
  });

  // Sort by total likes (descending) and assign ranks
  entries.sort((a, b) => b.totalLikes - a.totalLikes);
  entries.forEach((entry, index) => {
    entry.rank = index + 1;
  });

  return entries;
}

/**
 * Get top N artists from leaderboard
 * @param submissions - Array of all submissions
 * @param limit - Maximum number of artists to return (default: 3)
 * @returns Top N artists with likes
 */
export function getTopArtists(submissions: Submission[], limit: number = 3): LeaderboardEntry[] {
  const leaderboard = calculateLeaderboard(submissions);
  return leaderboard.slice(0, limit);
}
