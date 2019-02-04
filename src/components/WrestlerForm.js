import React from 'react'

const WrestlerForm = ({ data, handleChange, handleSubmit }) => {
  return (

    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className="input"
            placeholder="Wrestler Name"
            name="name"
            onChange={handleChange}
            value={data.name}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Real Name</label>
        <div className="control">
          <input
            className="input"
            placeholder="Real Name"
            name="realName"
            onChange={handleChange}
            value={data.realName}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Image</label>
        <div className="control">
          <input
            className="input"
            placeholder="Image"
            name="image"
            onChange={handleChange}
            value={data.image}
          />
        </div>
      </div>

      <button className="button is-info">Submit</button>
    </form>
  )
}

export default WrestlerForm
