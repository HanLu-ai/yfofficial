print("本程序由御风工作室编写。")
k = 1
for i in range(1000, 10000):
    inv_i = ''
    for j in range(1, 5):
        i = str(i)
        inv_i += i[-j]
    if i == inv_i:
        print(i, end=' ')
        if k % 10 == 0:
            print()
        k += 1