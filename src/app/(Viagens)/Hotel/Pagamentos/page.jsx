import Pagamentos from "./pagamentos";
import { Suspense } from "react";

// suspense é utilizado para aguardar uma chamada de servidor e caso demore para inicializar os componentes irá aparecer na tela 'loading"
export default function page() {
  return (
    <Suspense fallback="loading">
      <Pagamentos />
    </Suspense>
  );
}
