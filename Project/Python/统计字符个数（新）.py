print("本程序由御风工作室编写。")
s=input("请输入一个字符串：")
digit,upper,lower,space,other=0,0,0,0,0
for i in s:
    if i.isdigit():
        digit=digit+1
    elif i.isupper():
        upper=upper+1
    elif i.islower():
        lower=lower+1
    elif i.isspace():
        space=space+1
    else:
        other=other+1
print("数字字符：%d\n大写字母：%d\n小写字母：%d\n空格字符：%d\n其他字符：%d\n"%(digit,upper,lower,space,other))