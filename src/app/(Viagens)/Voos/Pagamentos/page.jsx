import Pagamentos from "./pagamentos";
import { Suspense } from "react";
export default function page() {
  return (
    <Suspense fallback="loading">
      <Pagamentos />
    </Suspense>
  );
}
