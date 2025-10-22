'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Timer from '@/components/Timer';
import ArtworkCard from '@/components/ArtworkCard';
import DrawingCanvas from '@/components/DrawingCanvas';
import Leaderboard from '@/components/Leaderboard';
import { currentRound, mockLeaderboard, activeParticipants } from '@/lib/mockData';
import { Submission } from '@/types/arena';
import { Brush, Pencil, Eraser, Users, Heart, Eye } from 'lucide-react';

export default function ArenaPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [selectedTool, setSelectedTool] = useState<'brush' | 'pencil' | 'eraser'>('brush');
  const [selectedColor, setSelectedColor] = useState('hsl(300, 100%, 50%)');
  const [selectedSize, setSelectedSize] = useState(5);

  const handleSubmitDrawing = (imageDataUrl: string) => {
    // Create submission from canvas drawing
    const newSubmission: Submission = {
      id: Date.now().toString(),
      artworkUrl: imageDataUrl,
      walletAddress: 'anonymous',
      likes: 0,
      timestamp: new Date(),
      roundId: currentRound.id,
      likedBy: []
    };

    setSubmissions([newSubmission, ...submissions]);
  };

  return (
    <div className="min-h-screen p-8">
      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto">
        <Header />

        {/* Main Card */}
        <div className="bg-[hsl(var(--card))] rounded-[12px] p-8 shadow-lg border border-[hsl(var(--border))]">
          <div className="grid grid-cols-12 gap-8">
            {/* LEFT SIDEBAR: Drawing Tools */}
            <div className="col-span-2 space-y-6">
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--text-secondary))] mb-4">
                  Tools
                </div>

                {/* Tool Buttons */}
                <button
                  onClick={() => setSelectedTool('brush')}
                  className={`w-full flex items-center gap-3 p-3 rounded-[8px] transition-colors ${
                    selectedTool === 'brush'
                      ? 'bg-[hsl(var(--canvas-bg))] border border-[hsl(var(--border))]'
                      : 'bg-[hsl(var(--canvas-bg))]/50 border border-transparent hover:bg-[hsl(var(--accent-purple))]/20'
                  }`}
                >
                  <Brush className={`w-4 h-4 ${selectedTool === 'brush' ? 'text-[hsl(var(--accent-purple))]' : 'text-[hsl(var(--text-secondary))]'}`} />
                  <span className={`text-sm font-medium ${selectedTool === 'brush' ? 'text-[hsl(var(--text-primary))]' : 'text-[hsl(var(--text-secondary))]'}`}>Brush</span>
                </button>

                <button
                  onClick={() => setSelectedTool('pencil')}
                  className={`w-full flex items-center gap-3 p-3 rounded-[8px] transition-colors ${
                    selectedTool === 'pencil'
                      ? 'bg-[hsl(var(--canvas-bg))] border border-[hsl(var(--border))]'
                      : 'bg-[hsl(var(--canvas-bg))]/50 border border-transparent hover:bg-[hsl(var(--accent-cyan))]/20'
                  }`}
                >
                  <Pencil className={`w-4 h-4 ${selectedTool === 'pencil' ? 'text-[hsl(var(--accent-cyan))]' : 'text-[hsl(var(--text-secondary))]'}`} />
                  <span className={`text-sm font-medium ${selectedTool === 'pencil' ? 'text-[hsl(var(--text-primary))]' : 'text-[hsl(var(--text-secondary))]'}`}>Pencil</span>
                </button>

                <button
                  onClick={() => setSelectedTool('eraser')}
                  className={`w-full flex items-center gap-3 p-3 rounded-[8px] transition-colors ${
                    selectedTool === 'eraser'
                      ? 'bg-[hsl(var(--canvas-bg))] border border-[hsl(var(--border))]'
                      : 'bg-[hsl(var(--canvas-bg))]/50 border border-transparent hover:bg-[hsl(var(--accent-cyan))]/20'
                  }`}
                >
                  <Eraser className={`w-4 h-4 ${selectedTool === 'eraser' ? 'text-[hsl(var(--destructive))]' : 'text-[hsl(var(--text-secondary))]'}`} />
                  <span className={`text-sm font-medium ${selectedTool === 'eraser' ? 'text-[hsl(var(--text-primary))]' : 'text-[hsl(var(--text-secondary))]'}`}>Eraser</span>
                </button>
              </div>

              {/* Color Picker */}
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--text-secondary))] mb-3">
                  Colors
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    'hsl(0, 100%, 50%)',
                    'hsl(30, 100%, 50%)',
                    'hsl(60, 100%, 50%)',
                    'hsl(120, 100%, 50%)',
                    'hsl(180, 100%, 50%)',
                    'hsl(240, 100%, 50%)',
                    'hsl(300, 100%, 50%)',
                    'hsl(0, 0%, 100%)',
                  ].map((color, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border-2 hover:scale-110 transition-transform ${
                        selectedColor === color ? 'border-[hsl(var(--accent-purple))] ring-2 ring-[hsl(var(--accent-purple))]' : 'border-[hsl(var(--border))]'
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              {/* Brush Sizes */}
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--text-secondary))] mb-3">
                  Size
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <button
                    onClick={() => setSelectedSize(2)}
                    className={`w-2 h-2 rounded-full transition-colors ${selectedSize === 2 ? 'bg-[hsl(var(--accent-purple))]' : 'bg-[hsl(var(--text-secondary))] hover:bg-[hsl(var(--accent-purple))]'}`}
                  />
                  <button
                    onClick={() => setSelectedSize(4)}
                    className={`w-3 h-3 rounded-full transition-colors ${selectedSize === 4 ? 'bg-[hsl(var(--accent-purple))]' : 'bg-[hsl(var(--text-secondary))] hover:bg-[hsl(var(--accent-purple))]'}`}
                  />
                  <button
                    onClick={() => setSelectedSize(6)}
                    className={`w-4 h-4 rounded-full transition-colors ${selectedSize === 6 ? 'bg-[hsl(var(--accent-purple))]' : 'bg-[hsl(var(--text-secondary))] hover:bg-[hsl(var(--accent-purple))]'}`}
                  />
                  <button
                    onClick={() => setSelectedSize(10)}
                    className={`w-5 h-5 rounded-full transition-colors ${selectedSize === 10 ? 'bg-[hsl(var(--accent-purple))]' : 'bg-[hsl(var(--text-secondary))] hover:bg-[hsl(var(--accent-purple))]'}`}
                  />
                </div>
              </div>
            </div>

            {/* CENTER: Timer and Canvas */}
            <div className="col-span-6 flex flex-col items-center">
              <Timer endTime={currentRound.endTime} />

              {/* Drawing Canvas Section */}
              <div className="mt-8 w-full max-w-lg">
                <div className="text-center mb-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[hsl(var(--text-primary))] mb-2">
                    Create Your Art
                  </h3>
                  <p className="text-xs text-[hsl(var(--text-secondary))]">
                    Draw directly on the canvas and submit your artwork
                  </p>
                </div>

                <DrawingCanvas
                  onSubmit={handleSubmitDrawing}
                  selectedColor={selectedColor}
                  selectedSize={selectedSize}
                  selectedTool={selectedTool}
                />
              </div>
            </div>

            {/* RIGHT SIDEBAR: Challenge & Submissions */}
            <div className="col-span-4 space-y-6">
              {/* Current Challenge */}
              <div className="bg-[hsl(var(--canvas-bg))] rounded-[12px] p-6 border border-[hsl(var(--border))]">
                <div className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--text-secondary))] mb-3">
                  Current Challenge
                </div>
                <div className="text-lg font-bold uppercase tracking-tight text-[hsl(var(--text-primary))] mb-6">
                  {currentRound.prompt}
                </div>

                {/* Submissions Grid (3x3) - Only show if there are submissions */}
                {submissions.length > 0 ? (
                  <>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {submissions.slice(0, 9).map((submission) => (
                        <div
                          key={submission.id}
                          className="aspect-square rounded-[6px] overflow-hidden border border-[hsl(var(--border))] group relative"
                        >
                          <img
                            src={submission.artworkUrl}
                            alt="Submission"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-xs font-bold text-white flex items-center gap-1">
                              <Heart className="w-3 h-3" />
                              {submission.likes}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1 text-[hsl(var(--text-secondary))]">
                        <Users className="w-3 h-3" />
                        <span>{submissions.length}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[hsl(var(--text-secondary))]">
                        <Eye className="w-3 h-3" />
                        <span>{submissions.length * 12}</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-sm text-[hsl(var(--text-secondary))]">
                      No submissions yet. Be the first to create!
                    </p>
                  </div>
                )}
              </div>

              {/* Leaderboard */}
              <Leaderboard entries={mockLeaderboard} />
            </div>
          </div>
        </div>

        {/* Gallery Section - Only show if there are submissions */}
        {submissions.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-bold uppercase tracking-tight mb-6 text-[hsl(var(--text-primary))]">
              Recent Submissions
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {submissions.map((submission) => (
                <ArtworkCard key={submission.id} submission={submission} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}