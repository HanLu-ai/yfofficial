print("本程序由御风工作室编写。")
number=int(input("请输入学生人数："))
sum=0
for i in range(number):
    score=float(input('NO {}：'.format(i+1)))
    sum+=score
average=sum/number
print('平均成绩为{}'.format(average,2))