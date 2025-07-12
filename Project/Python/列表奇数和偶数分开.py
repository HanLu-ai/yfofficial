import random
m=int(input("输入随机数种子："))
random.seed(m)
lst=[]
for i in range(10):
    n=random.randint(1,100)
    lst.append(n)
odd_lst = []#奇数列表
even_lst = []#偶数列表
#遍历原始列表，将奇数放入odd_lst,将偶数放入even_lst
for num in lst:
     if num % 2==1:
            odd_lst.append(num)
     else:
            even_lst.append(num)
#合并两个列表
new_lst=odd_lst+even_lst
print(new_lst)

