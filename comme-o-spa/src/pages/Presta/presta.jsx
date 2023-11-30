const Presta = () => {
  return (
    <div className="Presta">
      <h2>
        Ce que je <span>vous</span> propose,
      </h2>

      <div className="conteneurpresta">
        <div className="boxpresta">
          <img
            src="https://i.goopics.net/i4rri8.png"
            className="imgpresta"
            alt="soins corps"
          ></img>
          <div className="contentboxpresta">
            <h3>Soin du corps</h3>
            <p>Description</p>
          </div>
        </div>
        <div className="boxpresta">
          <img
            src="https://i.goopics.net/wu1huq.png"
            className="imgpresta"
            alt=" soins visage"
          ></img>
          <h3>Soin du visage</h3>
          <p>Description</p>
        </div>
        <div className="boxpresta">
          <img
            src="https://i.goopics.net/w7vxhm.png"
            className="imgpresta"
            alt="massages"
          ></img>
          <h3>Massages</h3>
          <p>Description</p>
        </div>
      </div>
    </div>
  );
};

export default Presta;
