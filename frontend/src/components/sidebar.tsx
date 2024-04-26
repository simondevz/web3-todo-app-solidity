import { FaAnglesDown } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";

export default function Sidebar() {
  return (
    <nav className="flex flex-col justify-between w-1/4 h-full bg-milky_bg font-patrick drop-shadow-lg">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <button className="flex justify-between py-2 bg-secondary px-12 ">
            <span className="my-auto text-[1.5rem] text-white">Filter</span>
            <span className="my-auto">
              <IoFilterSharp size={"1.2rem"} className="text-white" />
            </span>
          </button>
          <ul className="text-text flex flex-col">
            {["Done tasks", "Undone tasks"].map((item, index) => (
              <>
                <li
                  className="border-t border-text px-16 py-2 text-[1.2rem]"
                  key={index}
                >
                  <button>
                    <span>{item}</span>
                  </button>
                </li>
              </>
            ))}
          </ul>
        </div>

        <div className="flex flex-col">
          <button className="flex justify-between py-2 bg-secondary px-12 ">
            <span className="my-auto text-[1.5rem] text-white">Categories</span>
            <span className="my-auto">
              <FaAnglesDown size={"1.2rem"} className="text-white" />
            </span>
          </button>
          <ul className="text-text flex flex-col border-b border-text">
            {[
              "School Stuff",
              "School Stuff 2",
              "School Stuff 3",
              "School Stuff 4",
              "School Stuff 5",
            ].map((item, index) => (
              <>
                <li
                  className="border-t border-text px-16 py-2 text-[1.2rem]"
                  key={index}
                >
                  <button>
                    <span>{item}</span>
                  </button>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>

      <button className="flex justify-center w-full bg-primary py-4 ">
        <span>
          <IoMdAdd size={"2.5rem"} className="text-white" />
        </span>
      </button>
    </nav>
  );
}
