import random #随机函数库
import time #时间库

print("本程序由御风工作室编写。")
count,num=1,0 #分别表示题目个数，答对的题目个数
begin_time=time.time() #获取当前系统时间
while count<11:
    op1=random.randint(1,20) #随机生成一个不大于20的数作为第一操作数
    op2=random.randint(1,20) #随机生成一个不大于20的数作为第一操作数
    op=random.randint(1,4) #随机生成一个不大于4的数作为操作符
    if op ==1: #加法运算
        print(str(op1)+"+"+str(op2)+"=",end="")
        result=int(input())
        if result==op1+op2:
            print("正确！")
            num=num+1 #答对题目个数加1
        else:
            print("错误！")
    elif op==2: #减法运算
        if op1<op2:#保证被减数》减数
            op1,op2=op2,op1
        print(str(op1)+"-"+str(op2)+"=",end="")
        result=int(input())
        if result==op1-op2:
            print("正确！")
            num=num+1 #答对题目个数加1
        else:
            print("错误！")
    elif op==3: #乘法运算
        print(str(op1)+"*"+str(op2)+"=",end="")
        result=int(input())
        if result==op1*op2:
            print("正确！")
            num=num+1 #答对题目个数加1
        else:
            print("错误！")
    else:
        while op2==0: #除法中除数不能为0
            op2=random.randint(1,100)
        if op1<op2: #保证被除数》除数
            op1,op2=op2,op1
        print(str(op1)+"/"+str(op2)+"=",end="")
        result=int(input())
        if result==op1//op2:
            print("正确！")
            num=num+1 #答对题目个数加1
        else:
            print("错误！")
    count=count+1
end_tine=time.time() #获取系统当前时间
print("答对"+str(num)+"道题目，得分"+str(10*num))
print("用时为"+str(end_tine-begin_time)) #两次时间差为运行时间