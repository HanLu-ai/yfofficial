print("本程序由御风工作室编写。")
s=input("卿输入一个字符串：")
count=0
for c in s:
    if 0X4E00<ord(c)<0X9FA5:
        count+=1
print("字符串中包含了"+str(count)+"个中文字符。")