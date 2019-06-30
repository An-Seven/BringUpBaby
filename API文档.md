##登录注册接口
1、请求发送手机号和密码
    API:http://10.11.52.238:8000/user/getcode/
    请求方式：GET
    字 段 名：name
    cb结果 ：{
                 "msg": "验证码发送成功,请注意查收",
                 "status": 0,
                    "data": {
                         "name": "13083640226",
                         "code": 884231
                        }
                    }
        1、1拿到返回的结果发送接口请求验证码
        API:http://101.132.77.26/code/index.php
          请求方式：post
          字 段 名：phone  
                   code
          CB结果 ：{code:1;msg:"发送成功"}