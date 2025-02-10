import { DarkModeDropDownButton } from "../buttons/DarkModeDropDownButton";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-4 py-4 select-none border-b border-neutral-700">
      <h1 className="text-lg lg:text-2xl font-extrabold">Todo Application</h1>
      <DarkModeDropDownButton />
    </nav>
  );
}
