import { useState, useEffect, useRef } from 'react';
import { Camera, Check, Sparkles, ShieldCheck, Terminal } from 'lucide-react';

interface ProfilePhotoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showBadge?: boolean;
  showStatus?: boolean;
  interactive?: boolean;
}

export function ProfilePhoto({
  className = '',
  size = 'md',
  showBadge = true,
  showStatus = true,
  interactive = true,
}: ProfilePhotoProps) {
  const [photoUrl, setPhotoUrl] = useState<string>('/praveen-avatar.svg');
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check if user uploaded a custom profile picture stored locally
    const saved = localStorage.getItem('praveen_portfolio_avatar');
    if (saved) {
      setPhotoUrl(saved);
    } else {
      // Try the uploaded Gemini artifact image first, fallback to vector avatar
      setPhotoUrl('/Gemini_Generated_Image_6c3j4n6c3j4n6c3j.png');
    }
  }, []);

  const handleImageError = () => {
    if (photoUrl !== '/praveen-avatar.svg') {
      setPhotoUrl('/praveen-avatar.svg');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result as string;
        if (base64) {
          setPhotoUrl(base64);
          localStorage.setItem('praveen_portfolio_avatar', base64);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-24 h-24 sm:w-28 sm:h-28',
    lg: 'w-36 h-36 sm:w-44 sm:h-44',
    hero: 'w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72',
  }[size];

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Outer Glow Halo */}
      <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-500/30 via-teal-500/20 to-cyan-500/30 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500" />

      {/* Main Container Card */}
      <div
        className={`relative ${sizeClasses} rounded-2xl sm:rounded-3xl p-1 bg-gradient-to-b from-slate-700/80 via-slate-800/80 to-slate-900/90 shadow-2xl overflow-hidden group`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Inner Border & Frame */}
        <div className="relative w-full h-full rounded-[14px] sm:rounded-[22px] overflow-hidden bg-[#0a0e1a]">
          <img
            src={photoUrl}
            alt="Praveen Kumar Saravanan - Python Backend Developer"
            referrerPolicy="no-referrer"
            onError={handleImageError}
            className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
          />

          {/* Subtle Studio Lighting Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#090d16]/80 via-transparent to-transparent pointer-events-none" />

          {/* Interactive photo updater overlay on hover */}
          {interactive && (
            <div
              className={`absolute inset-0 bg-black/60 backdrop-blur-xs flex flex-col items-center justify-center transition-opacity duration-200 cursor-pointer ${
                isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              onClick={() => fileInputRef.current?.click()}
              title="Click to update / upload custom photo"
            >
              <Camera className="w-5 h-5 text-emerald-400 mb-1" />
              <span className="text-[10px] font-medium text-slate-200 text-center px-2">
                Update Photo
              </span>
            </div>
          )}

          {/* Hidden File Input for instant local image replacement */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
            aria-label="Upload custom portrait"
          />
        </div>
      </div>

      {/* Live Availability Badge */}
      {showStatus && (
        <div className="absolute -bottom-2 -right-2 sm:bottom-1 sm:right-1 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0b101c]/95 border border-emerald-500/40 shadow-lg text-[10px] sm:text-xs font-semibold text-emerald-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="tracking-tight">Available</span>
        </div>
      )}

      {/* Engineering Focus Micro Tag */}
      {showBadge && size === 'hero' && (
        <div className="hidden sm:flex absolute -top-3 -left-3 z-10 items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-700/80 shadow-md text-[11px] font-mono text-slate-200">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span>Django & DRF</span>
        </div>
      )}
    </div>
  );
}
