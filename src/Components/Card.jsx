/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

function Card(props) {
  let title = props["title"];
  let desc = props["desc"];
  let img = props["img"];

  return (
    <>
      <div className="col-lg-4">
        <img src={img} alt="" />
        <>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
        </>
      </div>
    </>
  );
}

export default Card;
