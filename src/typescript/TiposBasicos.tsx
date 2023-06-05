

export const TiposBasicos = () => {

  const nombre = 'Amalia';
  const edad: number = 28;
  const estaActivo : boolean = false;

  const poderes = ['cocina', 'limpia', 'canta', 'baila']
  return (
    <>
        <h3>Tipos Basicos</h3>
        {nombre}, {edad}, {(estaActivo) ? 'activo': 'no activo'}
        <br/>
        {poderes.join(', ')}
    </>
  )
}
