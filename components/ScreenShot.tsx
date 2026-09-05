import Pic from './Pic';

type Props = {
  src: string;
  alt: string;
  /** Nombre de la pantalla que aparece en la barra del "navegador". */
  screen: string;
  sizes: string;
  aspect?: string;
  className?: string;
};

/**
 * Captura real del panel dentro de un marco de navegador. Extraído de Pillars
 * para reutilizarlo en DemoTabs sin duplicar el marco.
 */
export default function ScreenShot({ src, alt, screen, sizes, aspect = 'aspect-[16/10]', className = '' }: Props) {
  return (
    <div className={`shot-frame ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-line bg-subtle px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-line2" />
        <span className="h-2.5 w-2.5 rounded-full bg-line2" />
        <span className="h-2.5 w-2.5 rounded-full bg-line2" />
        <span className="ml-3 truncate font-mono text-[11px] text-ink-faint">app.klientia.app · {screen}</span>
      </div>
      <div className={`relative ${aspect}`}>
        <Pic src={src} alt={alt} width={1280} height={800} sizes={sizes} className="object-cover object-left-top" />
      </div>
    </div>
  );
}
