# >wecode Git Rebase Test

해당 레포지토리는 `git rebase test`를 위한 레포지토리입니다.

시험 시간은 총 2시간이며, `git rebase`에 익숙해질 때까지 연습을 하셔도 좋습니다.

수강생분들은 아래 안내에 따라 단계별 과제를 진행해주시기 바랍니다.

<br>
<br>

## 📍 시험 안내 및 초기 세팅

1. 본인 github 페이지로 이동하여 repository를 생성해주세요.

   <br>
   <img width="271" alt="image" src="https://user-images.githubusercontent.com/74031598/205198100-f3587479-5c3a-453a-a20d-4d9ec762e84e.png">

   repository 이름은 아래과 같이 설정해주세요:

   ```shell
   git-rebase-practice
   ```

2. 이 레포지토리를 clone 받아 `1번`에서 생성한 repository로 remote 주소를 변경해주세요.

   - `wecode-git-rebase-test` 레포지토리를 클론해주세요.

   ```shell
   $ git clone https://github.com/wecode-bootcamp-korea/wecode-git-rebase-test.git
   ```

   - 터미널에서 클론 받은 레포지토리의 디렉토리 경로로 이동 후 remote 연결을 해제해주세요.

   ```shell
   $ git remote remove origin
   ```

   - 이후 개인 Github에 생성한 레포지토리의 주소로 remote를 다시 연동해주세요.

   ```shell
   $ git remote add origin https://github.com/[GITHUB_USERNAME]/git-rebase-practice.git
   ```

   - 새로 생성하여 연동한 레포지토리에 초기 상태의 main branch를 push 해주세요.

   ```shell
   $ git push -u origin main
   ```

3. 이후 본인의 포지션에 따른 폴더로 이동하여 안내에 따라 과제를 진행헤주세요.

4. 다른 개발자와 협업을 하기위해 `branch naming`과 `commit message`와 관련된 convention이 존재합니다. 아래 **참고사항** 을 확인하여 이번 시험에 적용해주세요.

<br>
<br>

## 📍 참고사항

해당 시험은 점수를 평가하지 않습니다.
주변 동기분들과의 충분한 의사소통과 다양한 오픈 소스를 접하면서 문제 해결 능력을 발휘해주세요.

추가로, 다른 개발자와 협업을 할 수 있으며 코드의 버전을 관리할 수 있는 git과 github을 충분히 활용하기 위해서는 다양한 convention과 규칙을 잘 이해하고 있어야 합니다.

회사마다 다른 convention 규칙을 가지고 있지만, 위코드에서 따르고 있는 convention 규칙을 이번 시험 간 반드시 적용해주세요.

<br>

### Commit message convention

`commit` 메시지는 다른 개발자가 나의 개발 작업을 이해하기 쉽게 작성해 놓은 요약본입니다. 아래 예시를 참고하여 시험에 대한 내용이 충분히 전달될 수 있도록 commit 메시지를 작성해주세요.

- 커밋메시지 작성 예시:

  ```
  // 로그인 기능을 구현하여 새로운 코드를 추가하는 경우
  Add: 로그인 기능 구현 완료

  // 추가된 로그인 기능에 수정 사항을 반영한 경우 (Multi-line command)
  Modify: 로그인 기능 구현 수정
    - 이메일 유효성 검사 로직 수정
    - 비밀번호 유효성 검사 로직 수정

  // 버그를 해결한 경우
  Fix: 로그인 id, pw에 공백 입력 가능한 버그 픽스
  ```

---

참고링크

[Commit message Convention](https://study.wecode.co.kr/session/content/123).

[Github 활용법 및 유의 사항](https://wecode.notion.site/Github-5696658a360f4e789159c75d65b885ec)
