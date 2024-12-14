export default {
  semi: false, // 세미콜론
  singleQuote: true, // 따옴표 1개 2개
  tabWidth: 2, // 탭의 사이즈
  trailingComma: 'all', // 코드 끝에 콤마 넣기
  arrowParens: 'always', // 화살표 함수에서 매개변수를 가로로 감쌀지 말지
  endOfLine: 'lf', // 줄바꿈 방식 설정, window와 mac의 호환을 위해 lf로 지정
  printWidth: 80, // 코드 한줄의 갯수, 가독성을 위해 80까지 설정
  bracketSpacing: true, // 객체 리터럴에 공백을 넣을지 말지
  bracketSameLine: false, // html태그 같이 닫는 괄호">"를 같은 줄에 넣을지 말지
  overrides: [
    // 특정 파일별로 옵션 지정
    {
      files: 'nothing-file.tsx',
      options: {
        printWidth: 200,
      },
    },
    // tsx파일은 전부 babel typescript형태로 파싱
    {
      files: '*.tsx',
      options: {
        parser: 'babel-ts',
      },
    },
  ],
}
