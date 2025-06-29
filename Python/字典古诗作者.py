import random

poet={'锄禾':'李绅','九月九日忆山东兄弟':'王维','咏鹅':'骆宾王','秋浦歌':'李白','竹石':'郑燮','石灰吟':'于谦','示儿':'陆游',"静夜思":"李白"}
n=int(input("输入随机数种子："))
random.seed(n)
poet1=random.choice(list(poet.keys()))
ans=input(f"{poet1}的作者是：")
if ans==poet[poet1]:
    print("回答正确!")
else:
    print(f"回答错误，{poet1}的作者是{poet[poet1]}")