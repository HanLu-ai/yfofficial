import random

# 设置随机数种子
seed = int(input("输入随机数种子："))
random.seed(seed)

# 生成列表
lst = [random.randint(1, 100) for _ in range(10)]

# 输入k的值
k = int(input("请输入一个1~10之间的数："))

# 检查k的范围
if k < 1 or k > 10:
    print("输入的值不能小于0或者大于10")
else:
    # 输出原列表
    print(f"原列表是：{lst}")

    # 排序列表
    sorted_lst = sorted(lst, reverse=True)

    # 输出排序后的列表
    print(f"排序后的列表是：{sorted_lst}")

    # 输出第k大的元素
    print(f"第{k}大的值是：{sorted_lst[k - 1]}")