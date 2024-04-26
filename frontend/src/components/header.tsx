import ConnectBtn from "./connectButton";

export default function Header() {
  return (
    <header className="flex w-full bg-milky_bg justify-between py-6 px-12 drop-shadow-lg">
      <div className="my-auto">
        <span className="text-secondary text-[2rem] font-salsa">Web3 Todo</span>
      </div>
      <div className="my-auto">
        <ConnectBtn />
      </div>
    </header>
  );
}
