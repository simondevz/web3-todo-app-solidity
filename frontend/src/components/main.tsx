import AddTodo from "./addTodo";

export default function Main() {
  return (
    <main className="flex flex-col justify-between w-3/4 h-full bg-milky_bg font-patrick">
      <div className="flex w-full justify-center py-4">
        <h1 className="my-auto text-text text-[2rem]">{"School Stuff"}</h1>
      </div>
      <ul className="flex flex-col gap-4 h-full overflow-y-auto px-20">
        {[
          { text: "Some stuff i had to do.", time: "12:39pm" },
          { text: "Some stuff i had to do.", time: "12:39pm" },
          { text: "Some stuff i had to do.", time: "12:39pm" },
          { text: "Some stuff i had to do.", time: "12:39pm" },
          //   { text: "Some stuff i had to do.", time: "12:39pm" },
          //   { text: "Some stuff i had to do.", time: "12:39pm" },
          //   { text: "Some stuff i had to do.", time: "12:39pm" },
          //   { text: "Some stuff i had to do.", time: "12:39pm" },
          //   { text: "Some stuff i had to do.", time: "12:39pm" },
          //   { text: "Some stuff i had to do.", time: "12:39pm" },
          //   { text: "Some stuff i had to do.", time: "12:39pm" },
          //   { text: "Some stuff i had to do.", time: "12:39pm" },
        ].map((item, index) => (
          <>
            <li
              className="flex justify-between bg-white text-text px-4 py-6 rounded-full w-full"
              key={index}
            >
              <div className="flex gap-4 ">
                <span className="flex w-4 h-4 bg-milky_bg my-auto rounded-full"></span>
                <span>{item.text}</span>
              </div>
              <span>{item.time}</span>
            </li>
          </>
        ))}
      </ul>
      <AddTodo />
    </main>
  );
}
