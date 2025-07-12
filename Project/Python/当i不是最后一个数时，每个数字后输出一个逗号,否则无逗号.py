print("本程序由御风工作室编写。")
n=int(input())
for i in range(n):
    if i !=n-1:
        print(i,end=",")
    else:
        print(i,end="")