from turtle import *
bgcolor("red")
pensize(1)
color("yellow")
pu()
goto(-400,300)
hideturtle()
begin_fill()
pd()
for i in range(5):
    fd(60)
    left(72)
    fd(60)
    right(144)
end_fill()
xy_list=[(-160,340),(-105,250),(-120,160),(-175,70)]
for i in range(5):
    pu()
    goto(xy_list[i])
    begin_fill()
    pd()
    for i in range(5):
        hideturtle()
        fd(22)
        left(72)
        fd(22)
        right(144)
    end_fill()
    

