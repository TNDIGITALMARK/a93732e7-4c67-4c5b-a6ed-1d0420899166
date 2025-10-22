'use client';

import { useState, useCallback } from 'react';
import { Upload } from 'lucide-react';

interface UploadZoneProps {
  onUpload: (file: File, walletAddress: string) => void;
  userWallet?: string;
}

export default function UploadZone({ onUpload, userWallet }: UploadZoneProps) {
  const [dragActive, setDragActive] = useState(false);
  const [walletInput, setWalletInput] = useState('');
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (file.type.startsWith('image/')) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (selectedFile && (userWallet || walletInput)) {
      onUpload(selectedFile, userWallet || walletInput);
      setPreview(null);
      setSelectedFile(null);
      setWalletInput('');
    }
  };

  return (
    <div className="space-y-4">
      {/* Upload Area */}
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={`relative border-2 border-dashed rounded-[12px] p-8 transition-all ${
          dragActive
            ? 'border-[hsl(var(--accent-purple))] bg-[hsl(var(--accent-purple))]/10'
            : 'border-[hsl(var(--border))] hover:border-[hsl(var(--accent-cyan))]'
        }`}
      >
        <input
          type="file"
          id="file-upload"
          accept="image/*"
          onChange={handleChange}
          className="hidden"
        />

        {preview ? (
          <div className="flex flex-col items-center">
            <img
              src={preview}
              alt="Preview"
              className="max-h-48 rounded-[8px] mb-4"
            />
            <p className="text-sm text-[hsl(var(--text-secondary))]">
              Ready to submit
            </p>
          </div>
        ) : (
          <label
            htmlFor="file-upload"
            className="flex flex-col items-center cursor-pointer"
          >
            <Upload className="w-12 h-12 text-[hsl(var(--accent-cyan))] mb-4" />
            <p className="text-sm font-semibold text-[hsl(var(--text-primary))] mb-1">
              Drop your artwork here
            </p>
            <p className="text-xs text-[hsl(var(--text-secondary))]">
              or click to browse
            </p>
          </label>
        )}
      </div>

      {/* Wallet Input (if not connected) */}
      {!userWallet && (
        <input
          type="text"
          placeholder="Enter your Solana wallet address"
          value={walletInput}
          onChange={(e) => setWalletInput(e.target.value)}
          className="w-full"
        />
      )}

      {/* Submit Button */}
      {selectedFile && (
        <button
          onClick={handleSubmit}
          disabled={!userWallet && !walletInput}
          className="w-full gradient-button h-[44px] rounded-[8px] font-bold uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit Artwork
        </button>
      )}
    </div>
  );
}
