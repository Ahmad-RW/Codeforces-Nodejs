e = input().split(' ')
n = int(e[0])
m = int(e[1])
result = "YES"
prev_row_color = ""
i = 0
while i < n:
    j = 0
    row = input()
    while j < m:  
        curr = row[j]  
        if j+1 == len(row):
            break
        nxt = row[j+1]

        if curr != nxt:
            result = "NO"
        j += 1
    row_color = curr
    if row_color == prev_row_color:
        result = "NO"

    prev_row_color = row_color
    i += 1


print(result)