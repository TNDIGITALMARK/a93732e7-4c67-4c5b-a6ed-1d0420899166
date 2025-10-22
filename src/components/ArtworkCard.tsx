'use client';

import { Heart } from 'lucide-react';
import { Submission } from '@/types/arena';

interface ArtworkCardProps {
  submission: Submission;
  userWallet?: string;
  onLike?: (submissionId: string, userWallet: string) => void;
}

export default function ArtworkCard({ submission, userWallet = 'default-wallet', onLike }: ArtworkCardProps) {
  const hasLiked = submission.likedBy.includes(userWallet);

  const handleLike = () => {
    if (onLike) {
      onLike(submission.id, userWallet);
    }
  };

  return (
    <div className="relative group">
      {/* Artwork Image */}
      <div className="relative aspect-square rounded-[8px] overflow-hidden bg-[hsl(var(--canvas-bg))] border border-[hsl(var(--border))]">
        <img
          src={submission.artworkUrl}
          alt={`Artwork by ${submission.walletAddress}`}
          className="w-full h-full object-cover"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all ${
              hasLiked
                ? 'bg-gradient-to-r from-[hsl(var(--accent-purple))] to-[hsl(var(--accent-pink))] text-white'
                : 'bg-white/10 backdrop-blur text-white hover:bg-white/20'
            }`}
          >
            <Heart className={`w-4 h-4 ${hasLiked ? 'fill-current' : ''}`} />
            <span>{submission.likes}</span>
          </button>
        </div>
      </div>

      {/* Wallet Address */}
      <div className="mt-2 text-xs text-[hsl(var(--text-secondary))] font-mono">
        {submission.walletAddress}
      </div>
    </div>
  );
}
