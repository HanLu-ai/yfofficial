print("本程序由御风工作室编写。")
year=int(input("请输入年份："))
if(year%400==0 or year%100!=0 and year%4==0):
    print(f"{year}是闰年。")
else:
    print(str(year)+"不是闰年。")