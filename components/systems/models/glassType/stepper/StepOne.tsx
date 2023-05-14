export const StepOne = () => {
  return (
    <div className="grid justify-center h-full grid-cols-1 place-content-center">
      <div id="location">
        <h2 className="text-2xl font-semibold">Ubicacion</h2>
        <p className="text-xl">En que lugar ira tu ventana?</p>
        <div className="w-full max-w-sm form-control">
          <label className="label">
            <span className="text-xl label-text">Ubicacion</span>
            <span className="label-text-alt">Seleciona una opcion</span>
          </label>
          <select className="w-full text-xl select select-bordered ">
            <option selected>Alcoba</option>
            <option>Sala</option>
            <option>Cocina</option>
            <option>Patio</option>
            <option>Bano</option>
          </select>
        </div>
      </div>
    </div>
  );
};
