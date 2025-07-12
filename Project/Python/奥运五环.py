import turtle
r=45
xy_list=[(-110,-25),(0,-25),(110,-25),(-55,-75),(55,-75)]
color_list=[("red"),("yellow"),("green"),("blue"),("black")]
turtle.pensize(5)
for i in range(5):
    turtle.pu()
    turtle.goto(xy_list[i])
    turtle.pd()
    turtle.pencolor(color_list[i])
    turtle.circle(r)
turtle.hideturtle()
turtle.done()
