# Next.js App Router

[한 입 크기로 잘라먹는 Next.js](https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%ED%81%AC%EA%B8%B0-nextjs)

## router-group

- `src/app` 디렉토리에서 소괄호로 감싸주면 경로에 영향을 미치지 않으면서 따로 분리할 수 있다.

## Server Component / Client Component

- Page router 에서는 디폴트로 서버 -> 클라이언트로 JS 번들 파일을 보내서 hydration 과정을 거쳐야 했음 (클라이언트 컴포넌트)
- 하지만 정적 컨텐츠만 존재하는 일부 페이지에서는 굳이 hydration 과정이 필요하지 않기 때문에 번들 파일을 받을 필요가 없음 (서버 컴포넌트)
- 따라서 App router 에서는 개발자가 직접 '서버에서만 실행되는 컴포넌트'와 '클라이언트에서 실행되는 컴포넌트'를 선언할 수 있음
- App router 에서는 디폴트로 모든 컴포넌트들이 **서버 컴포넌트**로 설정되어있음. 따라서 코드 상의 로직은 서버에서 실행되며 클라이언트 측에 노출되지 않음 (`window`,`document` 객체, 리액트 hooks 접근 불가)
- 만약 클라이언트 컴포넌트로 설정하려면 파일 최상단에 `"use client"` 작성
- 디폴트로는 서버 컴포넌트라 가정, 입력이나 클릭처럼 상호작용이 필요하다면 클라이언트 컴포넌트로 작성
- 클라이언트 컴포넌트에서는 서버 컴포넌트를 import 할 수 없음, 만약 서버 컴포넌트를 갖고오기 위해선 children으로 주입해야함
- 서버 컴포넌트를 실행하게 되면 RSC payload가 생성되고, 그 이후에 HTML 파일이 생성됨
- 네비게이팅이 일어나면 공통적으로 RSC payload 를 보내고, 만약 클라이언트 컴포넌트라면 JS 번들파일도 같이 보냄

## Data cache

- 백엔드 서버로부터 불러온 데이터를 Next.js 서버상에 보관 (반영구적)
- `no-store` : 캐싱하지 않음. 항상 백엔드 서버로부터 새로운 데이터를 받아옴(`fetch` 메소드의 디폴트 옵션)
- `force-cache`: 항상 캐싱된 데이터를 사용함. 캐싱되어 있다면 백엔드 서버를 거치지 않음
- `revalidate` : 일정 시간을 주기로 캐시를 업데이트함. 시간이 지나면 일단 stale 데이터를 먼저 보내준 뒤, 새 데이터로 업데이트함

### Request memoization

- 하나의 페이지를 렌더링하는 동안에만 캐시가 살아있음
- 중복된 API 요청을 방지

## Route Cache

- 특정 페이지가 접속 요청을 받을 때마다 매번 변화가 생기거나, 데이터가 달라지는 경우 Dynamic Page로 설정됨, 그 외에는 Static Page 로 설정된다
- 캐싱되지 않은 Data fetching이 일어나는 경우
- 동적함수(쿠키,헤더,쿼리스트링)을 사용하는 경우

### Route Segment Option

- 특정 페이지의 유형을 강제로 static, dynamic 페이지로 설정
- `auto` : 기본값, 강제하지 않음
- `force-dynamic` : 강제로 dynamic 페이지로 설정
- `force-static` : 강제로 static 페이지로 설정, 에러 발생해도 무시하고 빌드
- `error` : 강제로 static 페이지로 설정, 빌드 시 오류를 발생시켜줌
