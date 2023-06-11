const ModelVLeft = ({ width, height }: { width: number; height: number }) => {
  return (
    <div className="flex items-center justify-center w-full h-full bg-white border border-gray-300 print:h-52 print:w-52">
      <div className="flex items-center justify-center bg-white border border-gray-300 h-[80%] w-[80%]">
        <div className="grid grid-cols-2 border border-gray-300 bg-gradient-to-t from-cyan-200 to-cyan-100 h-[80%] w-[80%] ">
          <div className="grid grid-cols-1 col-span-1 grid-rows-3">
            <div className="flex self-center w-3 h-2 -ml-3 bg-white border border-gray-300 rounded-sm" />
            <div className="flex self-center w-3 h-2 -ml-3 bg-white border border-gray-300 rounded-sm" />
            <div className="flex self-end w-3 h-2 -ml-3 bg-white border border-gray-300 rounded-sm" />
          </div>
          <div className="self-center w-2 h-6 -mr-1 bg-white border border-gray-300 rounded-lg justify-self-end">
            <div className="relative self-center w-6 h-2 bg-white border border-gray-300 rounded-lg justify-self-end -left-4 top-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModelVLeft;
