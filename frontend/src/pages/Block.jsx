import React from 'react'

export const Block = () => {
  return (
    <div>
      <h2>Enskilt block</h2>
      <form>
        <label>Block index nummer</label>
        <input type="text"></input>
        <button>Submit</button>
      </form>
      <section>
        Här visas info för enskilt block:
      </section>
    </div>
  )
}
