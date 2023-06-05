
interface Persona {
  nombreCompleto: string;
  edad: number;
  direccion: Direccion;
}

interface Direccion {
  
    pais: string,
    casaNumero:number
  
}
export const ObjetosLiterales = () => {
  
  const persona: Persona = {
    nombreCompleto: 'Amalia',
    edad: 28,
    direccion: {
      pais: 'Australia',
      casaNumero: 5446
    }
  }

  
  return (
    <> 
    <h3>ObjetosLiterales</h3>
    <code>
      <pre>
        {JSON.stringify (persona, null, 2)}
      </pre>
    </code>
    </>
  )
}
