#御风工作室出品，版权所有，仿冒必究
height=int(input("请输入身高："))
weight=float(input("请输入体重："))
vision=float(input("请输入C字视力表视力："))
if height>=169 and height<=185 and weight>=50 and vision>=0.3:
    print("恭喜，你符合报考飞行员的条件")
else:
    print("抱歉，你不符合报考飞行员的条件")
