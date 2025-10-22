'use client';

import { Trophy, Award } from 'lucide-react';
import { LeaderboardEntry } from '@/types/arena';

interface LeaderboardProps {
  entries: LeaderboardEntry[];
}

export default function Leaderboard({ entries }: LeaderboardProps) {
  return (
    <div className="bg-[hsl(var(--card))] rounded-[12px] p-6 border border-[hsl(var(--border))]">
      <h2 className="text-sm font-bold uppercase tracking-wide mb-4 text-[hsl(var(--text-primary))]">
        Top Artists
      </h2>

      {entries.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-sm text-[hsl(var(--text-secondary))]">
            No artists with likes yet. Start voting!
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-3">
            {entries.map((entry, index) => (
              <div
                key={entry.walletAddress}
                className="flex items-center justify-between py-2 px-3 rounded-[8px] bg-[hsl(var(--canvas-bg))]/50 hover:bg-[hsl(var(--canvas-bg))] transition-colors"
              >
            {/* Rank & Wallet */}
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="flex-shrink-0 w-6 text-center">
                {index === 0 ? (
                  <Trophy className="w-4 h-4 text-yellow-500" />
                ) : index === 1 ? (
                  <Award className="w-4 h-4 text-gray-400" />
                ) : (
                  <span className="text-sm font-semibold text-[hsl(var(--text-secondary))]">
                    {entry.rank}
                  </span>
                )}
              </div>

              <span className="text-sm font-mono text-[hsl(var(--text-primary))] truncate">
                {entry.walletAddress}
              </span>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <div className="text-right">
                <div className="text-sm font-bold text-[hsl(var(--text-primary))]">
                  {entry.totalLikes}
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-[hsl(var(--accent-purple))]">
                  {entry.wins}
                </div>
              </div>
            </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-4 pt-4 border-t border-[hsl(var(--border))] flex justify-end gap-6 text-xs text-[hsl(var(--text-secondary))]">
            <div>LIKES</div>
            <div>WINS</div>
          </div>
        </>
      )}
    </div>
  );
}
