"use client";

import {FC, useState} from "react";
import {useEffect}  from "react";
import {qtLoad} from "./qtloader";

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

  // Start the Qt application and handle its lifecycle events.
  useEffect(()=> {
    const asyncInner = async () => {
      const screen = document.querySelector("#screen")
      try {
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
      } catch (e) {
        console.error(e);
        // @ts-expect-error, injected by WASM runtime
        console.error(e.stack);
      }
    }
    asyncInner().catch(console.log)
  },[])


  return <div>
    {/*Needs to be sync, otherwise my useEffect to do the load explodes.*/}
    <script src="https://compsys-pep.com/pepp.js"/>
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
