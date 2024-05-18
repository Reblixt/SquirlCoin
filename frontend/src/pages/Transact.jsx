import React from 'react'

export const Transact = () => {
  return (
    <div>
      <h2>Nut trading</h2>
      <form>
        <label>Skicka till</label>
        <input type="text"></input>
        <label>Antal</label>
        <input type="text"></input>
        <button>Submit</button>
      </form>
      <section>
        Här visas info om transaktionen:
      </section>
    </div>
  )
}
