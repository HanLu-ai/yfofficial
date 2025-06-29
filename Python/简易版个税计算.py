print("本程序由御风工作室编写。")
salary = int(input('请输入税前工资：'))
insurance = int(input('请输入五险一金等扣除：'))
other = int(input('请输入其他专项扣除：'))
if salary < 5000:
    tax1=0
else:
    tax1=salary-5000-insurance-other
if tax1<=3000:
    tax=tax1*0.03
elif tax1<12000:
    tax=tax1*0.1-210
elif tax1<25000:
    tax=tax1*0.2-1410
elif tax1<35000:
    tax=tax1*0.25-2660
elif tax1<55000:
    tax=tax1*0.3-4410
elif tax1<80000:
    tax=tax1*0.35-7160
else:
    tax=tax1*0.45-15160
print("应纳税所得额为："+str('{:.2f}'.format(tax1)+"，"+"个人所得税为："+str('{:.2f}'.format(tax))+"，"+"实发工资为："+str('{:.2f}'.format(salary-tax-insurance))))