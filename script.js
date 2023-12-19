//complete this code
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def get_name(self):
        return self.name

    def set_age(self, age):
        self.age = age


class Student(Person):
    def study(self):
        print(f"{self.get_name()} is studying")


class Teacher(Person):
    def teach(self):
        print(f"{self.get_name()} is teaching")
