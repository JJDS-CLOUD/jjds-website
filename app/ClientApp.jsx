"use client";

import { usePathname } from "next/navigation";
import App from "../src/App";

export default function ClientApp() {
  const pathname = usePathname();
  return <App pathname={pathname} />;
}
