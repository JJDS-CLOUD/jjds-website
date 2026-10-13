"use client";

import App from "../src/App";

export default function ClientApp({ path = "/" }) {
  return <App path={path} />;
}
