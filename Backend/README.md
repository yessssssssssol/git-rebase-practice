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
   cd Backend/git-rebase-test/
   ```

2. node modules를 설치해 주세요.

   ```
   npm install
   ```

3. `.env.sample`을 보고 서버 구동에 필요한 `.env`를 작성해주세요.

4. `npm start`를 입력하시고 정상적으로 작동하는지 확인해 주세요.

5. 프로젝트를 위한 초기 세팅이 완료되었습니다!

<br>
<br>
<br>

## 4. signup API

> 프로젝트에서 내가 맡은 API는 signup에 대한 API이고, 동시에 팀원인 김코드는 signin에 대한 API를 진행합니다.

<br>

1.  `Backend/git-rebase-test/` 경로의 `main` 브랜치에서 `feature/signup` 브랜치를 생성해 주세요.

2. `feature/signup` 브랜치로 이동하여 아래 예시코드와 동일한 내용을 `app.js`에서 작업해주세요.

    ```javascript 
    // 예시 코드
    app.post('/users/signup', async (req, res) => {
      const { username, email, password } = req.body
        return await appDataSource.query(`
          INSERT INTO
            users (
              username,
              email,
              password			
            )
          VALUES (
            ?,
            ?,
            ?,
            ?
          )
        `, [username, email, password])
    })
    ```
    
3. 위 작업에 대한 내역을 commit으로 남겨주세요.

4. 코드가 잘못 작성되어 수정이 필요합니다. 아래의 예시에 따라 수정 후 다시 한 번 더 commit을 남겨주세요. (총 2개의 커밋이 작성되어 있어야 합니다.)

    ```javascript 
    // 예시 코드
    app.post('/users/signup', async (req, res) => {
      const { username, email, password } = req.body
        return await appDataSource.query(`
          INSERT INTO
            users (
              username,
              email,
              password			
            )
          VALUES (
            ?,
            ?,
            ?                          // 4개였던 '?'를 3개로 수정
          )
        `, [username, email, password])
    })
    ```

5. 위 작업이 완료되었으면 해당 브랜치를 `push`하여 `PR (pull request)`을 생성해주세요.  
commit message 컨벤션을 따르고 있는지 다시 한번 확인해주세요!

</br>

<br>

## 5. signin API

> 맡은 signup에 대한 API를 내가 열심히 개발하고 있을 때, 동시에 같은 팀원인 김코드는 마찬가지로 signin에 대한 API를 개발하고 있습니다. 위 상황에 대한 개발 작업을 가정하기 위해 진행되는 과정입니다.

1.  `Backend/git-rebase-test/` 경로의 `main` 브랜치에서 `feature/signin` 브랜치를 생성해 주세요.

2. `feature/signin` 브랜치로 이동하여 아래 예시코드와 동일한 내용을 `app.js`에서 작업해주세요.

    ```javascript
    // 예시 코드
    app.post('/users/signin', async (req, res) => {
      const { email, password } = req.body;
      const user = await appDataSource.query(`
        SELECT
          users.id
          users.password
        FROM
          users
        WHERE
          users.email = ?
      `, [email]);
      
      if (!user) {
        return res.json({message: "SIGNUP_REQUIRED"})
      };

      if (!(user[0].password === password)) {
        return res.json({message: "INVALID_PASSWORD"})
      };
      
      return res.json({ userId: user.id});
    })
    ```

3. 위 작업이 완료되었으면 해당 브랜치를 `push`하여 `PR (pull request)`을 생성해주세요.  
commit message 컨벤션을 따르고 있는지 다시 한번 확인해주세요!

<br>

## 6. Update app.js
> 또 다른 같은 백엔드 팀원인 김개발이 팀원들과의 별다른 소통 없이 초기 셋팅 과정에서 작성되었던 app.js에 코드를 추가 해버렸네요!

1.  `Backend/git-rebase-test/` 경로의 `main` 브랜치에서 `fix/init` 브랜치를 생성해 주세요.

2. `app.js`에서 다음의 부분을 추가해주세요.

    ```javascript
    .catch(() => {                                    // initialize().then() 밑의 41번 line에 추가
      console.log("DB Connection has been failed")
    })
    ```

3. 위 작업이 완료되었으면 해당 브랜치를 `push`하여 `PR (pull request)`을 생성해주세요.  
commit message 컨벤션을 따르고 있는지 다시 한번 확인해주세요!

</br>

**여기까지, 프로젝트 초기 세팅 이후 `나`는 signup API, `김코드`는 signin API, `김개발`은 app.js 수정을 작업하여 PR까지 올려둔 상황이네요!**

<img width="850" alt="image" src="https://user-images.githubusercontent.com/94527515/205252552-f709c3c0-f0da-46e7-be33-1958487b042b.png">


<br>
<br>

# **[Test 1]** `git merge` vs. `git rebase`

> 김코드가 작업한 signin API가 먼저 리뷰를 받고 main에 병합된 이후, 업데이트 된 main을 내가 작업하는 signup 브랜치에 병합해야 하는 상황입니다!

<br>

## 1. 메인 PR 병합

1. github 레포지토리로 이동 후 `fix/init` PR을 `Rebase and Merge`해주세요.

<img width="800" alt="image" src="https://user-images.githubusercontent.com/94527515/205252439-3e139be2-568d-4649-ac7a-def7c77faf34.png">

<br>

## 2. main 최신화

1. `main` 또는 `master` 브랜치에서 `pull` 키워드를 사용해 remote의 업데이트된 내용을 받아주세요.

</br>

## 3. merge

1. 내가 작업하던 branch인 `feature/signup`으로 이동합니다.

2. `merge` 키워드를 사용하여 main/master branch의 내용을 `feature/signup` 브랜치에 병합합니다.

3. `git log`를 입력해 기존에 내가 작성한 커밋과 새로 추가된 커밋을 확인한 후, 해당 내용을 캡쳐합니다.

<br>

## 4. reset

1. `git reflog` 키워드를 통해 merge 이전의 commit을 찾아 `hash id`를 복사합니다.

2. `git reset --hard [복사한 commit hash id]`를 입력해 merge 이전의 상태로 되돌립니다.

<br>

## 5. rebase

1. `rebase` 키워드를 사용하여 main/master branch의 내용을 `feature/signup` 브랜치에 병합합니다.

2. `git log`를 입력해 기존에 내가 작성한 커밋과 새로 추가된 커밋을 확인한 후, 해당 내용을 캡쳐합니다.

<br>

## 6. 과제 제출

1. `3-3`, `5-2`에서 각 로그를 캡쳐한 파일을 `Google Classroom`에 제출해주시고, 어떤 부분이 왜 다른지에 대해 서술해주세요.

<br>
<br>

# **[Test 2]** `git rebase -i`

❗️ _[참고] `git rebase -i`로 interaction 모드 진입 시, vim 에디터가 아닌 다른 에디터나 창이 열리는 경우 터미널에 아래의 커맨드를 입력해주세요!_

```shell
$ git config --global core.editor "vim"
```

<br>

## 1. reset

1. `git reflog` 키워드를 통해 rebase 이전의 commit을 찾아 `hash id`를 복사합니다.

2. `git reset --hard [복사한 commit hash id]`를 입력해 rebase 이전의 상태로 되돌립니다.

<br>

## 2. rebase -i

1. `rebase` 키워드와 `-i`를 사용하여 과정에 따라 main/master branch의 내용을 `feature/signup` 브랜치에 병합합니다.

2. `git log`를 입력해 하나로 커밋이 합쳐진 것을 확인한 후 `push`합니다.

3. 마찬가지로 `PR`에서도 commit이 하나로 합쳐진 모습을 확인하고 캡쳐합니다.

<img width="550" alt="image" src="https://user-images.githubusercontent.com/94527515/205252811-57ac014f-0095-40ae-8857-a31e6a99065d.png">

<br>

## 3. 과제 제출

1. `2-3`에서 캡쳐한 파일을 `Google Classroom`에 제출해주세요.

<br>
<br>

# **[Test 3]** `Resolving conflicts`

## 1. Fix app.js PR 병합

1. github 레포지토리로 이동 후 `feature/signin` PR을 `Rebase and Merge`해주세요.

<br>

## 2. Conflict 확인

1. 내가 작업하여 push 한 `feature/signup` PR에서 컨플릭트가 발생한 상황을 확인하고, 캡쳐합니다.

<img width="800" alt="image" src="https://user-images.githubusercontent.com/94527515/205253009-34a37e4d-fd21-4b82-84f8-549554386c2a.png">

<br>

## 3. main 최신화

1. `main` 또는 `master` 브랜치에서 `pull` 키워드를 사용해 remote의 업데이트된 내용을 받아주세요.

<br>

## 4. rebase -i

1. `rebase` 키워드와 `-i`를 사용하여 과정에 따라 main/master branch의 내용을 `feature/signup` 브랜치에 병합합니다.

2. 이 때 발생하는 `conflict`를 해결해주시고, 완료되었다면 `push`해주세요.

3. conflict가 해결된 PR을 확인하고, 캡쳐합니다.

<img width="800" alt="image" src="https://user-images.githubusercontent.com/94527515/205253295-1dff20fe-7aed-4b31-9a78-6081901a38c6.png">


<br>

## 5. 과제 제출

1. `2-2`, `4-3`에서 캡쳐한 파일을 `Google Classroom`에 제출해주세요.

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
