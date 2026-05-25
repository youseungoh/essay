#!/usr/bin/env node
// =====================================================
//  security-check.js — GitHub 업로드 전 보안 자가 점검
//
//  실행 방법:
//    node security-check.js
//
//  index.html 파일에 실제 API 키가 포함되어 있는지
//  자동으로 검사합니다. GitHub에 올리기 전에 실행하세요.
// =====================================================

const fs   = require('fs');
const path = require('path');

const TARGET = path.join(__dirname, 'index.html');

const CHECKS = [
  {
    name   : '실제 Anthropic API 키 포함 여부',
    regex  : /sk-ant-api[0-9]+-[A-Za-z0-9_\-]{20,}/,
    danger : true,
    msg    : '⛔ API 키가 코드 안에 있습니다! 즉시 삭제하세요.',
  },
  {
    name   : 'localStorage 저장 방식 사용 여부',
    regex  : /localStorage\.setItem\(['"]essay_api_key['"]/,
    danger : false,
    msg    : '✅ localStorage 방식 확인됨 (안전)',
  },
  {
    name   : 'Overloaded 자동 재시도 로직',
    regex  : /res\.status\s*===\s*529/,
    danger : false,
    msg    : '✅ Overloaded 재시도 로직 포함',
  },
  {
    name   : 'config.js 의존성 없음',
    regex  : /src=["']config\.js["']/,
    danger : true,
    msg    : '⚠️ config.js 로드 코드가 있습니다. 제거를 권장합니다.',
  },
  {
    name   : '직접 API 호출 방식 (Worker 없음)',
    regex  : /api\.anthropic\.com\/v1\/messages/,
    danger : false,
    msg    : '✅ 직접 API 호출 방식 (localStorage 키 사용)',
  },
  {
    name   : 'API 키 마스킹 처리',
    regex  : /maskKey/,
    danger : false,
    msg    : '✅ API 키 마스킹 처리 포함',
  },
  {
    name   : '다중 사진 업로드 기능',
    regex  : /uploadedImages/,
    danger : false,
    msg    : '✅ 여러 장 사진 업로드 기능 포함',
  },
  {
    name   : '이미지 전처리 (선명화)',
    regex  : /preprocessImage/,
    danger : false,
    msg    : '✅ 흐린 사진 자동 선명화 기능 포함',
  },
  {
    name   : '텍스트 입력 채점 기능',
    regex  : /essayTextInput/,
    danger : false,
    msg    : '✅ 텍스트 붙여넣기 채점 기능 포함',
  },
  {
    name   : '사진 업로드 채점 기능',
    regex  : /uploadedBase64/,
    danger : false,
    msg    : '✅ 사진 업로드 채점 기능 포함',
  },
  {
    name   : 'DOMContentLoaded 이벤트 바인딩',
    regex  : /DOMContentLoaded/,
    danger : false,
    msg    : '✅ 버튼 이벤트 안전 바인딩 (API 키 저장/삭제)',
  },
  {
    name   : '학생 답안 탭 기능',
    regex  : /evalStudentTab/,
    danger : false,
    msg    : '✅ 학생 답안 탭 포함',
  },
];

console.log('\n🔍 논리논술 앱 보안 점검 시작\n' + '='.repeat(50));

if (!fs.existsSync(TARGET)) {
  console.error('❌ index.html 파일을 찾을 수 없습니다.');
  process.exit(1);
}

const content  = fs.readFileSync(TARGET, 'utf8');
const sizeKB   = (fs.statSync(TARGET).size / 1024).toFixed(1);
const lines    = content.split('\n').length;
let   hasError = false;

CHECKS.forEach(({ name, regex, danger, msg }) => {
  const found  = regex.test(content);
  const isPass = danger ? !found : found;
  console.log(`${isPass ? '✅' : '❌'} ${name}`);
  console.log(`   ${msg}\n`);
  if (!isPass && danger) hasError = true;
});

console.log('='.repeat(50));
console.log(`📄 index.html: ${lines.toLocaleString()}줄 / ${sizeKB}KB`);
console.log('='.repeat(50));

if (hasError) {
  console.log('❌ 보안 문제가 발견되었습니다. GitHub에 올리기 전에 수정하세요.\n');
  process.exit(1);
} else {
  console.log('✅ 보안 점검 통과! GitHub에 안전하게 업로드할 수 있습니다.\n');
  process.exit(0);
}
