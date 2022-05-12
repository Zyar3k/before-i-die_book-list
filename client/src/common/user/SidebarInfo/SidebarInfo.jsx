import "./SidebarInfo.scss";

const SidebarInfo = () => {
  // TODO: array of links
  return (
    <section className="sidebarInfo">
      <h1 className="sidebarInfo__title">before I die</h1>
      <div className="sidebarInfo__info">
        Lista <span>before I die</span> została utworzona na podstawie głosów
        użytkowników stron
        <a
          href="http://www.gandalf.com.pl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gandalf
        </a>
        ,
        <a
          href="http://www.pozycjeobowiazkowe.pl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pozycjeobowiazkowe.pl
        </a>
        ,
        <a
          href="http://www.empik.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Empik
        </a>
        ,
        <a
          href="http://www.lubimyczytać.pl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lubimy czytać
        </a>
        , oraz na podstawie list opublikowanych przez Amazon i BBC. Scalono
        dublujące się tytuły. Każda pozycja ma informację do jakiej listy
        należy.
      </div>
    </section>
  );
};

export default SidebarInfo;
