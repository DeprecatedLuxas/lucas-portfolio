import { StartWidget } from "@components/widgets";
import { Widgets } from "@lib/widgets";
import { widgetState } from "@recoil";
import clsx from "clsx";
import Image from "next/image";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export function TaskbarWindows() {
  const [widget, setWidget] = useRecoilState(widgetState);

  return (
    <>
      {widget === Widgets.START && <StartWidget />}

      <section
        className={clsx(
          "flex justify-center items-center p-2 h-[40px] rounded-[4px] hover:bg-[#88888833] select-none focus outline-none",
          {
            "bg-[#88888833]": widget === Widgets.START,
          }
        )}
        onClick={() => {
          if (widget === Widgets.NONE) {
            setWidget(Widgets.START);
          }
        }}
      >
        <button className="text-xs text-white cursor-default flex">
          <Image
            src="/windows.png"
            width="30px"
            height="30px"
            alt="Windows Logo"
          />
        </button>
      </section>
    </>
  );
}
