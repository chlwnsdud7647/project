## 1. 팀 소개
**팀명** : 4팀 사알려조

**팀원** : 하정우(팀장), 김지언, 최준영, 한지수, 이수엽, 이희재
<hr />
<hr />

## 2. 기획내용
**프로젝트 주제** : 업무 지원 플랫폼

**프로젝트 기간** : 2024년 10월 5일 ~ 2024년 10월 21일

**프로젝트 인원** : 6명

**프로젝트 소개** : 
<hr />
<hr />

## 3. 역할 분담
| 하정우(front) |한지수(front)|최준영(front)|김지언(front)|이수엽(back)|이희재(back)|
|:-------------:|:-------------:|:--------------:|:-------------:|:---------:|:----------:|
| MyPage | LoginPage/SignUpPage | Nav | MainPage | usersAPI | stateAPI |
| MailPage | Password | AuthorizationPage | Design총괄 | announcementAPI | profileAPI  |
| Layout | TeamPage |  |  | approbalAPI | scheduleAPI |
|  | ErrorPage |  |  |  |  |
<hr />
<hr />

## 4. ERD

<hr />
<hr />

## 5. 구현기능
##### 로그인 및 회원가입
- 로그인 : 사용자의 입력 값을 유효성 검사(front/back) 후 토큰 저장
- 로그아웃 : 토큰을 삭제하여 로그인 없이 url로 접근하는 사용자를 제한
- 회원가입 : 필수 입력사항 유효성 검사(front) 후 데이터를 DB에 전송
- 비밀번호 : 이메일 유효성 검사(front) 및 인증(back) 후 3분 내에 인증코드 입력, 인증코드가 일치 한다면 새 비밀번호 생성 후 DB에 저장

##### 사이드바 및 상단바, 본인 프로필 고정배너
- 사이드바 : 각 페이지로 이동
- 상단바 : 개인 프로필 사진이 바뀌면 동기화, 알림이 오면 알림(종 버튼) 활성화
- 본인 프로필 고정배너 : 현재 근무상황(출장, 자리비움 등) 수정, 결재 및 연차관리, 프로필 사진 관리

##### 메인페이지
- 공지사항 : 
- 알림 : 

##### 개인페이지
- 인적사항 수정 : 
- 일정 관리 : 
- 연차 관리 : 

##### 팀페이지
- 팀원의 상태 : 팀원의 근무상황을 확인
- 팀원의 일정 : 팀원의 일정을 파악
- 팀원의 업무 : 팀원의 업무 계획을 파악

##### 결재페이지
- 결재 서류 : 결재서류 양식 작성후 데이터에 DB전송 전송 완료후 카운팅 작업진행

<hr />
<hr />

## 6. 보완할 점 & 추후 개발하고자 하는부분
- 관리자페이지 : 결재와 회원 등을 관리
- 자유게시판 : 직원들끼리 자유롭게 소통할 수 있는 페이지를 구현
- 달력페이지 : 회사의 행사 및 기념일을 관리
- 팀페이지 : 팀원 개인일정만 보는 것이 아닌, 팀원 모두 공통으로 관리할 수 있는 기능

- 전체적인 코드의 재사용성이나 통일성이 부족

<hr />
<hr />

## 접속링크
http://34.22.95.156:3004

<hr />
<hr />


## 시연영상


