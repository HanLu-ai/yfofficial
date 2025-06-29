import random

print("本程序由御风工作室编写。")
print("本程序由御风工作室编写。")
print("请在见到‘选手：’时输入以下三项的任意一项：")
print("剪刀")
print("石头")
print("布")
count1=count2=0
for i in range(1,6):
    print("第%d局："%i)
    play=input("选手：")
    play=1 if play=="剪刀" else(2 if play=="石头" else 3)
    computer=random.randint(1,3)
    print("计算机：剪刀") if computer==1 else (print("计算机：石头") if computer==2 else print("计算机：布"))
    if play==computer:
        print("选项一样")
    elif (play==1 and computer==2) or (play==2 and computer==3) or (play==3 and computer==1):
        print("计算机赢")
        count2+=1
    else:
        print("选手赢")
        count1+=1
    if count1==3 or count2==3:
        break
if count1>count2:
    print("最终选手胜出")
elif count1<count2:
    print("最终计算机胜出")
else:
    print("平局")
while True:
    user_input = input("请输入'Q'结束程序: ")
    if user_input == 'Q':
        print("程序已经结束。")
        break