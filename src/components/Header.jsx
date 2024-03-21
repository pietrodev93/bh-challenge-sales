import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-6 backdrop-brightness-50 rounded-2xl text-white">
      <div className="text-[#E2FF32] text-2xl font-semibold">BodyHack</div>
      <div className="flex-1 hidden xl:flex items-center justify-center">
        <ul className="flex justify-center items-center gap-5 text-xl">
          <li>
            <p>Item 1</p>
          </li>
          <li>
            <p>Item 2</p>
          </li>
          <li>
            <p>Item 3</p>
          </li>
        </ul>
      </div>
      <div>
        <button className="rounded-xl bg-slate-300 text-black text-sm px-5 py-3 font-semibold">
          ISCRIVITI ORA
        </button>
      </div>
    </header>
  );
}
