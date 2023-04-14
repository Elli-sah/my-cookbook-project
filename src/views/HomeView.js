import "../css/HomeView.css";

function home() {
  return (
    <div className="view-divs">
      <div className="start-top-pic">
        <h1 className="start-heading">KokBoken</h1>
        <div className="line"></div>
        <div className="start-text">
          <p>
            Välkommen till Kokboken - din ultimata destination för
            matlagningsinspiration!
          </p>
          {/* <p>
            Vi tror att matlagning är kreativt och roligt. Vår passion för
            matlagning och olika kök inspirerade oss att skapa en plattform där
            människor kan dela sina favoritrecept och få inspiration från olika
            matkulturer.
          </p>
          <p>
            Vårt team av erfarna matentusiaster och kockar ger dig de bästa
            recepten och tipsen för att laga fantastisk mat i ditt eget kök. Här
            hittar du allt från enkla vardagsrecept till mer avancerade rätter.
            Upptäck glädjen i matlagning och inspireras av nya smaker och
            kombinationer hos Kokboken!
          </p> */}
        </div>
      </div>
      {/* <div className="box"> */}
      <div className="start-categories">
        <div className="round-categories brunch ">Brunch</div>
        <div className="round-categories snack">Mellanmål</div>
        <div className="round-categories evening">Kvällsmat</div>
        <div className="round-categories starter">Förrätter</div>
        <div className="round-categories main-dish">Varmrätter</div>
        <div className="round-categories refreshments">Efterrätter</div>
        <div className="round-categories cold-dishes">Kallrätter</div>
      </div>
      {/* </div> */}
      <div className="start-block-1">
        <div className="image-b1"></div>
        <div className="text-b1">
          <h2 className="about-heading">Om Kokboken</h2>
          <div>
            <p>
              Välkommen till Kokboken - en receptsida som inspirerar och
              underlättar matlagning i köket!
            </p>
            <p>
              Vi samlar och delar de bästa recepten från hela världen, och du
              kan även lägga till egna favoritrecept och skapa shoppinglistor
              från recepten.
            </p>
            <p>
              Vi strävar efter att erbjuda en användarvänlig sida för en rolig
              och enkel matlagning. Tack för att du valde Kokboken - vi ser fram
              emot att fortsätta erbjuda nya och spännande recept!
            </p>
          </div>
        </div>
      </div>
      <div className="start-block-2">
        <div className="text-b2">
          <h2>Skapa din egen Receptbok!</h2>
          <p>
            Du kan testa att lägga till dina egna recept här genom att klicka på
            länken nedan och följa instruktionerna. Vi ser fram emot att se vad
            du har att dela med dig av!
          </p>
        </div>
        <div className="image-b2"></div>
      </div>
    </div>
  );
}
export default home;
