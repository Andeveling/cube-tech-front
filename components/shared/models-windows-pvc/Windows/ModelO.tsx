

const ModelO = ({ width, height }: { width: number; height: number }) => {
  return (
    <div className="flex items-center justify-center w-full h-full bg-white border border-gray-300 print:h-52 print:w-52">
      <div className="grid w-[90%] h-[90%] grid-cols-1 bg-white border border-gray-300">
        <div>
          <div className="h-full border-4">
            <div className="flex items-center justify-center h-full border border-gray-300 bg-gradient-to-t from-cyan-200 to-cyan-100"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModelO;
