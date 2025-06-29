sum,x,i=0,0.5,1
s=""
while abs(x)>=1e-2:
    if i%2==1:
        s=s+"1/("+str(i)+"*"+str(i+1)+")-"
        a="-"
        sum+=x
    else:
        s=s+"1/("+str(i)+"*"+str(i+1)+")+"
        a="+"
        sum-=x
    i=i+1
    x=1/(i*(i+1))
s=s.rstrip(a)
print(s+"=",round(sum,2))