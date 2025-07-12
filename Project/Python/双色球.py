import random
seed=int(input("输入随机数种子："))
#设置随机数种子
random.seed(seed)
redballs=[]
#生成红色球：6个不同的数字
while len(redballs)<6:
    number=random.randint(1,33)
    if number not in redballs:
            redballs.append(number)
redballs.sort()
#生成蓝色球
blueball=random.randint(1,16)
print("本期的开奖号码是：")
print("红色球：",end="")
for i in range(6):
    print(f"{redballs[i]}",end=" ")
print("蓝色球：{}".format(blueball))


