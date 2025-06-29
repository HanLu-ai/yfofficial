print("*****欢迎来到2022冬奥会*****")
name_pass={"bingdundun":"Abc12345","xuerongrong":"Mar11111","meiyangyang":"To123456"}
name=input("请输入您的用户名：")
lun=0
if name in name_pass.keys():
    while lun<3:
        passw = input("请输入您的密码：")
        if passw != name_pass[name]:
            print("密码错误")
            lun+=1
            if lun==3:
                print("对不起，您三次密码错误，不能登录")
        else:
            print("登录成功")
            break
else:
    print("该用户不存在")