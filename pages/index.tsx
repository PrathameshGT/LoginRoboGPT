import type { NextPage } from "next";
import FrameComponent from "../components/frame-component";
import styles from "./index.module.css";

const Frame: NextPage = () => {
  return (
    <div className={styles.iphone11ProMax2Parent}>
      <main className={styles.iphone11ProMax2}>
        <section className={styles.maskGroupWrapper}>
          <img className={styles.maskGroupIcon} alt="" />
        </section>
        <section className={styles.valpha}>
          <FrameComponent />
          <div className={styles.microphoneV}>
            <div className={styles.prentFrmeParent}>
              <div className={styles.prentFrme}>
                <img
                  className={styles.groupIcon}
                  loading="lazy"
                  alt=""
                  src="/group-1.svg"
                />
              </div>
              <div className={styles.hTMsg}>
                <div className={styles.btnPair}>
                  <div className={styles.koboComp}>
                    <div className={styles.frmBttn}>
                      <img
                        className={styles.koboIcon}
                        loading="lazy"
                        alt=""
                        src="/kobo.svg"
                      />
                    </div>
                    <img
                      className={styles.component51}
                      loading="lazy"
                      alt=""
                      src="/component-5-1-1@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.grpCntnr}>
                  <div className={styles.heyThereTrailblazerContainer}>
                    <p
                      className={styles.heyThereTrailblazer}
                    >{` Hey there, trailblazer! `}</p>
                    <p className={styles.welcomeToRobogpt}>
                      Welcome to RoboGPT frontier
                    </p>
                    <p className={styles.whereEveryMessage}>
                      {" "}
                      where every message is a step into the great unknown! 🚀
                    </p>
                  </div>
                </div>
                <div className={styles.chatFrm}>
                  <div className={styles.hiMsg}>
                    <div className={styles.ctrlSetsParent}>
                      <div className={styles.ctrlSets}>
                        <img
                          className={styles.buttonIcon}
                          loading="lazy"
                          alt=""
                          src="/button.svg"
                        />
                        <div className={styles.hiiRohanStartContainer}>
                          <p className={styles.hiiRohan}>{`Hii Rohan `}</p>
                          <p className={styles.startChatting}>
                            Start Chatting !
                          </p>
                        </div>
                      </div>
                      <button className={styles.ctrlSets1}>
                        <img
                          className={styles.buttonIcon1}
                          alt=""
                          src="/button-1.svg"
                        />
                        <div className={styles.whatsAroundYou}>
                          What's Around You
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className={styles.whatsAroundYouMsg}>
                    <div className={styles.searchBar}>
                      <div className={styles.box}>
                        <img className={styles.icon} alt="" src="/icon.svg" />
                        <div className={styles.label}>Enter a prompt</div>
                      </div>
                      <img
                        className={styles.micContIcon}
                        loading="lazy"
                        alt=""
                        src="/frame-133.svg"
                      />
                    </div>
                    <div className={styles.ellipseParent}>
                      <div className={styles.frameChild} />
                      <img
                        className={styles.microphoneIcon}
                        loading="lazy"
                        alt=""
                        src="/microphone@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <img
          className={styles.iphone11ProMax2Child}
          alt=""
          src="/vector-41.svg"
        />
      </main>
    </div>
  );
};

export default Frame;
