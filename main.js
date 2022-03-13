import embed from 'vega-embed';
import './style.css'

const spec = {
  Object {
    import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "a7ab1b8895dbf437";

function Notebook() {
  const speRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "spe") return new Inspector(speRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={speRef} />
      <p>Credit: <a href="https://observablehq.com/d/a7ab1b8895dbf437">Untitled by ikarashi-daiki</a></p>
    </>
  );
}

export default Notebook;
  }
};

embed("#app",spec);

