import { useEffect, useRef, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: 'reveal-delay-1' | 'reveal-delay-2' | 'reveal-delay-3' | 'reveal-delay-4' | 'reveal-delay-5';
  as?: 'div' | 'section' | 'article' | 'li' | 'span';
};

export function Reveal({ children, className = '', delay, as: Tag = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${delay ?? ''} ${className}`}
    >
      {children}
    </Tag>
  );
}
