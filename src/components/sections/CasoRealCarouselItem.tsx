
import * as React from "react";

type CasoReal = {
  icon: React.ReactNode;
  title: string;
  color: string;
  desc: React.ReactNode;
  thumb: {
    label: string;
    src: string;
    alt: string;
  };
};

interface Props {
  caso: CasoReal;
}

const CasoRealCarouselItem: React.FC<Props> = ({ caso }) => (
  <div className="glass-card flex-1 p-7 flex flex-col gap-3 animate-fade-in h-full">
    <div
      className="flex items-center gap-2 mb-1 font-semibold"
      style={{ color: caso.color }}
    >
      {caso.icon} {caso.title}
    </div>
    <div className="text-sm text-slate-200 mb-2">{caso.desc}</div>
    <div className="w-full flex flex-col gap-1">
      <span className="text-xs text-slate-400 mb-1">{caso.thumb.label}</span>
      <img
        src={caso.thumb.src}
        alt={caso.thumb.alt}
        className="rounded-xl border border-muted object-cover w-full max-w-xs mx-auto shadow-md"
      />
    </div>
  </div>
);

export default CasoRealCarouselItem;
