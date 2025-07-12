import turtle
turtle.bgcolor("red")
turtle.color("yellow")
turtle.shape("turtle")
turtle.pensize(7)
turtle.begin_fill()
for i in range(5):
    turtle.fd(100)
    turtle.left(72)
    turtle.fd(100)
    turtle.right(144)
turtle.end_fill()
turtle.hideturtle()
