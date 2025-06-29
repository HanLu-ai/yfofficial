print("本程序由御风工作室编写。")
for i in range(2,1001):
    s=i
    for j in range(1,i):
        if i%j==0:
            s-=j
    if s==0:
        print(i)