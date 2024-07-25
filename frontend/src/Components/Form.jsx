import React from 'react'

// eslint-disable-next-line react/prop-types
const Form = ({id1, id2, id3, value1, value2, value3, buttontext, handleSubmit}) => {

    const [firstValue, setFirstValue] = React.useState(value1);
    const [secondValue, setSecondValue] = React.useState(value2);
    const [thirdValue, setThirdValue] = React.useState(value3);

  return (
    <div>
      <h1 className="display-1 my-5">Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control my-2"
          placeholder={id1}
          id={id1}
          name={id1}
          value={firstValue}
          onChange={(e) => setFirstValue(e.target.value)}
        />
        <input
          type="text"
          className="form-control my-2"
          placeholder={id2}
          id={id2}
          name={id2}
          value={secondValue}
          onChange={(e) => setSecondValue(e.target.value)}
        />
        <input
          type="image"
          className="form-control my-2"
          placeholder={id3}
          id={id3}
          name={id3}
          value={thirdValue}
          onChange={(e) => setThirdValue(e.target.value)}
        />
        <div className="text-center">
          <button type="submit" className="btn btn-primary my-4">
            {buttontext}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form