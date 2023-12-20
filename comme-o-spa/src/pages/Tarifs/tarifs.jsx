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
            <div className="titrecorps">PRIX</div>
            <div className="cardmenu">
              <div className="cardtext">
                <h3>Massage 30 min*</h3>
                <p>*Concerne massage sur-mesure</p>
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
                <h3>Massage 60 min</h3>
              </div>
              <div className="prix">
                <h3>75 €</h3>
              </div>
            </div>
            <div className="cardmenu">
              <div className="cardtext">
                <h3>Massage 90 min**</h3>
                <p>**Hors massage Vitaly, Femme enceinte</p>
                <p>et Sur-mesure</p>
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
                <p>
                  Massage apaisant type californien, il vise à réduire le stress
                  et l'anxiété pour une profonde relaxation.
                </p>
              </div>
            </div>
            <div className="cardmenu">
              <div className="cardtext">
                <h3>Massage VITALY</h3>
                <p>Massage dynamique et décontractant inspiré du Suédois.</p>
                <p>Allie douceur et tonicité. Apprécié par les sportives.</p>
              </div>
            </div>
            <div className="cardmenu">
              <div className="cardtext">
                <h3>Massage LOMI-LOMI</h3>
                <p>
                  Véritable invitation au voyage aux odeurs de monoï avec des
                  manœuvres enveloppantes. Facilite au lâcher prise pour une
                  relaxation profonde.
                </p>
              </div>
            </div>
            <div className="cardmenu">
              <div className="cardtext">
                <h3>Massage INTUITIF SIGNATURE</h3>
                <p>
                  Massage anti-stress personnalisé à l'écoute de vos besoins et
                  ressentis. Mélange de différentes techniques (ayurvédique /
                  balinais / oriental ...).
                </p>
              </div>
            </div>
            <div className="cardmenu">
              <div className="cardtext">
                <h3>Massage SUR-MESURE</h3>
                <p>
                  Choisissez 1 ou 2 zones de votre choix (dos, jambes,
                  visage, mains ...). Durée au choix de 30 ou 45 minutes.
                </p>
              </div>
            </div>
            <div className="cardmenu">
              <div className="cardtext">
                <h3>Massage FUTURE MAMAN</h3>
                <p>
                  Reservé aux futures mamans (+4 mois), massage doux pour réduire la fatigue et les tensions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="tarifbottom">
          <h3>Uniquement en espèces</h3>
        </div>
      </div>
    </div>
  );
};

export default Tarifs;
