import math
kb = input().split(' ')

b = int(kb[0])
k = int(kb[1])

a = input().split(' ')

n = 0
c = 1
for x in a:
    y = int(x)
    n = n + (y*math.pow(b, k-c))
    c += 1

if n%2 == 0:
    print("even")
else:
    print("odd")