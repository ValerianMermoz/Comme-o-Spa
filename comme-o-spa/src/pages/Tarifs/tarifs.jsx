const Tarifs = () => {
  return (
    <div className="Tarifs">
      <div className="tarifsconteneur">
        <div className="titretarif">
          <h2>TARIFS</h2>
          <p>frais de déplacement inclus *</p>
        </div>
        <div className="tarifsbox">
          <div className="corpsbox">
            <div className="titrecorps">CORPS</div>
            <div className="cardmenu">
              <div className="cardtext">
                <h3>Massage 30 min</h3>
                <p>concerne massage sur-mesure</p>
              </div>
              <div className="prix">
                <h3>55 €</h3>
              </div>
            </div>
            <div className="cardmenu">
              <div className="cardtext">
                <h3>Massage 45 min</h3>
              </div>
              <div className="prix">
                <h3>65 €</h3>
              </div>
            </div>
            <div className="cardmenu">
              <div className="cardtext">
                <h3>Massage 1 H</h3>
              </div>
              <div className="prix">
                <h3>65 €</h3>
              </div>
            </div>
            <div className="cardmenu">
              <div className="cardtext">
                <h3>Massage 1 H 30</h3>
                <p>Hors Suédois et massage femme enceinte</p>
              </div>
              <div className="prix">
                <h3>95 €</h3>
              </div>
            </div>
          </div>
          <div className="massagesbox">
            <div className="titremassages">MASSAGES BIEN-ÊTRE</div>
            <div className="cardmenu">
              <div className="cardtext">
                <h3>Massage D-STRESS</h3>
                <p>45 MIN / 1H / 1H30</p>
                <p>
                  Massage apaisant type californien, il vise à réduire le stress
                  et l'anxiété pour une profonde relaxation
                </p>
              </div>
              <div className="prix">
                <h3>65 € / 75 € / 95 €</h3>
              </div>
            </div>
            <div className="cardmenu">
              <div className="cardtext">
                <h3>Massage VITALY</h3>
                <p>45 MIN / 1H / 1H30</p>
                <p>Massage dynamique et décontracant inspiré du Suédois.</p>
                <p>Allie douceur et tonicité. Apprécié par les sportives.</p>
              </div>
              <div className="prix">
                <h3>65 € / 75 €</h3>
              </div>
            </div>
            <div className="cardmenu">
              <div className="cardtext">
                <h3>Massage LOMI-LOMI</h3>
                <p>45 MIN / 1H / 1H30</p>
                <p>
                  Véritable invitation au voyage aux odeurs de monoï avec des
                  manoeuvres enveloppantes. Facilite au lâcher prise pour une
                  relaxation profonde.
                </p>
              </div>
              <div className="prix">
                <h3>65 € / 75 € / 95 €</h3>
              </div>
            </div>
            <div className="cardmenu">
              <div className="cardtext">
                <h3>Massage INTUITIF SIGNATURE</h3>
                <p>45 MIN / 1H / 1H30</p>
                <p>
                  Massage anti-stress personnalisé à l'écoute de vos besoins et
                  ressentis, Mélange de différentes techniques (ayurvédique /
                  balinais / oriental ...)
                </p>
              </div>
              <div className="prix">
                <h3>65 € / 75 € / 95 €</h3>
              </div>
            </div>
            <div className="cardmenu">
              <div className="cardtext">
                <h3>Massage SUR-MESURE</h3>
                <p>
                  Choisissez 1 ou plusieurs zones de votre choix (dos, jambes,
                  visage, mains ...)
                </p>
              </div>
              <div className="prix">
                <h3>55 € / 65 €</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tarifs;
