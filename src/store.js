import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      nav: [
        {
            title: 'Introduction',
            icon: 'person_pin',
            subTitle: ['About Me'],
            url: '/introduction'
        },
        {
            title: 'Portfolio',
            icon: 'view_list',
            subTitle: ['All Projects'],
            url: '/portfolio'
        },
        {
            title: 'AnimationsArea',
            icon: 'animation',
            subTitle: ['Wave Effect', 'Particle Effect', 'Mouse Effect', 'Image Effect'],
            url: '/AnimationsArea'
        },
      ],
      buttons: {
        resume: '이력서 보기',
        contact: '연락하기',
      },
      modal: {
        title: null,
      },
      logo: {
        file: 'logo.png',
        alt: '박정은의 포트폴리오 사이트에 오신 걸 환영합니다.'
      },
      myProfile: {
        name: 'Jeongeun Park',
        email: 'qkdy01423@gmail.com',
        file: 'profile.jpg'
      },
      sns: [
        {
          cName: 'bi bi-github',
          title: 'github',
          url: 'https://github.com/jeongeunnn/jeongeun-portfolio'
        },
        {
          cName: 'bi bi-instagram',
          title: 'instagram',
          url: 'https://www.instagram.com/jjj_eunnn/'
        },
      ],
      projects: [
        {
          title: '광주시노인복지관 pc/mobile 홈페이지 리뉴얼',
          period: '2019.08~2019.09',
          url: 'http://www.gjswc.kr/gjnoin/index.do',
          skill: 'Html, Css, Javascript, jQuery',
          role: ['UI디자인(100%)', '퍼블리싱(100%)'],
          etc: ['웹표준/웹접근성/크로스브라우징',
              '사용자 인터렉션 위주의 구현(Javascript, jQuery, BxSlider)'],
          id: 0,
          file: 'gjswc.jpg',
          name: '광주시노인복지관',
          company: '비즈메이커(웹에이전시)',
        },
        {
          title: '호치민한국교육원 홈페이지 구축',
          period: '2019.10~2019.11',
          url: 'http://www.klech.org',
          skill: 'Html, Css, Javascript, jQuery',
          role: ['UI디자인(100%)', '퍼블리싱(100%)'],
          etc: ['웹표준/웹접근성/크로스브라우징',
              '사용자 인터렉션 위주의 구현(Javascript, jQuery, BxSlider)'],
          id: 1,
          file: 'klech.jpg',
          name: '호치민한국교육원',
          company: '비즈메이커(웹에이전시)',
        },
        {
          title: '여수여성인력개발센터 pc/mobile 홈페이지 리뉴얼',
          period: '2019.11 ~ 2020.02',
          url: 'https://yswoman.or.kr/yeosu/index.do',
          skill: 'Html, Css, Javascript, jQuery',
          role: ['UI디자인(100%)', '퍼블리싱(100%)'],
          etc: ['웹표준/웹접근성/크로스브라우징',
              '사용자 인터렉션 위주의 구현(Javascript, jQuery, Kakao maps API, BxSlider)'],
          id: 2,
          file: 'yswoman.jpg',
          name: '여수여성인력개발센터',
          company: '비즈메이커(웹에이전시)',
        },
        {
          title: '밀양시청소년수련관 홈페이지 구축',
          period: '2020.01 ~ 2020.02',
          url: 'http://www.miryouth.net/milyang/index.do',
          skill: 'Html, Css, Javascript, jQuery',
          role: ['UI디자인(100%)', '퍼블리싱(100%)'],
          etc: ['웹표준/웹접근성/크로스브라우징',
              '사용자 인터렉션 위주의 구현(Javascript, jQuery, Kakao maps API, Swiper)'],
          id: 3,
          file: 'miryouth.jpg',
          name: '밀양시청소년수련관',
          company: '비즈메이커(웹에이전시)',
        },
        {
          title: '전국성폭력상담소협의회 내부 업무 시스템 구축',
          period: '2020.07 ~ 2020.11',
          url: null,
          skill: 'Html, Css, Javascript, jQuery',
          role: ['UI디자인(100%)', '퍼블리싱(100%)'],
          etc: ['웹표준/웹접근성/크로스브라우징'],
          id: 4,
          file: 'kasvrc.jpg',
          name: '전국성폭력상담소협의회',
          company: '비즈메이커(웹에이전시)',
        },
        {
          title: '필스테이지 반응형 홈페이지 구축',
          period: '2020.05 ~ 2021.02',
          url: 'http://feelstage.com/index.php',
          skill: 'Html, Css, Javascript, jQuery',
          role: ['UI디자인(100%)', '퍼블리싱(100%)'],
          etc: ['웹표준/웹접근성/크로스브라우징',
              '사용자 인터렉션 위주의 구현(Javascript, jQuery, Swiper)',
              '서비스 및 관리자페이지 퍼블리싱',
              '유지보수',
              '다국어 홈페이지'],
          id: 5,
          file: 'feelstage.jpg',
          name: '필스테이지',
          company: '비즈메이커(웹에이전시)',
        },
        {
          title: '독거노인종합지원센터 반응형 홈페이지 리뉴얼',
          period: '2020.10 ~ 2021.04',
          url: 'http://www.1661-2129.or.kr/main/index.do ',
          skill: 'Html, Css, Javascript, jQuery',
          role: ['UI디자인(100%)', '퍼블리싱(60%)'],
          etc: ['웹표준/웹접근성/크로스브라우징',
              'eGov프레임워크에서 SVN사용하여 개발',
              '사용자 인터렉션 위주의 구현(Javascript, jQuery, Swiper)',
              '서비스(독거노인종합지원센터, 노인맞춤돌봄서비스 배움터) 및 관리자페이지 퍼블리싱'],
          id: 6,
          file: 'elderly.jpg',
          name: '독거노인종합지원센터',
          company: '비즈메이커(웹에이전시)',
        },
        {
          title: '청소년지원센터 꿈드림 반응형 홈페이지 리뉴얼',
          period: '2021.01 ~ 2021.04',
          url: 'https://www.kdream.or.kr:446/user/index.asp',
          skill: 'Html, Css, Javascript, jQuery',
          role: ['UI디자인(100%)', '퍼블리싱(100%)'],
          etc: ['웹표준/웹접근성/크로스브라우징',
              '사용자 인터렉션 위주의 구현(Javascript, jQuery, Kakao maps API, Swiper)'],
          id: 7,
          file: 'kdream.jpg',
          name: '청소년지원센터 꿈드림',
          company: '비즈메이커(웹에이전시)',
        },
        {
          title: '한솔PNS PMS UI 고도화 구축',
          period: '2022.03 ~ 2022.04',
          url: null,
          skill: 'Html, Scss, Javascript, jQuery',
          role: ['퍼블리싱(100%)'],
          etc: ['자동화 빌드 시스템 Gulp 사용하여 퍼블리싱',
              'Babel을 사용하여 ES6작성 코드를 버전다운하여 배포',
              '사용자 인터렉션 위주의 구현(Javascript, jQuery, pqGrid)',
              '크로스브라우징'],
          id: 8,
          file: 'hansol.jpg',
          name: '한솔PNS',
          company: '(주)미래와기술',
        },
        {
          title: '대한항공케이터링센터 NonERP UI 고도화 구축',
          period: '2021.12 ~ 2022.05',
          url: null,
          skill: 'Html, Scss, Javascript, jQuery',
          role: ['UI디자인(100%)', '퍼블리싱(100%)'],
          etc: ['adobe XD 사용하여 UI디자인',
              '형상관리도구 SVN 사용하여 개발', 
              'Google Chart 라이브러리 사용하여 통계 수치 시각화',
              '자동화 빌드 시스템 Gulp 구축하여 퍼블리싱',
              'Babel을 사용하여 ES6작성 코드를 버전다운하여 배포',
              '사용자 인터렉션 위주의 구현(Javascript, jQuery)',
              '크로스브라우징'],
          id: 9,
          file: 'koreanair.jpg',
          name: '대한항공 케이터링센터',
          company: '(주)데이터사이언스연구소',
        },
        {
          title: 'NHN BC 플랫폼 백오피스 웹사이트 신규 UI 개발',
          period: '2023.02 ~ 2023.03',
          url: null,
          skill: 'Html, Scss, Javascript, jQuery',
          role: ['퍼블리싱(100%)'],
          etc: ['컴포넌트 단위 개발에 중점을 두고 작업하여 스타일 파편화 방지 및 개발에서 자체적으로 재구성하여 사용할 수 있고록 구현',
              '모던브라우저부터 IE 11까지 브라우저 대응', 
              'UI 컴포넌트를 활용하여 개발할 수 있도록 퍼블리싱 가이드 작성',
              'gulp, SCSS, Nunjucks 사용하여 UI 개발',
              '형상 관리 툴(git) 사용 개발'],
          id: 10,
          file: 'nhnpebble.jpg',
          name: 'NHN BC 플랫폼',
          company: '엔에이치엔서비스주식회사',
        },
        {
          title: 'NHN make IT 콘퍼런스 웹사이트 신규 UI 개발',
          period: '2023.04 ~ 2023.05',
          url: 'https://makeit.nhncloud.com/2023',
          skill: 'Html, Scss, Javascript, jQuery',
          role: ['퍼블리싱(100%)'],
          etc: ['컴포넌트 단위 개발에 중점을 두고 작업하여 스타일 파편화 방지 및 개발에서 자체적으로 재구성하여 사용할 수 있고록 구현',
            '모던브라우저부터 IE 11까지 브라우저 대응',
            'UI 컴포넌트를 활용하여 개발할 수 있도록 퍼블리싱 가이드 작성',
            'gulp, SCSS, Nunjucks 사용하여 UI 개발',
            '형상 관리 툴(git) 사용 개발'],
          id: 11,
          file: 'makeit23.jpg',
          name: 'NHN Cloud',
          company: '엔에이치엔서비스주식회사',
        },
        {
          title: 'NHN Cloud IDC 사용자 포털 웹사이트 신규 UI 개발',
          period: '2023.07 ~ 2023.07',
          url: null,
          skill: 'Html, Scss, Javascript, jQuery',
          role: ['퍼블리싱(100%)'],
          etc: ['선 진행된 회원 포털과 공통으로 사용되는 컴포넌트의 코드 재활용성 개선',
            'gulp, SCSS, Nunjucks 사용하여 UI 개발',
            '형상 관리 툴(git), UI 프레임워크(bootstrap) 사용 개발'],
          id: 12,
          file: 'nhncloudidc.jpg',
          name: 'NHN Cloud IDC',
          company: '엔에이치엔서비스주식회사',
        },
        {
          title: 'NHN Cloud 포털/콘솔 웹사이트와 eDM을 포함한 전반적인 UI 개발 운영 업무',
          period: '2022.10 ~',
          url: 'https://www.nhncloud.com',
          skill: 'Html, Css, Javascript, jQuery',
          role: ['퍼블리싱(100%)'],
          etc: ['파편화된 코드 개선하여 관련성 있는 작업 시 소요되는 0.25~0.5MD 리소스 감소',
            '디자인 가이드 현행화로 통일성 부여하여 협업자들과의 혼선을 줄여 불필요한 커뮤니케이션 시간 감소',
            'css sync 이슈 파악 후 대응 전략 수립하여 개발팀에 공유 및 검수 프로세스 제안하여 배포 이후 수정 요청 건 47% 감소',
            '퍼블리싱 산출물 페이지 개선하여 히스토리 관리 효율성 증가',
            '픽셀 밀도에 따라 발생하는 폰트 가독성 이슈 개선으로 사용자의 사용성 증가',
            '형상 관리 툴(git), UI 프레임워크(bootstrap) 사용 개발',
            '다양한 플랫폼, 반응형, 다크모드에 대응 가능한 eDM 제작',
            '주요 컴포넌트 퍼블리싱 가이드 작성'],
          id: 13,
          file: 'nhncloud.jpg',
          name: 'NHN Cloud',
          company: '엔에이치엔서비스주식회사',
        },
      ],
      AnimationsArea: [
        {
          name: 'wave',
          file: 'wave.jpg',
          id: 0,
        },
        {
          name: 'particle',
          file: 'particle.jpg',
          id: 1,
        },
        {
          name: 'hover',
          file: 'hover.jpg',
          id: 2,
        },
        {
          name: 'image',
          file: 'image.jpg',
          id: 3,
        },
      ],
      pageRoot: undefined,
      pageTitle: undefined,
      timeline: [
        {
          company: '비즈메이커(웹에이전시)',
          address: '부산시 부산진구 범천동 879-2 서면베르빌 2차 412호',
          position: '개발팀/대리',
          period: '2019.02 ~ 2021.04',
          role: ['프로젝트 신규개발 담당(Html/Css/javascript/jQuery/웹표준/웹접근성)', 
                '유지보수',
                '반응형 웹사이트제작'],
          id: 0,  
        },
        {
          company: 'sbs아카데미컴퓨터아트학원',
          address: '경기도 고양시 일산동구 정발산로 23 402호',
          position: '교육부/강사',
          period: '2021.04 ~ 2021.12',
          role: ['웹퍼블리싱(Html, Css, Javascript, jQuery) 기초 및 포트폴리오 강의',
                'UI/UX디자인(AdobeXD, Zeplin) 강의'],
          id: 1,   
        },
        {
          company: '(주)미래와기술',
          address: '서울 구로구 디지털로29길 38, 905호',
          position: '개발팀/책임(프리랜서)',
          period: '2022.03 ~ 2022.04',
          role: ['한솔PNS PMS UI 고도화 구축 프로젝트', 
                '퍼블리싱(Html, Scss)', 
                '사용자 인터렉션 위주의 구현(Javascript, jQuery)'],
          id: 2,
        },
        {
          company: '(주)데이터사이언스연구소',
          address: '서울시 마포구 토정로35길 11 5층 5362호',
          position: '개발팀/책임(프리랜서)',
          period: '2021.12 ~ 2022.05',
          role: ['대한항공케이터링센터 NonERP UI 고도화 구축 프로젝트', 
                'UI디자인(adobeXD)', 
                '퍼블리싱(Html, Scss)', 
                '사용자 인터렉션 위주의 구현(Javascript, jQuery)'],
          id: 3,
        },
        {
          company: '엔에이치엔서비스주식회사',
          address: '경기 성남시 분당구 대왕판교로645번길 16 NHN',
          position: 'UI개발팀/전임',
          period: '2022.10 ~',
          role: ['NHN Cloud 포털/콘솔 웹사이트와 eDM을 포함한 전반적인 운영 업무 및 신규 ui개발', 
                'NHN 운영 업무 및 신규 ui개발'],
          id: 4,
        },
      ],
      education: [
        {
          name: 'sbs아카데미컴퓨터아트학원 웹퍼블리싱과정 수료',
          period: '2018.10 ~ 2019.01'
        },
        {
          name: '동아대학교 목조형가구디자인학과',
          period: '2010.03 ~ 2015.02'
        },
      ],
      skills: [
        {
          name: 'Javascript',
          cName: 'js',
          description: `Javascript(ES5,ES6)와 jQuery를 활용하여 
                        사용자 인터랙션 위주의 개발 경험이 있으며
                        Front-End Framework인 Vue와 React를 학습하였고
                        Vue를 학습한 내용을 바탕으로 본 포트폴리오를 제작하였습니다.`,
        },
        {
          name: 'Html5',
          cName: 'html',
          description: `Html5에서 권장하는 웹표준 마크업방식과 
                        시멘틱 태그를 이용해 전체 레이아웃을 설계합니다.
                        웹접근성 준수를 위해 키보드에 대한 적절한 대응과 
                        대체 텍스트를 제공하고자 노력합니다.`,
        },
        {
          name: 'Css3',
          cName: 'css',
          description: `Media Query를 활용하여 반응형 웹 제작 경험이 있으며
                        크로스브라우징을 위해 안정적인 속성을 사용하고
                        최신 트랜드에 맞추어 작성하고자 노력합니다.
                        또한 재활용성과 가독성을 보완할 수 있는 Scss전처리기를 사용합니다.`,
        }
      ],
      faq: [
        {
          question: '지금까지의 업무 경험에 대하여 설명해주세요.',
          answer: `5년차 UI개발자(웹 퍼블리셔)로서 NHN Service에서 NHN, NHN Cloud 포탈/콘솔의 운영과 신규 UI 개발을 담당하고 있으며 대한항공케이터링센터 백오피스 고도화 프로젝트에 참여하여 UI를 개선하였고 웹에이전시에서 다수의 웹 서비스 UI 개발과 유지보수 경력이 있습니다.<br><br>
                  저는 문제에 직면했을 때 해결하고자 노력해 왔습니다. 이러한 경험은 css sync 이슈 사례에 있습니다. 이력 추적을 통해 사례별 원인을 파악하고 프로세스 개선을 위해 전략을 수립하여 팀원과의 의사소통을 촉진하였습니다. 그 후 개발팀에게 원인 공유와 프로세스 개선안을 제안하였고 개발 소스 접근 권한을 얻고 배포 이후 UI 검수 단계를 추가하였으며 공유 방식을 일부 개선했습니다. 그 결과 배포 이후 수정 요청 건이 47% 감소하였습니다. 이처럼 적극적으로 문제를 진단하고 해결책을 찾아 프로세스 개선에 기여할 수 있습니다.<br><br>
                  그리고 UI 품질과 유지보수성을 위해 고민하고 학습합니다. 운영 업무를 하며 오랜 유지보수 기간만큼 파편화된 디자인과 코드 개선을 위해 디자인 현행화 및 공통화 작업을 진행하였고 주요한 컴포넌트들의 퍼블리싱 가이드를 주도적으로 작성하였습니다. 그 결과 코드 분석 및 혼선으로 발생하는 불필요한 커뮤니케이션에 드는 0.25 ~ 0.5 MD의 리소스가 감소하였습니다. 또한 gulp, SCSS, Nunjucks를 활용하여 향후의 파편화 방지와 반복 업무를 줄여 효율성을 높이고자 하며 프론트엔드 라이브러리인 Vue와 React 또한 학습하여 개발 소스 내 UI 요소에 발생하는 문제 진단에도 기여하고 있습니다.`,
        },
        {
          question: '기억에 남는 프로젝트가 있다면 무엇인가요?',
          answer: `최근 대한항공케이터링센터 프로젝트가 가장 기억에 남습니다.
                  <br><br>
                  해당 프로젝트는 백오피스 UI고도화로 6개월간 
                  오래전 개발되어 IE에서만 구동되고 있던 기내면세품 관리시스템(AFS), 기내식 관리시스템(COS) 두가지에 대한
                  UI개선 작업과 주요 기내면세품 실적 관리시스템(IFS)에 대한 신규개발 작업의 퍼블리싱을 전담하였습니다.
                  <br><br>
                  기존의 코드를 최대한 활용하되 웹표준에 어긋난 코드는 개선하였고
                  사용자 인터렉션과 관련이 있는 레거시 코드를 줄였습니다.
                  <br><br>
                  하지만 개발완료 후 인수인계를 하면서, 
                  스스로 좀 더 직관적이고 가독성이 좋은 코드를 작성에 대한 아쉬움이 생겼고
                  이를 계기로 Front-End Framework에 대한 필요성을 느끼게 되어
                  Vue.js, React.js를 학습하게 되었습니다.`,
        },
        {
          question: '업무 역량을 강화하기 위한 본인의 학습 방법을 설명해주세요.',
          answer: `토이 프로젝트를 만들거나 누군가에게 설명하는 방법이 좋다고 생각합니다.
                  <br><br>
                  처음 일을 시작하였을 때, jQuery와 기초적인 Javascript만 사용했습니다. 
                  하지만 기술 트렌드가 바뀌면서 역량강화를 위해서 javascript(ES6), Vue.js, React.js에 대해서
                  강의를 들으며 예제를 따라했지만 이렇게만 하면 이해가 잘되지 않는 경우가 많습니다.
                  그래서 스터디를 만들어 함께 공부하기도 하고 미리 강의를 들은 후 스터디 파트너가 
                  잘 모르는 부분이 있을 때 설명을 할 수 있도록 준비하기도 합니다.
                  <br><br>
                  그리고 Vue.js에 이해와 적용을 확인하기 위해 해당 포트폴리오를 제작하였습니다.
                  <br><br>
                  또 어려워 보이지 않는 스킬이면서 동시에 업무에 도움이 된다면, 다른 업무를 최대한 빠르게 진행하여 
                  시간적 여유를 만들어 놓은 후 생각하고 고민하고 찾아보기를 반복하며 적용하는 방향으로 학습하기도 합니다.`,
        },
      ],
      isNav: false,
      dynamicArr: []
    }
  },
  mutations: {
    updateCards(state, cards) {
      state.cards = cards;
    },
    getModalTitle(state, payload){
      state.modal = payload;
    },
    handleNav(state){
      if(state.isNav != true){
        state.isNav = true;
        document.body.classList.add('offCanvas');
      }else{
        state.isNav = false;
        document.body.classList.remove('offCanvas');
      }
    },
    reverseArr(state, payload){
      if (payload !== undefined) {
        Object.assign([], payload)
        return state.dynamicArr = [...payload].reverse();
      } else {
        console.error(`Array '${payload}' does not exist in the state.`);
      }
    }
  },
})

export default store


    