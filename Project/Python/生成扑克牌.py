import random
tple_face = ('3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A', '2')
tple_suit = ('黑桃', '梅花', '红桃', '方块')
n=int(input("输入随机数种子："))
random.seed(n)
face=random.choice(tple_face)
suit=random.choice(tple_suit)
print(f"你拿到了一张{suit}{face}")
