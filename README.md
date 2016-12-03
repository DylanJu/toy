# Toy Problems

Toy Problems 의 repository 에 오신 수강생 분들 반갑습니다. 이 repository 에 매일 아침 새로운 code challege 가 업데이트될 예정입니다.

coding challenges 를 풀기 위해 자유롭게 구글링을 하시기 바랍니다!

## Using this Repository

매일의 toy problem 을 각각의 폴더안에서 찾을 수 있습니다.

## Getting a Copy of the Repo

이 repository 를 fork 하고 clone 까지 하시기 바랍니다.

## Submitting your Solutions

**VERY IMPORTANT: Solutions 을 제출하기전에 syntax erros 를 모두 수정하시기 바랍니다.**

Solutions 은 [Pull Request](https://help.github.com/articles/using-pull-requests) 를 통해 제출합니다. Follow these steps:

1. **여러분의 fork** 에서 `Pull Requests` 를 선택하고, `New pull request` 를 생성합니다.
2. pull request 를 생성하기 전에 반드시 target branch 를 여러분의 username 으로 선택해줘야 합니다. (aka `base branch`) 선택후의 pull request heading 은 아래와 같이 보입니다.

  > codestates:username ... username:master

3. Pull Request 의 comment block 에 Grading Outline 을 채워넣고 복사해 붙입니다. [grading-outline](https://github.com/codestates/2016-08-toy-problems/blob/master/grading-outline.md) 참고
4. `Send pull request` 를 클릭합니다.

## Updating the Repository

매일 아침 새로운 toy problem 이 추가되면 수강생분들은 자신의 repo 가 codestates 의 repo 와 동일하도록 업데이트 해줘야 합니다. 아래와 같은 명령어를 먼저 입력하시기 바랍니다.

    git remote add upstream https://github.com/codestates/YYYY-MM-toy-problems.git
  
  > `YYYY-MM` 을 실제 기수의 시작 년, 월과 같도록 변경해주시기 바랍니다. (ex: 2016-04)

위의 명령어를 입력한 후에는 repo 를 업데이트 하는 것은 다음과 같이 간단합니다.

    git checkout master       // Your fork's master branch
    git pull upstream master  // Your class's master branch

이 명령어는 master branch 로 check out 한 후에 code states 의 main repo 에 업데이트된 사항들을 체크하고 수강생 분들의 branch 로 merge 하게 됩니다.# toy
