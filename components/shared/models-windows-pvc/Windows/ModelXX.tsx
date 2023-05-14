const ModelXX = ({ width, height }: { width: number; height: number }) => {
  return (
    <div className="flex items-center justify-center bg-white border border-gray-700 h-44 w-44 print:h-52 print:w-52">
      <div
        className="grid grid-cols-2 border border-gray-700 "
        style={{ height: "96%", width: "96%" }}
      >
        <div className="border-r border-gray-700">
          <div className="h-full bg-blue-400 border-4">
            <div className="flex items-center justify-center h-full bg-blue-400 border border-gray-700">
              x
            </div>
          </div>
        </div>
        <div className="h-full bg-red-400 border-r-4 border-y-4">
          <div className="flex items-center justify-center h-full bg-blue-400 border border-gray-700">
            x
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModelXX;
