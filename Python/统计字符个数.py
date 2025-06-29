s="学而时习之，不亦说乎？有朋自远方来，\
不亦乐乎？人不知而不愠，不亦君子乎？"
cha=bd=0
for i in s:
    if i.isalnum():
        cha+=1
    elif i.isspace():
        pass
    else:
        bd+=1
print("字符数为"+" "+str(cha))
print("标点符号数为"+" "+str(bd))
