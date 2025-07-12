deposit = int(input())  # 存款金额本金
years = int(input())
interest_rates = float(input())
interest=deposit*(1+interest_rates)**years-deposit
print("利息={:.2f}".format(interest))

