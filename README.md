## Next.js App Router

[한 입 크기로 잘라먹는 Next.js](https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%ED%81%AC%EA%B8%B0-nextjs)

#### router-group

- `src/app` 디렉토리에서 소괄호로 감싸주면 경로에 영향을 미치지 않으면서 따로 분리할 수 있다.

#### Server Component / Client Component

- Page router 에서는 디폴트로 서버 -> 클라이언트로 JS 번들 파일을 보내서 hydration 과정을 거쳐야 했음 (클라이언트 컴포넌트)
- 하지만 정적 컨텐츠만 존재하는 일부 페이지에서는 굳이 hydration 과정이 필요하지 않기 때문에 번들 파일을 받을 필요가 없음 (서버 컴포넌트)
- 따라서 App router 에서는 개발자가 직접 '서버에서만 실행되는 컴포넌트'와 '클라이언트에서 실행되는 컴포넌트'를 선언할 수 있음
- App router 에서는 디폴트로 모든 컴포넌트들이 **서버 컴포넌트**로 설정되어있음. 따라서 코드 상의 로직은 서버에서 실행되며 클라이언트 측에 노출되지 않음 (`window`,`document` 객체, 리액트 hooks 접근 불가)
- 만약 클라이언트 컴포넌트로 설정하려면 파일 최상단에 `"use client"` 작성
- 디폴트로는 서버 컴포넌트라 가정, 입력이나 클릭처럼 상호작용이 필요하다면 클라이언트 컴포넌트로 작성
- 클라이언트 컴포넌트에서는 서버 컴포넌트를 import 할 수 없음, 만약 서버 컴포넌트를 갖고오기 위해선 children으로 주입해야함
- 서버 컴포넌트를 실행하게 되면 RSC payload가 생성되고, 그 이후에 HTML 파일이 생성됨
- 네비게이팅이 일어나면 공통적으로 RSC payload 를 보내고, 만약 클라이언트 컴포넌트라면 JS 번들파일도 같이 보냄
