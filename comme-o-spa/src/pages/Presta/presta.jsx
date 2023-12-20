const Presta = () => {
  return (
    <div className="Presta">
      <h2 className="Prestatitre">
        Ce que je <span>vous</span> propose,
      </h2>

      <div className="conteneurpresta">
        <div className="boxpresta">
          <img
            src="https://i.goopics.net/i4rri8.png"
            className="imgpresta"
            alt="massage du dos"
          ></img>
          <div className="contentboxpresta">
            <h3>Soin du corps</h3>
            <h3>Description</h3>
          </div>
        </div>
        <div className="boxpresta">
          <img
            src="https://i.goopics.net/w7vxhm.png"
            className="imgpresta"
            alt="huiles essentielles"
          ></img>
          <h3>Massages</h3>
          <h3>Description</h3>
        </div>
      </div>
    </div>
  );
};

export default Presta;
