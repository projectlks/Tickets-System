import { useNavigate } from "react-router-dom";

export default function HistoryItem() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/tickets-detail")}
      className="w-[90%] h-[80px] mb-3 transition-all  hover:shadow border-gray-400 py-3 px-2 hover:scale-105 mx-auto rounded flex hover:border-red-500 border cursor-pointer items-center "
    >
      <span className="w-1.5 h-full rounded-2xl bg-red-700 block mr-3"></span>

      <p className="mr-5 whitespace-nowrap text-sm">Feb 08, 2024</p>

      <span
        className="flex flex-col  mr-10 "
        style={{ width: "calc(100% - 250px)" }}
      >
        <h1 className="text-gray-900 text-[14px] font-semibold w-full overflow-ellipsis whitespace-nowrap overflow-hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, iste
          voluptatem. Aliquid debitis magnam iste, rem
        </h1>

        <p className="text-gray-500 text-[12px] font-semibold w-full overflow-ellipsis whitespace-nowrap overflow-hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, iste
          voluptatem. Aliquid debitis magnam iste, rem
        </p>
      </span>

      <span className="w-[100px] bg-red-500 rounded-full text-center py-0.5 ">
        Close
      </span>
    </div>
  );
}
