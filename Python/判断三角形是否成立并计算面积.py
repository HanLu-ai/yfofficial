print("本程序由御风工作室编写。")
from math import *
a=eval(input())
b=eval(input())
c=eval(input())
p = (a + b + c) / 2
if a+b<=c or b+c<=a or a+c<=b:
    print("NO")
else:
    s=sqrt(p*(p-a)*(p-b)*(p-c))
    print("YES",f"{s:.2f}",sep=" ")