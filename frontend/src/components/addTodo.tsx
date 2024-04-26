export default function AddTodo() {
  return (
    <form className="flex py-4 bg-secondary w-full justify-center">
      <div className="flex w-4/5 gap-6">
        <input className="flex w-full rounded-full p-2 border-none outline-none" />
        <button className="flex justify-center my-auto bg-primary rounded-full py-2 px-4 text-white">
          <span className="text-nowrap my-auto">Add to list</span>
        </button>
      </div>
    </form>
  );
}
