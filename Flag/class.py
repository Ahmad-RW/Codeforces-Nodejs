n = int(input())
class1 = list()
class2 = list()
i = 0
x = 0
while i < n:
    name = input()
    c = name[0]
    count1 = 0
    count2 = 0
    for j in class1:
        if c == j:
            count1 += 1
    
    for j in class2:
        if c == j:
            count2 += 1

    if count1 < count2:
        class1.append(c)
        x += count1*2
    
    elif count1 > count2:
        class2.append(c)
        x += count2*2
    
    if count1 == count2:
        class1.append(c)
        x += count1*2

    i += 1

print(class1)
print(class2)
print(x)