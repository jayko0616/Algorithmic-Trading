const express = require('express');  // express 라는 서버를 사용하기위한 프레임워크 받아오기
const app = express();        //express 사용
const bodyParser = require('body-parser');
const port = 5000;            // 포트넘버 설정

app.use(bodyParser.json());

app.post('/api', (req, res)=>{
    let name = req.body.name;
      console.log(name);
      console.log('탐정이죠 ');
      const spawn = require('child_process').spawn;

// 2. spawn을 통해 "python 파이썬파일.py" 명령어 실행
      const result = spawn('python', ['pri.py']);

// 3. stdout의 'data'이벤트리스너로 실행결과를 받는다.
      result.stdout.on('data', function(data) {
          console.log(data.toString());
      });

  // 4. 에러 발생 시, stderr의 'data'이벤트리스너로 실행결과를 받는다.
      result.stderr.on('data', function(data) {
          console.log(data.toString());
      });
  });
  
app.listen(port, ()=>{         // 서버 시작하는 부분
  console.log(`http://localhost:${port}  경로는 이거입니다.`);
})