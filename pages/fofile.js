import Link from "next/link";
import React from "react";
import styles from "../styles/frofile.module.css";

export default function frofile() {
  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <div className={styles.imgbox}>
          <img className="img" src="images/myfrofile.jpg"></img>
        </div>
        <br />
        <h1>91812505</h1>
        <br />
        <h1>정보보안학과</h1>
        <br />
        <h1>3학년</h1>
        <br />
        <h1>손진빈</h1>
        <br />
        <Link href="https://github.com/withsjb/wapaap">
          <div className={styles.gitimgbox}>
            <img className="img" src="images/gitimg.jpg"></img>
          </div>
        </Link>
        <div className={styles.gitimgbox}>
          <img className="img" src="images/call.jpg"></img>
        </div>
        010-3476-0882
        <div className={styles.gitimgbox}>
          <img className="img" src="images/mail.jpg"></img>
        </div>
        withsjb1@gmail.com
        <Link href="/">
          <h1 className={styles.btn}> nextshop 보러가기</h1>
        </Link>
      </div>

      <div className={styles.write}>
        <div className={styles.lang}>
          <h1 className={styles.title}>사용 가능한 언어</h1>
          <div className={styles.imgboxs}>
            <img className="img" src="images/htmlimg.png"></img>
          </div>
          <div className={styles.imgboxs}>
            <img className="img" src="images/jsimg.png"></img>
          </div>
          <div className={styles.imgboxs}>
            <img className="img" src="images/cssimg.png"></img>
          </div>
        </div>
        <br />
        <p>
          ------------------------------------------------------------------------------------------------------------------------
        </p>
        <div className={styles.aboutme}>
          <h1 className={styles.title}>자기 소개</h1>
          <br />
          <p className={styles.fontt}>
            안녕하세요 저는 정보보안학과를 재학중인 18학번 3학년 손진빈이라고
            합니다. 현재 프론트 엔드 개발자를 지망하고 이에 대해 꿈을 키워나가고
            있습니다. 저는 끊임없는 도전정신과 한번 맡은 일은 포기하지 않는
            책임감으로 계속 노력하여 실력을 키워나가고 있습니다 중간에 좌절을
            겪더라도 저 스스로 자아성찰해 나가며 어엿한 한명의 개발자로
            성장해보겠습니다.
          </p>
        </div>
        <p>
          ------------------------------------------------------------------------------------------------------------------------
        </p>
        <div className={styles.important}>
          <h1 className={styles.title}>중시하는 요소</h1>
          <div className={styles.importanta}>
            <div className={styles.imgboxsa}>
              <img className="img" src="images/one.jpg"></img>
            </div>
            <p className={styles.imporwri}>책임감</p>
            <p className={styles.imporwri}>
              아무리 어렵고 힘든 작업이라도 한번 맡은 작업은 끝까지
              할려고합니다.
            </p>
          </div>

          <div className={styles.importantb}>
            <div className={styles.imgboxsa}>
              <img className="img" src="images/two.jpg"></img>
            </div>
            <p className={styles.imporwri}>도전</p>
            <p className={styles.imporwri}>
              처음 하는 작업이나 어려워 보이는 작업도 실패를 두려워하지 않고
              도전해보려고 합니다.
            </p>
          </div>

          <div className={styles.importantc}>
            <div className={styles.imgboxsa}>
              <img className="img" src="images/three.jpg"></img>
            </div>
            <p className={styles.imporwri}>반성</p>
            <p className={styles.imporwri}>
              실패를 경험으로 삼아 다음에는 어떻게 해야 성공할 수 있을지
              자아성찰을 합니다.
            </p>
          </div>
        </div>
        <p>
          ------------------------------------------------------------------------------------------------------------------------
        </p>
        <div className={styles.project}>
          <h1 className={styles.title}>진행한 프로젝트</h1>
          <div className={styles.projecta}>
            <img className="img" src="images/timecorceimg.jpg"></img>
          </div>
          <p className={styles.title}>Timecorce</p>
          <p className={styles.projectawri}>
            3학년 1학기 캡스톤으로 진행한 프로젝트 기존 수강신청 사이트에
            불편한점을 개선하는 목적으로 기존 ui의 개선이나 새로운 기능(별점및
            강의평가기능과 호버기능을 이용한 간편정리등)들을 추가하였다.
          </p>
          <br />
          <br />
          <div className={styles.projectb}>
            <img className="img" src="images/jbu.jpg"></img>
          </div>

          <p className={styles.title}>Jbu drive</p>
          <p className={styles.projectawri}>
            3학년 1학기 암호프로그래밍때 진행한 팀 프로젝트로 기존에 사용하던
            정보들을 따로 목록을 모와 저장하는 작업 아이디 비밀번호와 회원정보및
            채팅기록을 암호화하여 보안을 강화하고 이용자들이 과정을 쉽게
            이용하게 하기 위해 ui를 개발하였다.
          </p>
        </div>
      </div>
    </div>
  );
}
