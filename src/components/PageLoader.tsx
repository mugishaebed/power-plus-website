"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 300);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <Image
        src="/loader.png"
        alt="Loading page"
        width={260}
        height={260}
        priority
      />
    </div>
  );
}
