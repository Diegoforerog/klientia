import Image from 'next/image';

export default function Logo({ className = 'h-9' }: { className?: string }) {
  return (
    <Image
      src="/brand/klientia-lockup.png"
      alt="Klientia"
      width={418}
      height={98}
      priority
      className={`w-auto ${className}`}
    />
  );
}
