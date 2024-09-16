function AbreviaAmbiente() {
    const partes = strict.split('-');
    return partes.splice(-2).join('-');
  return (
    <div>AbreviaAmbiente</div>
  )
}

export default AbreviaAmbiente