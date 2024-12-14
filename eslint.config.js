import react from 'eslint-plugin-react'
import typescript from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'

export default [
	{
		files: ['**/*.ts', '**/*.tsx', '**/*.jsx', '**/*.js'],
		languageOptions: {
			parser, // typescript 문법을 분석할 파서
			parserOptions: {
				ecmaVersion: 'latest', // 최신 javascript 문법
				sourceType: 'module', // ES 모듈 사용
				ecmaFeatures: {
					jsx: true, // React JSX문법
				},
			},
		},
		plugins: {
			react, //React코드 검사
			'@typescript-eslint': typescript, // Typescript 코드 검사
		},
		rules: {
			// quotes, semi 등 prettier에서 관리하는 규칙은 제외
			'no-unused-vars': 'off', // 사용하지 않는 변수의 기본경고 off
			'@typescript-eslint/no-unused-vars': 'warn', // 사용하지 않는 변수는 경고만
		},
	},
]
