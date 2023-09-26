import { RightArrow } from "../../assets/icons/RightArrow";
import whatIsWarple from "../../assets/whatIsWarple.png";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import Container from "../../components/global/Container";
import FlexContainer from "../../components/global/FlexContainer";
import DescriptionText from "../../components/texts/DescriptionText";
import PrimaryText from "../../components/texts/PrimaryText";
import SecondaryText from "../../components/texts/SecondaryText";
import style from "./index.module.css";

const AboutPage = () => {
  return (
    <main className={style.mainTag}>
      {/* ---------banner-part--------- */}
      <section className={style.banner}>
        <Container>
          <div className={style.header_wrapper}>
            <p className={style.headerTextSmall}>warpleについて</p>
            <h1 className={style.headerText}>About</h1>
          </div>
        </Container>
      </section>
      {/* ---------WHAT-IS-warple-part--------- */}
      <section className={style.whatIsWraple}>
        <Container column>
          <div className={style.whatIsWraple_text_wrapper}>
            <PrimaryText>WHAT IS warple</PrimaryText>
            <SecondaryText>warpleって?</SecondaryText>
          </div>
          <FlexContainer>
            <div className={style.whatIsWrapleImage_wrapper}>
              <img src={whatIsWarple} alt="" />
            </div>
            <div className={style.whatIsWarpleContent_wrapper}>
              <SecondaryText blueText>
                留学を、
                <br /> もっとかしこく、
                <br /> おもしろく。
              </SecondaryText>
              <hr />
              <DescriptionText>
                warple は、語学学校/プログラムの検索や申込み、渡航
                までの準備や学校/宿泊先の手配まで留学に必要なすべ
                てをインターネット上で完結させることにより、どこよりも安
                く、どこよりもあなたらしく、留学が実現できるサービスです。
              </DescriptionText>
            </div>
          </FlexContainer>
          <PrimaryButton>
            初めての方へ
            <RightArrow />
          </PrimaryButton>
        </Container>
      </section>
    </main>
  );
};

export default AboutPage;
