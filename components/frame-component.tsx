import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./frame-component.module.css";

const FrameComponent: NextPage = () => {
  const onSECURITYTextClick = useCallback(() => {
    // Please sync "Configure section " to the project
  }, []);

  const onCONFIGUREROBOTTextClick = useCallback(() => {
    // Please sync "Configure section " to the project
  }, []);

  const onCameraViewTextClick = useCallback(() => {
    // Please sync "First Message" to the project
  }, []);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.button}>
        <div className={styles.profile}>
          <img
            className={styles.component51}
            loading="lazy"
            alt=""
            src="/component-5-1@2x.png"
          />
          <div className={styles.computerSupport}>
            <div className={styles.v02alpha}>v0.2alpha</div>
          </div>
        </div>
      </div>
      <div className={styles.camera}>
        <div className={styles.welcomeMessageParent}>
          <div className={styles.welcomeMessage}>
            <img
              className={styles.welcomeMessageChild}
              loading="lazy"
              alt=""
              src="/ellipse-56@2x.png"
            />
          </div>
          <div className={styles.welcomeRohanRoy}>{`Welcome Rohan Roy ! `}</div>
        </div>
      </div>
      <img
        className={styles.frameItem}
        loading="lazy"
        alt=""
        src="/ellipse-81.svg"
      />
      <nav className={styles.deleteButton}>
        <div className={styles.configureRobot}>
          <button className={styles.skillCreation}>
            <div className={styles.skillCreationChild} />
            <img
              className={styles.chatRoomIcon}
              alt=""
              src="/chat-room@2x.png"
            />
            <div className={styles.chat}>CHAT</div>
          </button>
          <div className={styles.button1}>
            <img
              className={styles.profileIcon}
              loading="lazy"
              alt=""
              src="/profile@2x.png"
            />
            <div className={styles.searchBar}>
              <div className={styles.label}>Account</div>
            </div>
            <img
              className={styles.statusApprovedIcon}
              alt=""
              src="/status-approved.svg"
            />
          </div>
          <div className={styles.kobo}>
            <div className={styles.securityShieldParent}>
              <img
                className={styles.securityShieldIcon}
                loading="lazy"
                alt=""
                src="/security-shield@2x.png"
              />
              <div className={styles.security} onClick={onSECURITYTextClick}>
                <p className={styles.security1}>SECURITY</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.newDesignElementsWrapper}>
          <div className={styles.newDesignElements}>
            <div className={styles.frameParent}>
              <div className={styles.frameWrapper}>
                <div className={styles.computerSupportParent}>
                  <img
                    className={styles.computerSupportIcon}
                    loading="lazy"
                    alt=""
                    src="/computer-support@2x.png"
                  />
                  <div
                    className={styles.configureRobot1}
                    onClick={onCONFIGUREROBOTTextClick}
                  >
                    <p className={styles.configureRobot2}>CONFIGURE ROBOT</p>
                  </div>
                </div>
              </div>
              <div className={styles.box}>
                <img
                  className={styles.criticalThinkingIcon}
                  loading="lazy"
                  alt=""
                  src="/critical-thinking@2x.png"
                />
                <div className={styles.skillCreation1}>
                  <p className={styles.skillCreation2}>SKILL CREATION</p>
                </div>
              </div>
            </div>
            <div className={styles.cameraParent}>
              <img
                className={styles.cameraIcon}
                loading="lazy"
                alt=""
                src="/camera@2x.png"
              />
              <div className={styles.cameraViewWrapper}>
                <div
                  className={styles.cameraView}
                  onClick={onCameraViewTextClick}
                >
                  <p className={styles.cameraView1}>Camera View</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.saveIcon}>
          <div className={styles.cancelIcon}>
            <div className={styles.speed}>Speed</div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.rectangleWrapper}>
              <div className={styles.frameInner} />
            </div>
            <div className={styles.symbolsLibrary}>
              <div className={styles.buttonInst}>
                <div className={styles.profileBtn}>
                  <div className={styles.div}>50</div>
                </div>
                <div className={styles.button2}>
                  <img
                    className={styles.deleteIcon}
                    loading="lazy"
                    alt=""
                    src="/delete.svg"
                  />
                  <div className={styles.logoutBtn}>
                    <div className={styles.label1}>delete Account</div>
                  </div>
                  <img
                    className={styles.statusApprovedIcon1}
                    alt=""
                    src="/status-approved.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.button3}>
              <img
                className={styles.brightnessFullIcon}
                loading="lazy"
                alt=""
                src="/brightness-full@2x.png"
              />
              <div className={styles.micIcon}>
                <div className={styles.label2}>Dark mode</div>
              </div>
              <img
                className={styles.statusApprovedIcon2}
                alt=""
                src="/status-approved.svg"
              />
            </div>
            <div className={styles.rectShp}>
              <div className={styles.button4}>
                <img
                  className={styles.logoutIcon}
                  loading="lazy"
                  alt=""
                  src="/logout.svg"
                />
                <div className={styles.koboInst}>
                  <div className={styles.label3}>logout</div>
                </div>
                <img
                  className={styles.statusApprovedIcon3}
                  alt=""
                  src="/status-approved.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className={styles.btnGrp}>
        <img
          className={styles.groupIcon}
          loading="lazy"
          alt=""
          src="/group.svg"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
