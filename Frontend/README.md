# 시험 안내

git rebase에 익숙해지기 위한 세 가지 Test가 진행될 예정입니다.

아래 설명을 잘 읽고 공통 시험과 각 분야 (F/B)별 시험을 진행해주세요.

테스트는 `팀 프로젝트(나, 김코드, 김개발) 상황을 가정`하여 진행합니다.

각 테스트에 따른 제출 자료를 잘 읽고 답안을 누락없이 제출해주세요.

`commit 메시지`와 `branch 네이밍` convention을 잘 지켜주세요.

제한 시간은 2시간이며, 1번과 2번 답안은 반드시 제출해주시고 시간이 부족한 경우 3번 답안은 개인 별로 정리하는 시간을 가져주세요.

<br>
<br>

# 세팅

> 팀 프로젝트를 가정하기 위해, 초기 세팅부터 시작해 각자의 작업물을 구현합니다.<br>
이미 세팅이 완료되신 분들은 `3. Install node modules`부터 진행해주세요!

<br>

## 1. 개인 Github 홈페이지로 이동 후 원격 repository를 생성해주세요.

<img width="275" alt="image" src="https://user-images.githubusercontent.com/74031598/205198481-841f7eb0-731c-4d45-ac9d-d2689ace0ad2.png">


- repository 이름은 다음과 같이 설정해주세요.

  ```
  git-rebase-practice
  ```

<br>

## 2. clone 받은 해당 디렉토리를 본인 github의 `git-rebase-practice` 레포지토리에 연동해주세요.

1. `wecode-git-rebase-test` 레포지토리를 클론해주세요.

   ```shell
   $ git clone https://github.com/wecode-bootcamp-korea/wecode-git-rebase-test.git
   ```

2. 터미널에서 클론 받은 레포지토리의 디렉토리 경로로 이동 후 remote 연결을 해제해주세요.

   ```shell
   $ git remote remove origin
   ```

3. 이후 개인 Github에 생성한 레포지토리의 주소로 remote를 다시 연동해주세요.

   ```shell
   $ git remote add origin https://github.com/[GITHUB_USERNAME]/git-rebase-practice.git
   ```

4. 새로 생성하여 연동한 레포지토리에 초기 상태의 main branch를 push 해주세요.

   ```shell
   $ git push -u origin main
   ```

<br>

## 3. Install node modules

1. 터미널에서 `git-rebase-test`폴더로 진입해 주세요.

   ```
   cd Frontend/git-rebase-test/
   ```

2. node modules를 설치해 주세요.

   ```
   npm install
   ```

3. `npm start`를 입력하시고 정상적으로 작동하는지 확인해 주세요.

4. 프로젝트를 위한 초기 세팅이 완료되었습니다!

<br>
<br>

## 4. 로그인 페이지

> 프로젝트에서 내가 맡은 페이지는 로그인 페이지이고, 동시에 팀원인 김코드는 메인 페이지를 진행합니다.

<br>

### 4-1. feature/login - `Add: login 페이지 레이아웃`

1.  `Frontend/git-rebase-test/` 경로의 `main` 브랜치에서 `feature/login` 브랜치를 생성해 주세요.

2.  `src` 폴더 안에 `pages` 폴더를 생성해 주시고 과제를 진행하기 위한 `Login` 폴더 및 파일들을 생성해 주세요.

    ```shell
    src
    └── pages
          └── Login
                └── Login.js
                └── Login.css
    ```

3.  `Login.js`에 아래의 코드를 입력해 주세요.

    <details>
    <summary>Login.js</summary>

    ```javascript
    import React, { useState } from "react";
    import "./Login.css";

    export default function Login() {
      return (
        <div className="login">
          <main className="loginContainer">
            <h1 className="title">Git Rebase Test</h1>
            <form className="loginForm">
              <input
                className="userId"
                type="text"
                placeholder="이메일을 입력해 주세요."
              />
              <input
                className="userPassword"
                type="password"
                placeholder="비밀번호를 입력해 주세요."
              />
              <button className="loginButton" type="button">
                로그인
              </button>
            </form>
          </main>
        </div>
      );
    }
    ```

     </details>

4.  `Login.css`에 아래의 코드를 입력해 주세요.
    <details><summary>Login.css</summary>
       
       ```css
       .login {
         display: flex;
         justify-content: center;
         align-items: center;
         height: 100vh;
       }

       .loginContainer {
         padding: 30px;
         border: 1px solid gray;
         border-radius: 15px;
         text-align: center;
       }

       .title {
         font-size: 40px;
       }

       .loginForm {
         display: flex;
         flex-direction: column;
         margin: 40px 0;
       }

       .userId,
       .userPassword {
         width: 280px;
         margin-bottom: 15px;
         padding: 15px 0 15px 15px;
         border: 1px solid gray;
         border-radius: 5px;
         background-color: #fafafa;
         outline: none;
       }

       .loginButton {
         padding: 15px 0;
         background-color: #0095f6;
         border: none;
         border-radius: 5px;
         color: white;
         font-weight: 700;
         outline: none;
         cursor: default;
       }

       .loginButton:disabled {
         background-color: lightgray;
       }
       ```

    </details>

5.  `Router.js`에서 `/login`의 경로에 로그인 페이지가 routing 되도록 `Login` 컴포넌트를 연결해 주세요.

    ```javascript
    <Route path="/" element={<App />} />
    <Route path="/login" element={<Login />} />
    ```

6.  로그인 레이아웃이 완료되었다는 commit을 생성합니다.<br>
    e.g) `Add: login 페이지 레이아웃 완료`

<br>

### 4-2. feature/login - `Add: login 페이지 기능 구현`

1.  `Login.js`에 아래의 코드를 입력해 주세요.
       <details><summary>Login.js</summary>

       ```javascript
       import React, { useState } from "react";
       import { useNavigate } from "react-router-dom";
       import "./Login.css";

       export default function Login() {
         const [userInfo, setUserInfo] = useState({ id: "", password: "" });
         const navigate = useNavigate();

         const getUserInfo = (e) => {
           const { name, value } = e.target;
           setUserInfo({ ...userInfo, [name]: value });
         };

         const isValid = userInfo.id.includes("@") && userInfo.password.length >= 5;

         const goToMain = (e) => {
           e.preventDefault();
           navigate("/main");
         };

         return (
           <div className="login">
             <main className="loginContainer">
               <h1 className="title">Git Rebase Test</h1>
               <form className="loginForm" onSubmit={goToMain}>
                 <input
                   className="userId"
                   name="id"
                   type="text"
                   value={userInfo.id}
                   placeholder="이메일을 입력해 주세요."
                   onChange={getUserInfo}
                 />
                 <input
                   className="userPassword"
                   name="password"
                   type="password"
                   value={userInfo.password}
                   placeholder="비밀번호를 입력해 주세요."
                   onChange={getUserInfo}
                 />
                 <button className="loginButton" type="button" disabled={!isValid}>
                   로그인
                 </button>
               </form>
             </main>
           </div>
         );
       }
       ```

    </details>

2.  `npm start` 입력 후 아래와 같은 화면이 브라우저에 나오는지 확인해 주세요.

    ![git-test-1](https://user-images.githubusercontent.com/37888503/202239045-2757111e-0ee1-4045-910f-1890b1d0db73.gif)

3.  로그인 기능 구현이 완료되었다는 commit을 생성합니다.<br>
    e.g) `Add: login 페이지 기능 구현`

4.  내가 맡은 로그인 페이지 구현이 완료되었네요!<br>
    해당 브랜치를 `push`하여 `PR (pull request)`을 생성해 주세요.  
     두 개의 commit이 commit message 컨벤션을 따르고 있는지 다시 한번 확인해주세요!

<br>

## 5. 메인 페이지

> 팀원인 김코드의 메인 페이지 작업을 가정하기 위해 진행하는 부분입니다.

1. `main` 브랜치에서 `feature/main` 브랜치를 생성해 주세요.

2. `pages` 폴더 안에 `Main` 폴더 및 파일들을 생성해 주세요.

   ```shell
   src
   └── pages
         └── Main
               └── Main.js
               └── Main.css
   ```

3. `Main.js`에 아래의 코드를 입력해 주세요.
   <details><summary>Main.js</summary>

   ```javascript
   import React from "react";
   import { Link } from "react-router-dom";
   import "./Main.css";

   export default function Main() {
     return (
       <main className="main">
         <h1>Main</h1>
         <img className="image" src="images/code.avif" alt="메인 이미지" />
         <Link to="/">
           <button className="button">이전으로</button>
         </Link>
       </main>
     );
   }
   ```

    </details>

4. `Main.css`에 아래의 코드를 입력해 주세요.
   <details><summary>Main.css</summary>

   ```css
   .main {
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     height: 100vh;
   }

   .image {
     width: 400px;
     border-radius: 15px;
     margin-bottom: 25px;
   }

   .button {
     width: 200px;
     height: 40px;
     background-color: #fafafa;
     border: 1px solid gray;
     border-radius: 5px;
     outline: none;
     cursor: pointer;
   }

   .button:hover {
     border: 1px solid #0095f6;
     color: #fafafa;
     background-color: #0095f6;
   }
   ```

    </details>

5. `Router.js`에서 `/`의 경로에 메인 페이지가 routing 되도록 `Main` 컴포넌트를 연결해 주세요.

   ```jsx
   <Route path="/" element={<Main />} />
   <Route path="/login" element={<App />} />
   ```

6. `npm start` 입력 후 아래와 같은 화면이 브라우저에 나오는지 확인해 주세요.

![git-test-2](https://user-images.githubusercontent.com/37888503/202240758-dffad4ae-aaa3-48d5-af7f-28366dc56181.gif)

7.  메인 페이지 구현이 완료되었다는 commit을 생성합니다.<br>
    e.g) `Add: main 페이지 구현`

8.  해당 브랜치를 `push`하여 `PR (pull request)`을 생성해 주세요.  
    commit이 commit message 컨벤션을 따르고 있는지 다시 한번 확인해주세요!

<br>

## 6. Router

> 팀원인 김개발이 팀원들과의 소통 없이 Router를 수정해버렸네요!

1. `main` 브랜치에서 `feature/router` 브랜치를 생성해 주세요.

2. `Router.js`에서 각 Route를 다음과 같이 수정해주세요.

   ```jsx
   <Route path="/" element={<Main />} />
   <Route path="/sign-in" element={<App />} />
   ```

3. Router가 수정되었다는 commit을 생성합니다.<br>
   e.g) `Modify: login, main router 경로 수정`

4. 해당 브랜치를 `push`하여 `PR (pull request)`을 생성해 주세요.  
   commit이 commit message 컨벤션을 따르고 있는지 다시 한번 확인해주세요!

<br>

**여기까지, 프로젝트 초기 세팅 이후 `나`는 로그인 페이지, `김코드`는 메인 페이지, `김개발`은 Router 컴포넌트를 작업하여 PR까지 올려둔 상황입니다!**

<br>
<br>

# **[Test 1]** `git merge main` vs. `git rebase main`

> 김코드가 작업한 메인 페이지가 먼저 main에 병합된 이후, 내가 작업하는 login 브랜치에 병합해야 하는 상황입니다!<br> **[Test 1]** 에서는, 우리가 기존에 사용하던 merge 키워드를 사용한 방식과 rebase를 사용한 방식의 차이에 대해 확인해보겠습니다.

<br>

## 1. 메인 페이지 PR 병합

1. github 레포지토리로 이동 후 `feature/main` PR을 `Rebase and Merge`해주세요.

<!-- TODO: 1에 대한 이미지가 포함된 부연 설명 -->

<br>

## 2. main 최신화

1. `main` 또는 `master` 브랜치에서 `pull` 키워드를 사용해 remote의 업데이트된 내용을 받아주세요.

<br>

## 3. merge

1. 내가 작업하던 branch인 `feature/login`으로 이동합니다.

2. `merge` 키워드를 사용하여 main/master branch의 내용을 `feature/login` 브랜치에 병합합니다.

3. `git log`를 입력해 기존에 내가 작성한 커밋과 새로 추가된 커밋을 확인한 후, 해당 내용을 캡쳐합니다.

<br>

## 4. reset

1. `git reflog` 명령어를 입력해 3. merge 이전의 commit을 찾아 `hash id`를 복사합니다.

2. `git reset --hard [복사한 commit hash id]`를 입력해 3. merge 이전의 상태로 되돌립니다.

<br>

## 5. rebase

1. 이번엔 `rebase` 키워드를 사용하여 main/master branch의 내용을 `feature/login` 브랜치에 병합합니다.

2. `git log`를 입력해 기존에 내가 작성한 커밋과 새로 추가된 커밋을 확인한 후, 해당 내용을 캡쳐합니다.

<br>

## 6. 과제 제출

1. `3-3`, `5-2`에서 각 로그를 캡쳐한 파일을 `Google Classroom`에 제출해주시고, 어떤 부분이 왜 다른지에 대해 서술해주세요.

<br>
<br>

# **[Test 2]** `git rebase -i`

> **[Test 2]** 에서는 **[Test 1]** 의 상황에 `git rebase -i` 명령어를 사용하여 interactive rebase를 진행합니다.

<br>

❗️ _[참고] `git rebase -i`로 interaction 모드 진입 시, vim 에디터가 아닌 다른 에디터나 창이 열리는 경우 터미널에 아래의 커맨드를 입력해주세요!_

```shell
$ git config --global core.editor "vim"
```

<br>

## 1. reset

1. `git reflog` 키워드를 통해 [Test 1] 5. rebase 이전의 commit을 찾아 `hash id`를 복사합니다.

2. `git reset --hard [복사한 commit hash id]`를 입력해 [Test 1] 5. rebase 이전의 상태로 되돌립니다.

<br>

> 자, 다시 내가 작업하던 feature/login branch에 최신화된 main/master branch를 병합할 차례네요!

<br>

## 2. rebase -i

1. `rebase` 키워드와 `-i`를 사용하여 과정에 따라 main/master branch의 내용을 `feature/login` 브랜치에 병합합니다.

2. `git log`를 입력해 하나로 커밋이 합쳐진 것을 확인한 후 `push`하여 `PR`을 생성합니다.

3. 마찬가지로 `PR`에서도 commit이 하나로 합쳐진 모습을 확인하고 캡쳐합니다.

<!-- TODO: 3의 이해를 도울 수 있는 예시 이미지 -->

<br>

## 3. 과제 제출

1. `2-3`에서 캡쳐한 파일을 `Google Classroom`에 제출해주세요.

<br>
<br>

# **[Test 3]** `Resolving conflicts`

> 김코드의 feature/main branch가 main에 먼저 병합된 후, 내가 작업하던 feature/login branch에 붙여본 상황입니다.<br>
> 이어서 김개발의 feature/router가 또 main에 병합되네요! 또다시 험난한 리베이스의 여정이 예상됩니다.

<br>

## 1. Router PR 병합

1. github 레포지토리로 이동 후 `feature/router` PR을 `Rebase and Merge`해주세요.

<br>

## 2. Conflict 확인

1. 내가 작업하던 `feature/login` PR에서 컨플릭트가 발생한 상황을 확인하고, 캡쳐합니다.
<!-- TODO: 이해를 도울 수 있는 예시 이미지 -->

<br>

## 3. main 최신화

1. `main` 또는 `master` 브랜치에서 `pull` 키워드를 사용해 remote의 업데이트된 내용을 받아주세요.

<br>

## 4. rebase -i

1. `rebase` 키워드와 `-i`를 사용하여 과정에 따라 main/master branch의 내용을 `feature/login` 브랜치에 병합합니다.

2. 이 때 발생하는 `conflict`를 해결해주시고, 완료되었다면 `push`해주세요.

3. conflict가 해결된 PR을 확인하고, 캡쳐합니다.
<!-- TODO: 이해를 도울 수 있는 예시 이미지 -->

<br>

## 5. 과제 제출

1. `2-1`, `4-3`에서 캡쳐한 파일을 `Google Classroom`에 제출해주세요.

<br>
<br>

# **[Test 4]** `git command` 정리

- 다음 `git command`에 대해 `git-rebase-test/README.md` 파일에 설명을 작성하여 주세요.

- 양식은 자유롭습니다.

- 아래 내용에 얼마나 알고있는지 각자의 양식과 언어로 자유롭게 작성해주시면 됩니다.

```
$ git rebase [-i]
$ git rebase --abort
$ git rebase --continue
$ git reflog
$ git reset
```
