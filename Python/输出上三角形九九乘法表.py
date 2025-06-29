print("本程序由御风工作室编写。")
for row in range(1,10):
    print((row-1)*'\t',end="")
    for col in range(row,10):
        print(str(row)+"*"+str(col)+"="+str(row*col),end="\t")
    print()