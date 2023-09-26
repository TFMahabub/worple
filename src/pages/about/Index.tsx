import Point1 from "../../assets/aboutPage/point-1.png";
import Point2 from "../../assets/aboutPage/point-2.png";
import Point3 from "../../assets/aboutPage/point-3.png";
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
      {/* ===========WHAT-IS-warple-part=========== */}
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
      {/* ==============POINT-part============== */}
      <section className={style.pointWraple}>
        <Container column>
          <div className={style.whatIsWraple_text_wrapper}>
            <PrimaryText>POINT</PrimaryText>
            <SecondaryText>warpleの3つのポイント?</SecondaryText>
          </div>
          <div className={style.point_wrapper}>
            <div className={style.flexItem}>
              {/* ---------POINT-1--------- */}
              <div className={style.point_content_wrapper}>
                <img src={Point1} alt="" />
                <SecondaryText blueText>
                  どこよりも <br /> 安く留学できる
                </SecondaryText>
                <hr />
                <DescriptionText>
                  warple は、お申し込みから渡航の準備まで留学に関わる
                  すべてをWEB上で完結させることで、語学学校に直接申し
                  込むよりも安い費用で留学することが可能です。
                </DescriptionText>
              </div>
              {/* ---------POINT-3--------- */}
              <div className={style.point_content_wrapper}>
                <img src={Point2} alt="" />
                <SecondaryText blueText>
                  どこよりも <br /> 安く留学できる
                </SecondaryText>
                <hr />
                <DescriptionText>
                  warple は、お申し込みから渡航の準備まで留学に関わる
                  すべてをWEB上で完結させることで、語学学校に直接申し
                  込むよりも安い費用で留学することが可能です。
                </DescriptionText>
              </div>
            </div>
            {/* ---------POINT-2--------- */}
            <div className={style.flexItem}>
              <div className={style.point_content_wrapper}>
                <img src={Point3} alt="" />
                <SecondaryText blueText>
                  どこよりも <br /> 安く留学できる
                </SecondaryText>
                <hr />
                <DescriptionText>
                  warple は、お申し込みから渡航の準備まで留学に関わる
                  すべてをWEB上で完結させることで、語学学校に直接申し
                  込むよりも安い費用で留学することが可能です。
                </DescriptionText>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default AboutPage;
