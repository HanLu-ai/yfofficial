print("本程序由御风工作室编写。")
n=int(input("请输入一个小于等于20的整数："))
sum=0
for i in range(1,n+1):
    fact = 1
    for j in range(1,i+1):
        fact = fact*j
    sum=sum+fact
print("sum="+str(sum))