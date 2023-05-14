
const ModelVOV = ({ width, height }: { width: number; height: number }) => {
  return (
    <div className="flex items-center justify-center bg-white border border-gray-300 h-44 w-44 print:h-52 print:w-52">
      {/* > */}
      <div
        className="flex items-center justify-center bg-white border border-gray-300"
        style={{ height: "94%", width: "32%" }}
      >
        <div
          className="grid grid-cols-2 bg-blue-400 border border-gray-300 "
          style={{ height: "94%", width: "90%" }}
        >
          <div className="grid grid-cols-1 col-span-1 grid-rows-2">
            <div className="flex self-start w-3 h-2 -ml-3 bg-white border border-gray-300 rounded-sm" />
            <div className="flex self-end w-3 h-2 -ml-3 bg-white border border-gray-300 rounded-sm" />
          </div>
          <div className="self-center w-2 h-6 -mr-1 bg-white border border-gray-300 rounded-lg justify-self-end">
            <div className="relative self-center w-6 h-2 bg-white border border-gray-300 rounded-lg justify-self-end -left-4 top-2"></div>
          </div>
        </div>
      </div>

      {/* O */}
      <div
        className="grid grid-cols-1 bg-white border border-gray-300"
        style={{ height: "94%", width: "30%" }}
      >
        <div>
          <div className="h-full bg-blue-400 border-4">
            <div className="flex items-center justify-center h-full bg-blue-400 border border-gray-300"></div>
          </div>
        </div>
      </div>
      {/* < */}
      <div
        className="flex items-center justify-center bg-white border border-gray-300"
        style={{ height: "94%", width: "32%" }}
      >
        <div
          className="grid grid-cols-2 bg-blue-400 border border-gray-300 "
          style={{ height: "94%", width: "90%" }}
        >
          <div className="self-center w-2 h-6 col-span-1 -ml-1 bg-white border border-gray-300 rounded-lg justify-self-start">
            <div className="relative self-center w-6 h-2 bg-white border border-gray-300 rounded-lg justify-self-end top-2"></div>
          </div>

          <div className="grid grid-cols-1 col-span-1 grid-rows-3 justify-items-end">
            <div className="flex self-start w-3 h-2 -mr-3 bg-white border border-gray-300 rounded-sm" />
            <div className="flex self-end w-3 h-2 -mr-3 bg-white border border-gray-300 rounded-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelVOV;
