import { DarkModeDropDownButton } from "../buttons/DarkModeDropDownButton";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-4 py-4 select-none">
      <h1 className="text-lg lg:text-2xl font-extrabold tracking-tighter">Todo Application</h1>
      <DarkModeDropDownButton />
    </nav>
  );
}
