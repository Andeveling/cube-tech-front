export const StepTwo = () => {
  return (
    <div className="w-full h-full">
      <h2 className="text-2xl font-semibold">Medidas</h2>
      <p className="text-xl">Que medidas tiene el vano?</p>
      <div id="sizes" className="w-full my-1 form-control">
        <label className="label">
          <span className="text-xl label-text">Ancho (mm)</span>
          <span className="label-text-alt">Milimetros</span>
        </label>
        <input
          type="number"
          placeholder="Ancho mm"
          className="w-full input-bordered input"
        />
        <label className="label">
          <span className="label-text-alt">Min : 750mm | Max : 1000mm</span>
          {/*       <span className="label-text-alt">Bottom Right label</span> */}
        </label>
      </div>

      {/*Alto  */}
      <div className="w-full my-1 form-control ">
        <label className="label">
          <span className="text-xl label-text">Alto (mm)</span>
          <span className="label-text-alt">Milimetros</span>
        </label>
        <input
          type="number"
          placeholder="Alto mm"
          className="w-full input-bordered input"
        />
        <label className="label">
          <span className="label-text-alt">Min : 750mm | Max : 1000mm</span>
        </label>
        {/*     <label className="label">
          <span className="label-text-alt">Bottom Left label</span>
          <span className="label-text-alt">Bottom Right label</span>
        </label> */}
      </div>
      {/*Alto  */}
      <div className="w-full my-1 form-control ">
        <label className="label">
          <span className="text-xl label-text">Cantidad</span>
          <span className="label-text-alt">Unidades</span>
        </label>
        <input
          type="number"
          placeholder="1"
          className="w-full input-bordered input"
        />
        <label className="label">
          <span className="label-text-alt">Min : 1 | Max : 12</span>
        </label>
        {/*     <label className="label">
          <span className="label-text-alt">Bottom Left label</span>
          <span className="label-text-alt">Bottom Right label</span>
        </label> */}
      </div>
    </div>
  );
};
