from math import *

print("本程序由御风工作室编写。")
count=0
for n in range(2,201):
    i,flag=2,True
    while i<=sqrt(n) and flag:
        if n%i==0:
            flag=False
        i=i+1
    if flag:
        count=count+1
        print(n,end="\t")
        if count%10==0:
            print()