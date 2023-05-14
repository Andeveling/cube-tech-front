const ModelXXO = ({ width, height }: { width: number; height: number }) => {
  return (
    <div className="flex items-center justify-center w-56 bg-white border border-gray-700 h-44 print:h-52 print:w-52">
      <div
        className="grid grid-cols-3 border border-gray-700 "
        style={{ height: "96%", width: "96%" }}
      >
        {/*  */}

        <div className="h-full bg-red-400 border-4">
          <div className="flex items-center justify-center h-full bg-blue-400 border border-gray-700">
            x
          </div>
        </div>

        <div className="border-l border-gray-700">
          <div className="h-full bg-red-400 border-r-4 border-y-4">
            <div className="flex items-center justify-center h-full bg-blue-400 border border-gray-700">
              x{" "}
            </div>
          </div>
        </div>

        <div className="border-l border-gray-700">
          <div className="h-full bg-blue-400 border-r-4 border-y-4">
            <div className="flex items-center justify-center h-full bg-blue-400 border border-gray-700">
              <div className="w-5 h-5 border-2 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModelXXO;
