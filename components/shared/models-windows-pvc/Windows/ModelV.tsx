
const ModelZ = ({ width, height }: { width: number; height: number }) => {
  return (
    <div className="flex items-center justify-center bg-white border border-gray-300 h-44 w-44 print:h-52 print:w-52">
      <div
        className="grid grid-cols-1 border border-gray-300 "
        style={{ height: "92%", width: "92%" }}
      >
        <div>
          <div className="h-full border-8">
            <div className="flex items-center justify-center h-full border border-gray-300 bg-gradient-to-t from-cyan-200 to-cyan-100">
              <div className="flex self-end justify-center w-6 h-2 -mb-2 bg-white border border-gray-300 rounded-lg justify-self-end">
                <div className="relative self-center w-2 h-8 bg-white border border-gray-300 rounded-lg -top-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModelZ;
