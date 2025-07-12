name_password={"zhangsan":"abc123","lisi":"123456","wangwu":"666666","qiansan":"888888"}
user_name=input("enter your name:")
user_password=input("enter your password:")
if user_name in name_password.keys():
    if user_password==name_password[user_name]:
        print("Load Success!")
    else:
        print("Password wrong!")
else:
    print("user name not exit")