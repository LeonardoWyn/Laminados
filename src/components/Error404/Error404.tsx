import Link from "next/link";

export function Error404() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-5">
            <h1 className="text-5xl font-semibold mb-6">
                Error 404
            </h1>
           <h2 className="text-3xl mb-5 flex items-center gap-4">
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" stroke="black" strokeWidth="4" fill="white"/>
    <line x1="35" y1="35" x2="45" y2="45" stroke="black" strokeWidth="4"/>
    <line x1="45" y1="35" x2="35" y2="45" stroke="black" strokeWidth="4"/>
    <line x1="55" y1="35" x2="65" y2="45" stroke="black" strokeWidth="4"/>
    <line x1="65" y1="35" x2="55" y2="45" stroke="black" strokeWidth="4"/>
    <path d="M35 70 Q50 85 65 70" stroke="black" strokeWidth="4" fill="none"/>
  </svg>
  ¡UPS! No se ha encontrado la página que buscas
</h2>

<div className="text-center mt-5">
        <Link href="/" className="px-3 py-2 bg-secondary text-white rounded-lg">Volver a la Pagina Principal</Link>
</div>

        </div>
    )
}
