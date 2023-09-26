import Container from "../../components/global/Container";
import style from "./index.module.css";

const AboutPage = () => {
  return (
    <>
      {/* ---------banner-part--------- */}
      <section className={style.banner}>
        <Container>
          <div className={style.header_wrapper}>
            <p className={style.headerTextSmall}>warpleについて</p>
            <h1 className={style.headerText}>About</h1>
          </div>
        </Container>
      </section>
      <section></section>
    </>
  );
};

export default AboutPage;
