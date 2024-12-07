"use client";

import {FC, useState} from "react";
import {useEffect}  from "react";
import {qtLoad} from "./qtloader";
import Script from 'next/script'

function doLoad(setLoaded:(arg0:boolean)=>unknown, setErrorText:(arg0:string)=>unknown) {
  const screen = document.querySelector("#screen")
  try {
    const inner = async ()=> {
      await qtLoad({
        qt: {
          onLoaded: () => setLoaded(true),
          onExit: (exitData: { code: number, text?: string }) => {
            const lines = [
              `Application exit with code ${exitData.code}`,
              exitData.text ? ` (${exitData.text})` : ''
            ]
            setErrorText(lines.join("\n"))
            setLoaded(false)
          },
          // @ts-expect-error, injected into window by qtLoad.
          entryFunction: window.pepp_entry,
          containerElements: [screen],
        }
      });
    }
    inner().catch(console.error)
  } catch (e) {
    console.error(e);
    // @ts-expect-error, injected by WASM runtime
    console.error(e.stack);
  }
}
const Ide: FC = () => {
  const [loaded, setLoaded] = useState<boolean>(false)
  const [errorText, setErrorText] = useState("")
  // Hack to intercept the fetch request to the WASM blob.
  useEffect(() => {
    const asyncInner = async () => {
      const {fetch: origFetch} = window;
      window.fetch = async (...args) => {
        // If trying to fetch
        if (String(args[0]).match(/wasm$/i)) return await origFetch("https://compsys-pep.com/" + args[0], ...args.slice(1))
        else return await origFetch(...args);
      };
    };
    asyncInner().catch(console.log)
  }, []);

  return <div>
    <Script async src="https://compsys-pep.com/pepp.js" onReady={() => doLoad(setLoaded, setErrorText)}/>
    <figure id="qtspinner" style={{"display":loaded ? "none" :"block"}}>
      <center>
        <img src="https://compsys-pep.com/qtlogo.svg" width="320" height="200"/>
        <strong>Loading Pepp IDE</strong>
        <div id="qtstatus">{errorText}</div>
        <noscript>JavaScript is disabled. Please enable JavaScript to use this application.</noscript>
      </center>
    </figure>
    <div id="screen"  style={{"display":loaded ? "blocK" : "none", "width":"100%", "height":"100vh"}}/>
  </div>;
};

export default Ide;
