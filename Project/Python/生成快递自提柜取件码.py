import random

print("本程序由御风工作室编写。")
n=int(input("请从0-9中选择数字填写："))
characters='ABCDEFGHIJ0123456789'
random.seed(n)
Sn=''
for i in range(6):
    Sn=Sn+random.choice(characters)
print(Sn)