import { Image } from 'lucide-react';

export default function Loading() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Image className="text-zinc-200 dark:text-zinc-800 animate-pulse w-36 h-36" />
    </div>
  )
}