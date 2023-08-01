import React from "react";

export default function Register() {
  const input =
    "block w-full mt-2 p-2 rounded-[10px] text-[1.8rem] bg-gray-200 font-bold focus-visible:outline-none";
  const label = ` text-[1.8rem] font-bold capitalize`;
  const group = "mb-4";
  return (
    <main className="Container">
      <form action="" className="w-[80%] mx-auto mt-[20%]">
        <div className={group}>
          <label htmlFor="name" className={label}>
            name*
          </label>
          <input type="text" name="name" id="name" className={input} />
        </div>
        <div className={group}>
          <label htmlFor="email" className={label}>
            email*
          </label>
          <input type="text" name="email" className={input} />
        </div>
        <div className={group}>
          <label htmlFor="password" className={label}>
            password*
          </label>
          <input type="text" name="password" className={input} />
        </div>
        <button
          type="submit"
          className="text-[1.8rem] !bg-blue-400 font-bold p-4 px-8 mt-4 uppercase rounded-md"
        >
          submit
        </button>
      </form>
    </main>
  );
}
