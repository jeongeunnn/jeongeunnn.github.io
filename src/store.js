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
        {
          title: 'React',
          icon: 'code',
          subTitle: ['NHN Gameplatform contact'],
          url: '/React'
        }
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
        name: 'Jungeun Park',
        email: 'qkdy01423@gmail.com',
        file: 'profile.jpg'
      },
      sns: [
        {
          cName: 'bi bi-github',
          title: 'github',
          url: 'https://github.com/jungeunnn/jungeun-portfolio'
        },
        {
          cName: 'bi bi-instagram',
          title: 'instagram',
          url: 'https://www.instagram.com/jjj_eunnn/'
        },
      ],
      projects: [
        {
          title: '광주시노인복지관 개편',
          period: '2019.08.05 ~ 2019.09.20',
          url: 'http://www.gjswc.kr/gjnoin/index.do',
          skill: 'Html, Css, Javascript, jQuery',
          role: ['디자인, 마크업(기여도: 100%)'],
          etc: ['디자인부터 마크업, 사용자 인터렉션 구현을 담당하여 적응형 웹사이트 구현',
              'Kakao Maps API 키를 사용하여 지도 객체를 생성하고, 특정 좌표로 지도 설정 및 마커와 정보창 설정',
              'BxSlider 라이브러리를 활용하여 슬라이더의 스타일과 동작을 사용자 요구사항에 맞게 커스터마이징',
              '웹표준/웹접근성/크로스 브라우징'],
          id: 0,
          file: 'gjswc.jpg',
          name: '광주시노인복지관',
          company: '비즈메이커(웹에이전시)',
        },
        {
          title: '호치민한국교육원 신규 개발',
          period: '2019.10.01 ~ 2019.11.08',
          url: 'http://www.klech.org',
          skill: 'Html, Css, Javascript, jQuery',
          role: ['디자인, 마크업(기여도: 100%)'],
          etc: ['디자인부터 마크업, 사용자 인터렉션 구현을 담당하여 고정형 웹사이트 구현',
              'BxSlider 라이브러리를 활용하여 슬라이더의 스타일과 동작을 사용자 요구사항에 맞게 커스터마이징',
              '웹표준/웹접근성/크로스 브라우징'],
          id: 1,
          file: 'klech.jpg',
          name: '호치민한국교육원',
          company: '비즈메이커(웹에이전시)',
        },
        {
          title: '여수여성인력개발센터 개편',
          period: '2019.11.25 ~ 2020.02.14',
          url: 'https://yswoman.or.kr/yeosu/index.do',
          skill: 'Html, Css, Javascript, jQuery',
          role: ['디자인, 마크업(기여도: 100%)'],
          etc: ['디자인부터 마크업, 사용자 인터렉션 구현을 담당하여 적응형 웹사이트 구현',
              'Kakao Maps API 키를 사용하여 지도 객체를 생성하고, 특정 좌표로 지도 설정 및 마커와 정보창 설정',
              'BxSlider 라이브러리를 활용하여 슬라이더의 스타일과 동작을 사용자 요구사항에 맞게 커스터마이징',
              '웹표준/웹접근성/크로스 브라우징'],
          id: 2,
          file: 'yswoman.jpg',
          name: '여수여성인력개발센터',
          company: '비즈메이커(웹에이전시)',
        },
        {
          title: '밀양시청소년수련관 개편',
          period: '2020.01.06 ~ 2020.02.03',
          url: 'http://www.miryouth.net/milyang/index.do',
          skill: 'Html, Css, Javascript, jQuery',
          role: ['디자인, 마크업(기여도: 100%)'],
          etc: ['디자인부터 마크업, 사용자 인터렉션 구현을 담당하여 고정형 웹사이트 구현',
              'Swiper 라이브러리를 활용하여 동적인 슬라이더와 캐러셀 기능을 구현',
              'Kakao Maps API 키를 사용하여 지도 객체를 생성하고, 특정 좌표로 지도 설정 및 마커와 정보창 설정',
              '웹표준/웹접근성/모던 브라우저에서 IE11까지의 크로스 브라우징'],
          id: 3,
          file: 'miryouth.jpg',
          name: '밀양시청소년수련관',
          company: '비즈메이커(웹에이전시)',
        },
        {
          title: '전국성폭력상담소협의회 내부 업무 시스템 신규 개발',
          period: '2020.07.01 ~ 2020.11.20',
          url: null,
          skill: 'Html, Css, Javascript, jQuery',
          role: ['디자인, 마크업(기여도: 100%)'],
          etc: ['백오피스 프로그램을 디자인부터 마크업, 사용자 인터렉션 구현을 담당하여 적응형 웹사이트 구현',
              '웹표준/웹접근성/크로스 브라우징'],
          id: 4,
          file: 'kasvrc.jpg',
          name: '전국성폭력상담소협의회',
          company: '비즈메이커(웹에이전시)',
        },
        {
          title: '독거노인종합지원센터 개편',
          period: '2020.10.5 ~ 2021.04.30',
          url: 'http://www.1661-2129.or.kr/main/index.do ',
          skill: 'Html, Css, Javascript, jQuery',
          role: ['디자인, 퍼블리싱, 프론트(기여도: 60%)'],
          etc: ['서비스(독거노인종합지원센터, 노인맞춤돌봄서비스 배움터) 및 관리자페이지 마크업과 사용자 인터렉션 담당하여 반응형 웹사이트 구현',
              '전자정부 프레임워크(eGov), 자체 프레임워크 사용 개발',
              'Localizable Calendar 라이브러리를 활용하여 달력 기능을 구현하고 커스터마이징',
              'Swiper 라이브러리를 활용하여 동적인 슬라이더와 캐러셀 기능을 구현',
              '웹 접근성 지침을 준수하여 모든 사용자들에게 접근 가능한 웹사이트 구축',
              '웹 표준에 준수하여 웹사이트의 품질과 호환성 유지',
              '웹표준/웹접근성/모던 브라우저에서 IE11까지의 크로스 브라우징'],
          id: 5,
          file: 'elderly.jpg',
          name: '독거노인종합지원센터',
          company: '비즈메이커(웹에이전시)',
        },
        {
          title: '청소년지원센터 꿈드림 개편',
          period: '2021.01.6 ~ 2021.04.02',
          url: 'https://www.kdream.or.kr:446/user/index.asp',
          skill: 'Html, Css, Javascript, jQuery',
          role: ['디자인, 마크업(기여도: 100%)'],
          etc: ['디자인부터 마크업, 사용자 인터렉션 구현을 담당하여 적응형 웹사이트 구현',
              'Swiper 라이브러리를 활용하여 동적인 슬라이더와 캐러셀 기능을 구현',
              'Kakao Maps API 키를 사용하여 지도 객체를 생성하고, 특정 좌표로 지도 설정 및 마커와 정보창 설정',
              '웹표준/웹접근성/크로스 브라우징'],
          id: 6,
          file: 'kdream.jpg',
          name: '청소년지원센터 꿈드림',
          company: '비즈메이커(웹에이전시)',
        },
        {
          title: '한솔PNS PMS UI 고도화 구축',
          period: '2022.03.01 ~ 2022.03.31',
          url: null,
          skill: 'Html, Scss, Javascript, jQuery',
          role: ['마크업(기여도: 100%)'],
          etc: ['마크업과 사용자 인터렉션 구현을 담당하여 백 오피스 웹사이트 구현',
              'Babel을 사용하여 ES6작성 코드를 버전다운하여 배포',
              'pqGrid 라이브러리를 활용하여 데이터 테이블의 디자인 시안에 맞추어 색상, 폰트, 테두리, 버튼, 스크롤 스타일 커스터마이즈하여 프로젝트의 시각적 품질이 향상에 기여'],
          id: 7,
          file: 'hansol.jpg',
          name: '한솔PNS',
          company: '(주)미래와기술',
        },
        {
          title: '대한항공케이터링센터 NonERP UI 고도화 구축',
          period: '2021.12.07 ~ 2022.05.31',
          url: null,
          skill: 'Html, Scss, Javascript, jQuery',
          role: ['디자인, 마크업, 프론트(기여도: 100%)'],
          etc: ['기내 면세품 관리시스템(AFS), 외항사 객실 용품 재고관리 시스템(COS), 주요 기내면세품 실적 관리시스템(IFS) 백오피스 웹사이트의 디자인부터 마크업, 프론트 담당하여 비즈니스 로직을 유지하면서 일관성 있는 UI 구현',
              '2000년대 초반에 개발된 Java, JSP 기반 환경의 레거시 코드에서 발생하는 HTML 렌더링 오류를 모던 브라우저에서 대폭 개선',
              'Babel을 사용하여 ES6작성 코드를 버전다운하여 배포',
              'Google Charts 라이브러리를 활용하여 막대 차트, 원형 차트, 라인 차트를 사용하여 데이터를 시각화하였고 차트의 색상, 레이블, 축, 범례, 툴팁을 사용자 맞춤 디자인으로 커스터마이즈하여 데이터 표현 구현',
              '형상관리도구 svn 사용 개발',
              '모던 브라우저에서 IE11까지의 크로스 브라우징'],
          id: 8,
          file: 'koreanair.jpg',
          name: '대한항공 케이터링센터',
          company: '(주)데이터사이언스연구소',
        },
        {
          title: 'NHN BC 플랫폼 어드민 신규 개발',
          period: '23.02.24 ~ 23.02.28',
          url: null,
          skill: 'Html, Scss, Javascript, jQuery',
          role: ['마크업(기여도: 100%)'],
          etc: ['마크업과 사용자 인터렉션 구현을 담당하여 고정형 웹사이트 구현',
              'SCSS 사용하여 재사용 할 수 있고 유지보수가 용이한 스타일 시스템 구축', 
              '템플릿 엔진 Nunjucks를 사용하여 템플릿과 컴포넌트를 모듈화하여 재사용성과 유지보수 용이성에 기여',
              '형상관리도구 git 사용 개발',
              '모던 브라우저에서 IE11까지 크로스 브라우징'],
          id: 9,
          file: 'nhnpebble.jpg',
          name: 'NHN BC 플랫폼',
          company: '엔에이치엔서비스주식회사',
        },
        {
          title: 'NHN Cloud make IT 2023 신규 개발',
          period: '23.04.24 ~ 23.05.04',
          url: 'https://makeit.nhncloud.com/2023',
          skill: 'Html, Scss, Javascript, jQuery',
          role: ['마크업, 프론트(기여도: 80%)'],
          etc: ['마크업과 프론트 담당하여 반응형 웹사이트 구현',
              '디자이너의 의도에 알맞은 사용자 인터렉션 구현하여 프로젝트 목표 달성\n1. HTML5 canvas에 비디오를 렌더링하여 동영상이 아닌 이미지와 같은 재생 비디오 배너를 구현\n2. getImageData 메서드를 사용하여 비디오의 프레임에서 색상 값을 추출하고 배경색을 조정하여 다양한 디바이스에서 배경색과 비디오가 어우러져 자연스러운 전체 화면 영상 구현\n3. Swiper 라이브러리를 활용하여 동적인 슬라이더와 캐러셀 기능을 구현\n4. 프로그램 목록 화면 내 태블릿 및 모바일 디바이스 사용 시 스크롤 할 때 프로그램 시간이 상단에 고정되도록 스크롤 이벤트를 구현',
              '기존 프로젝트에서 재활용할 수 있는 요소를 기반으로 신규 프로젝트를 진행하면서 불필요한 레거시 코드와 파일을 분석 후 제거하여 22년 산출물 대비 코드 간소화와 유지보수성 개선',
              '22년 산출물 대비 사용자 인터랙션 요소를 37.5% 증가시켜 검수 과정에서 유관 업무 담당자의 피드백을 신속하게 반영',
              '형상관리도구 git 사용 개발'],
          id: 10,
          file: 'makeit23.jpg',
          name: 'NHN Cloud make IT',
          company: '엔에이치엔서비스주식회사',
        },
        {
          title: 'NHN Cloud IDC 사용자 포털 신규 개발',
          period: '2023.07.11 ~ 2023.07.21',
          url: null,
          skill: 'Html, Scss, Javascript, jQuery',
          role: ['마크업(기여도: 100%)'],
          etc: ['마크업과 사용자 인터렉션 구현을 담당하여 고정형 웹사이트 구현',
              '선 진행된 회원 포털과 공통으로 사용하는 HTML, JavaScript, SCSS를 분석 후 공통 요소로 분리하여 UI 컴포넌트의 재사용성 개선',
              '템플릿 엔진 Nunjucks를 사용하여 템플릿을 모듈화하여 재사용성과 유지보수 용이성에 기여',
              '형상관리도구 git 사용 개발'],
          id: 11,
          file: 'nhncloudidc.jpg',
          name: 'NHN Cloud IDC',
          company: '엔에이치엔서비스주식회사',
        },
        {
          title: 'NHN Cloud 포털/콘솔 유지보수',
          period: '2022.10.5 ~ 2024.08.30',
          url: 'https://www.nhncloud.com',
          skill: 'Html, Css, Javascript, jQuery',
          role: ['마크업(기여도: 2022.10~2023.05 - 25% / 2023.06~ 50%)'],
          etc: ['마크업과 사용자 인터렉션 구현을 담당하여 반응형/고정형 웹사이트 유지보수',
              '주요 컴포넌트 퍼블리싱 가이드 제작을 주도하여 일관된 사용자 경험에 기여',
              '디스플레이 픽셀 밀도에 따른 폰트 가독성 이슈 개선으로 사용자 경험 향상에 기여',
              '백엔드 개발자와의 협업을 통해 CSS 동기화 이슈를 파악하고 대응 전략 수립, 검수 프로세스 제안으로 배포 후 수정 요청 건수 47% 감소',
              'Vue.js를 기반으로 한 개발 환경에서 화면 요소의 문제를 신속히 식별하고 분석하여 해결책 제시',
              'JavaScript와 프레임워크/라이브러리, Bootstrap 사용하여 사용자 인터렉션 구현',
              '다양한 플랫폼, 반응형, 다크모드에 대응 가능한 eDM 제작',
              '마켓플레이스 자동화 개선 프로젝트에 참여하여, 기존 마크업 리소스에 포함된 레거시 소스를 분석 후 정리',
              '업데이트된 디자인 가이드를 마크업 리소스에서의 현행화(주요 컴포넌트 위주)진행하여 시각적 통일성 향상',
              '형상관리도구 git 사용 개발'],
          id: 12,
          file: 'nhncloud.jpg',
          name: 'NHN Cloud',
          company: '엔에이치엔서비스주식회사',
        },
        {
          title: 'INSIDE NHN 개편',
          period: '2024.04.09 ~ 2024.08.01',
          url: 'https://inside.nhn.com/',
          skill: 'Html, Scss, Javascript',
          role: ['마크업, 프론트(기여도: 90%)'],
          etc: ['마크업과 프론트 담당하여 반응형 웹사이트 구현',
              'UI 개발팀 내부 리소스 기준으로 초기 로딩 시간 약 88.59% 개선(개편 전 DOMContentLoaded: 2.06 s / 개편 후 DOMContentLoaded: 235 ms)',
              'IntersectionObserver API를 사용하여 이미지를 지연 로딩하고, 중요한 이미지에 fetchpriority="high”를 적용하여 트래픽 절약, 페이지 로딩 속도 향상, 사용자 경험 개선 및 브라우저 리소스 최적화에 기여',
              'SCSS와 BEM 네이밍 컨벤션, CSS 변수를 사용하여 재사용 할 수 있고 유지보수가 용이한 스타일 시스템 구축',
              '적절한 라이브러리 활용으로 디자이너의 의도에 알맞은 사용자 인터렉션 구현하여 프로젝트 목표 달성\n1. 메인 화면 유튜브 영역 내 YouTube API를 활용하여 사용자 인터페이스와 상호작용할 수 있도록 비디오 재생 제어를 구현\n2. 전반적인 화면에서 GSAP 라이브러리의 트위닝 기능을 활용하여 애니메이션과 트랜지션을 구현\n3. 메인 화면 푸터 영역 내 Matter 라이브러리를 활용하여 SVG로 표현된 그래픽 요소가 실제 2D 물리 엔진의 영향을 받아 동적으로 반응하도록 구현\n4. Swiper 라이브러리를 활용하여 동적인 슬라이더와 캐러셀 기능을 구현',
              '리플로우를 발생시키는 CSS 속성의 변경을 최소화하여 웹 성능 최적화에 기여',
              '템플릿 엔진 Nunjucks를 사용하여 템플릿과 컴포넌트를 모듈화하여 재사용성과 유지보수 용이성에 기여',
              '형상관리도구 git 사용 개발'],
          id: 13,
          file: 'insidenhn.jpg',
          name: 'INSIDE NHN',
          company: '엔에이치엔서비스주식회사',
        }
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
                '사용자 인터렉션 구현(Javascript, jQuery)'],
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
                '사용자 인터렉션 구현(Javascript, jQuery)'],
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
                        사용자 인터랙션 구현 경험이 있으며
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
                        크로스 브라우징을 위해 안정적인 속성을 사용하고
                        최신 트랜드에 맞추어 작성하고자 노력합니다.
                        또한 재활용성과 가독성을 보완할 수 있는 Scss전처리기를 사용합니다.`,
        }
      ],
      faq: [
        {
          question: '지금까지의 업무 경험에 대하여 설명해주세요.',
          answer: `5년차 프론트엔드 개발자(웹 퍼블리셔)로서 NHN Service에서 NHN, NHN Cloud 포탈/콘솔의 운영과 신규 UI 개발을 담당하고 있으며 대한항공케이터링센터 백오피스 고도화 프로젝트에 참여하여 UI를 개선하였고 웹에이전시에서 다수의 웹 서비스 UI 개발과 유지보수 경력이 있습니다.<br><br>
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
    }
  },
})

export default store


    