const ModelXO = ({ width, height }: { width: number; height: number }) => {
  return (
    <div className="flex items-center justify-center w-full h-full bg-white border border-white print:h-52 print:w-52">
      <div
        className="grid grid-cols-2 border border-white "
        style={{ height: "96%", width: "96%" }}
      >
        <div className="h-full bg-red-400 border-l-4 border-white border-y-4 ">
          <div className="relative flex items-center justify-center h-full border border-gray-200 bg-gradient-to-t from-cyan-200 to-cyan-100">
            <div className="absolute w-8 h-2 bg-white border -left-2" />
          </div>
        </div>
        <div className="border-l border-white">
          <div className="h-full border-4 border-white">
            <div className="h-full border border-gray-200 bg-gradient-to-t from-cyan-200 to-cyan-100"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModelXO;
