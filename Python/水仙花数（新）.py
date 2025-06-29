print("本程序由御风工作室编写。")
for i in range(100, 1000):
    x0=i%10
    x1=(i//10)%10
    x2=i//100
    sum=x0**3+x1**3+x2**3
    if sum == i:
        print(str(x2) + "*" + str(x2) + "*" + str(x2) + "+" + str(x1) + "*" + str(x1) + "*" + str(x1) + "+" + str(x0) + "*" + str(x0) + "*" + str(x0) + "=" + str(i))