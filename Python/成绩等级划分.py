#御风工作室出品，版权所有，仿冒必究
print("请输入学生的百分制成绩:",end='')
score=float(input())
if 0<=score<60:
    print("对应的等级为E")
if 60<=score<70:
    print("对应的等级为D")
if 70<=score<80:
    print("对应的等级为C")
if 80<=score<90:
    print("对应的等级为B")
if 90<=score<=100:
    print("对应的等级为A")
