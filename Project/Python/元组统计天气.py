weather=(('Sunday','29','23','Cloudy','3'),('Monday','26','23','Cloudy','3'),('Thursday','24','21','rainy','2'),('Wednesday','29','24','Sunny','2'),('Tuesday','36','25','Sunny','2'),('Friday','33','27','Cloudy','4'),('Saturday','34','26','Sunny','3'))
sun_num=tem_num=0
for i in range(7):
    if weather[i][3]=='Sunny':
        sun_num+=1
    if (int(weather[i][1])+int(weather[i][2]))/2>29:
        tem_num+=1
print("本周天气晴朗的天共有： "+f'{sun_num}'+" 天")
print("本周平均气温高于29°的天共有： "+f'{tem_num}'+" 天")