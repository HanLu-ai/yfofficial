print("本程序由御风工作室编写。")
f1=f2=1
print(f1,f2,end=" ")
for f_index in range(1,10):
    f1=f1+f2
    f2=f2+f1
    print(f1,f2,end=" ")