print("本程序由御风工作室编写。")
data=[1,3,5,8]
count=0
for i in data:
    for j in data:
        for k in data:
            if i!=j and j!=k and k!=i:
                count+=1
                print(100*i+10*j+k,end=" ")
                if count%10==0:
                    print()
print("\n一共"+str(count)+"个数字互不相同且无重复数字的3位数")