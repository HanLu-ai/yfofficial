print("本程序由御风工作室编写。")
a,b=input("input a,b:").split(" ")
print("排序前："+a+"，"+b)
if int(a)>int(b):
    a,b=b,a
print("排序后："+a+"，"+b)