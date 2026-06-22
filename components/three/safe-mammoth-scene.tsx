"use client";

import dynamic from "next/dynamic";
import { Component, ReactNode } from "react";

const MammothScene = dynamic(() => import("@/components/three/mammoth-scene"), {
  ssr: false,
  loading: () => <MammothFallback />,
});

class SceneErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return <MammothFallback />;
    return this.props.children;
  }
}

export function SafeMammothScene() {
  return (
    <SceneErrorBoundary>
      <MammothScene />
    </SceneErrorBoundary>
  );
}

function MammothFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-25">
      <div className="relative h-[28rem] w-[28rem] rounded-full border border-violet-500/20 bg-violet-950/20">
        <div className="absolute inset-10 rounded-full border border-violet-400/20" />
        <div className="absolute inset-24 rounded-full bg-violet-500/20 blur-3xl" />
        <img
          src="/logo-transparent.png"
          alt=""
          className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 object-contain opacity-80 drop-shadow-[0_0_60px_rgba(124,58,237,0.8)]"
        />
      </div>
    </div>
  );
}
