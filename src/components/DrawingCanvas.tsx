'use client';

import { useRef, useState, useEffect } from 'react';
import { Trash2, Download } from 'lucide-react';

interface DrawingCanvasProps {
  onSubmit: (imageDataUrl: string, walletAddress: string) => void;
  selectedColor: string;
  selectedSize: number;
  selectedTool: 'brush' | 'pencil' | 'eraser';
}

export default function DrawingCanvas({
  onSubmit,
  selectedColor,
  selectedSize,
  selectedTool
}: DrawingCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initialize canvas with dark background
    ctx.fillStyle = 'hsl(215, 25%, 17%)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setIsDrawing(true);
    setHasDrawn(true);

    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Set drawing properties based on tool
    if (selectedTool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.lineWidth = selectedSize * 2;
    } else {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = selectedColor;
      ctx.lineWidth = selectedSize;
    }

    ctx.lineCap = selectedTool === 'pencil' ? 'square' : 'round';
    ctx.lineJoin = 'round';

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = 'hsl(215, 25%, 17%)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
  };

  const handleSubmit = () => {
    const canvas = canvasRef.current;
    if (!canvas || !hasDrawn || !walletAddress.trim()) return;

    const imageDataUrl = canvas.toDataURL('image/png');
    onSubmit(imageDataUrl, walletAddress.trim());
    clearCanvas();
    setWalletAddress('');
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = `drawing-${Date.now()}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="space-y-4">
      {/* Canvas */}
      <div className="relative rounded-[12px] overflow-hidden border-2 border-[hsl(var(--border))] bg-[hsl(var(--canvas-bg))]">
        <canvas
          ref={canvasRef}
          width={500}
          height={500}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          className="cursor-crosshair w-full h-full"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button
          onClick={clearCanvas}
          className="flex-1 flex items-center justify-center gap-2 h-[44px] rounded-[8px] bg-[hsl(var(--canvas-bg))] hover:bg-[hsl(var(--border))] transition-colors border border-[hsl(var(--border))] font-semibold uppercase tracking-wide text-sm"
        >
          <Trash2 className="w-4 h-4" />
          Clear
        </button>

        <button
          onClick={downloadImage}
          disabled={!hasDrawn}
          className="flex-1 flex items-center justify-center gap-2 h-[44px] rounded-[8px] bg-[hsl(var(--canvas-bg))] hover:bg-[hsl(var(--border))] transition-colors border border-[hsl(var(--border))] font-semibold uppercase tracking-wide text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Download className="w-4 h-4" />
          Save
        </button>
      </div>

      {/* Wallet Input */}
      <div className="space-y-2">
        <label htmlFor="wallet-address" className="block text-xs font-semibold uppercase tracking-wider text-[hsl(var(--text-secondary))]">
          Your Wallet Address
        </label>
        <input
          id="wallet-address"
          type="text"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          placeholder="Enter your Solana wallet address"
          className="w-full h-[44px] rounded-[8px] bg-[hsl(var(--canvas-bg))] border border-[hsl(var(--border))] text-[hsl(var(--text-primary))] placeholder-[hsl(var(--text-secondary))]/60 px-4 focus:border-[hsl(var(--accent-purple))] focus:ring-2 focus:ring-[hsl(var(--accent-purple))]/20 transition-all"
        />
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={!hasDrawn || !walletAddress.trim()}
        className="w-full gradient-button h-[44px] rounded-[8px] font-bold uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Submit Artwork
      </button>
    </div>
  );
}
