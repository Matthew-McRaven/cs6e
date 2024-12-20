"use client";

import { FC, useRef, useState } from "react";
import { qtLoad } from "./qtloader";
import Script from "next/script";
import Image from "next/image";

if (typeof window !== "undefined") {
  const originalFetch = window.fetch;

  window.fetch = (...args) => {
    const [resource, options] = args;

    if (resource?.toString().match(/wasm$/i)) {
      return originalFetch("https://compsys-pep.com/" + resource, options);
    }

    return originalFetch(...args);
  };
}

declare global {
  interface Window {
    pepp_entry: () => void;
  }
}

function loadPep(
  node: HTMLDivElement,
  config: { onSuccess: () => void; onError: (message: string) => void }
): Promise<void> {
  return qtLoad({
    qt: {
      onLoaded: config.onSuccess,
      onExit: (exitData: { code: number; text?: string }) => {
        const lines = [`Application exit with code ${exitData.code}`, exitData.text ? ` (${exitData.text})` : ""];

        config.onError(lines.join("\n"));
      },
      entryFunction: window.pepp_entry,
      containerElements: [node],
    },
  });
}

const useIde = () => {
  const screenRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "success">("idle");
  const [errorText, setErrorText] = useState("");

  const loadIde = () => {
    if (!screenRef.current) {
      return;
    }

    setStatus("loading");

    loadPep(screenRef.current, {
      onSuccess: () => setStatus("success"),
      onError: (message) => {
        setStatus("error");
        setErrorText(message);
      },
    })
      .then(() => {
        setStatus("success");
      })
      .catch((error) => {
        let message = "Something went very wrong";

        if (error instanceof Error) {
          message = error.message;
        }

        setErrorText(message);
      });
  };

  return {
    screenRef,
    loadIde,
    status,
    errorText,
    isLoading: status === "loading",
    isError: status === "error",
  };
};

const Ide: FC = () => {
  const [scriptError, setScriptError] = useState("");
  const { loadIde, status, errorText, screenRef } = useIde();

  const error = scriptError || errorText;

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="flex-1 flex flex-col">
      <Script
        src="https://compsys-pep.com/pepp.js"
        onError={(error) => setScriptError("script loading error " + error.toString())}
        onReady={loadIde}
      />
      <figure id="qtspinner" style={{ display: status !== "success" ? "block" : "none" }}>
        <center>
          <Image
            priority
            alt="Placeholder icon while app loads"
            src="https://compsys-pep.com/qtlogo.svg"
            width="320"
            height="200"
          />
          <strong>Loading Pepp IDE</strong>
          <div id="qtstatus">{errorText}</div>
          <noscript>JavaScript is disabled. Please enable JavaScript to use this application.</noscript>
        </center>
      </figure>
      <div
        id="screen"
        ref={screenRef}
        className="flex-1 w-full mt-[-24px]"
        style={{ display: status === "success" ? "block" : "none" }}
      >
        <div aria-hidden className="invisible">
          {/* don't remove this. Magic line of code */}
          here to allow react to update
        </div>
      </div>
    </div>
  );
};

export default Ide;
