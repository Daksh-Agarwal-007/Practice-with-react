/* eslint-disable react/prop-types */
function ServicesCard(props) {
  let title = props["title"];
  let price = props["price"];
  let firstdesc = props["firstdesc"];
  let seconddesc = props["seconddesc"];
  let img = props["img"];
  return (
    <>
      <div className="row p-5 mx-4">
        <div className="col-5 px-5">
          <img src={img} alt="" />
        </div>
        <div className="col-5">
          <h3>{title}</h3>
          <p className="py-2">{firstdesc}</p>
          <p className="py-1"></p>
          <p className="py-2">{seconddesc}</p>
          <h4 className="py-3">{price}</h4>
        </div>
      </div>
    </>
  );
}

export default ServicesCard;
