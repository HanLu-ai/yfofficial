print("本程序由御风工作室编写。")
import datetime
year=int(input("请输入出生年份："))
if datetime.date.today().year-year>=18:
    print("是成年人！")