import Base64 from './Base64'

//ID와 PW로 DB 검색
function getUser(id, pw) {
  let users = require('./users.json')
  // return alert(JSON.stringify(users))
  let user = [];
  for (let i in users){
    if(id === users[i].id && pw === users[i].pw){
      user.push(users[i])
    }
  }
  return user;
  // return alert(JSON.stringify(user[0]));
}
// getUser('user1', 'YXNkMTIz');  ID와 PW가 일치할 경우 출력

export const login = (pId, pPw) => {
  //서버 로직 start
  let id = pId;
  let pw = pPw;
  pw = Base64.btoa(pw);

  //ID와 PW로 DB에서 검색
  let user = getUser(id, pw);

  //없을 경우
  if(user.length === 0){
    return {status: 'ERROR', message: '아이디와 비밀번호를 확인하세요.'}
  }

  //DB 무결성 에러
  if(user.length !== 1){
    return {status: 'ERROR', message: 'DB ERROR'}
  }

  let key = {
    login: true,
    id
  }
  key = Base64.btoa(JSON.stringify(key, 0, 2));

  return {status: 'SUCCESS', data: {key: key}};
}

export const logout = () => {
  // 서버 섹션 삭제 생략
  return {
    status: 'SUCCESS'
  }
}
