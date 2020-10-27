import React from "react";
import { WriteShadedText } from "./WriteShadedText";


const TestForm = () => {

  return (
      <div>
        <header>
          <h1>Test Form</h1>
          <form onSubmit={ e => WriteShadedText(e) } >
            <button type="submit" >Create Test Document</button>
          </form>
        </header>
      </div>
  )
}

export default TestForm;