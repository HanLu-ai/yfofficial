class Student:
    def __init__(self, name, chinese, math):
        self.name = name
        self.chinese = chinese
        self.math = math

def main():
    students = []
    num_students = int(input("班级人数："))
    for _ in range(num_students):
        name = input("姓名：")
        chinese = float(input("语文："))
        math = float(input("数学："))
        students.append(Student(name, chinese, math))

    # 计算平均分
    total_chinese = sum(student.chinese for student in students)
    total_math = sum(student.math for student in students)
    average_chinese = total_chinese / num_students
    average_math = total_math / num_students

    # 找出最高分
    max_chinese = max(student.chinese for student in students)
    max_math = max(student.math for student in students)
    max_chinese_student = next(student for student in students if student.chinese == max_chinese)
    max_math_student = next(student for student in students if student.math == max_math)

    # 输出结果
    print(f"本班级的语文平均分：{average_chinese:.2f}")
    print(f"本班级的数学平均分：{average_math:.2f}")
    print(f"本班级{max_chinese_student.name}语文分最高为：{max_chinese:.1f}")
    print(f"本班级{max_math_student.name}数学分最高为：{max_math:.1f}")

if __name__ == "__main__":
    main()
