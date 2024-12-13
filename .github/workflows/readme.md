git rebase -i HEAD~숫자 -숫자만큼 rebase진행

- :q로 종료해도 rebase가 남으니 그 때는 origin을 삭제하고 다시 pull로 받으면 원래대로 돌아온다.

git rebase --continue -진행하기
git rebase --abort -중단
git push --force-with-lease -force는 강제로 넣어서 히스토리를 덮어버리 -with-lease가 있는것으로 원격브랜치의 히스토리 변경을 허용한다. 이력을 볼 수 있도록 안전장치를 추가하는 개념
