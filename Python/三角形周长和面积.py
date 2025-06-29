import math

a = float(input())
b = float(input())
c = float(input())
p=(a+b+c)/2
m=math.sqrt(p*(p-a)*(p-b)*(p-c))
print("周长={:.2f}".format(a + b + c))
print("面积={:.2f}".format(m))

