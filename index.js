var express = require('express'); //설치한 express module을 불러와서 변수(express)에 담습니다.
var app = express(); //express를 실행하여 app object를 초기화 합니다.

app.get('/', function(req, res) { //'/' 위치 'get'요청을 받는 경우.
  res.send('Hello World!');
});

var port = 3000; //사용할 포트 번호를 port 변수에 넣는다.

//서버가 실행되는 경우에 실행됨.
app.listen(port, function(){ //3000번 포트에 node.js를 연결합니다.
  console.log('server on! http://localhost:'+port);
});


//get, listen 과 같이  어떠한 조건이 갖춰지면 실행되는 코드를 가지는 함수를 이벤트 리스너라고 합니다.

