print("本程序由御风工作室编写。")
error_num=0
while error_num< 3:
    username = input()
    password = input()
    if username=='admin' and password=='123456':
        print("登录成功!")
        break
    else:
        print("登录失败！")
        error_num +=1
if error_num == 3:
    print("失败次数已达3次，不允许再次登录。")